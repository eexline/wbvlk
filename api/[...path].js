/**
 * Vercel serverless proxy → Trade API on VPS.
 * Mini App calls same-origin /api/* (works inside Telegram WebView).
 *
 * Set TRADE_API_BASE in Vercel → Project Settings → Environment Variables.
 */
function joinPath(parts) {
    if (!parts) return "";
    return (Array.isArray(parts) ? parts : [parts]).map(String).join("/");
}

module.exports = async function handler(req, res) {
    const backend = (process.env.TRADE_API_BASE || "").replace(/\/$/, "");
    if (!backend) {
        res.status(500).json({ ok: false, detail: "TRADE_API_BASE is not set" });
        return;
    }

    const suffix = joinPath(req.query.path);
    const qIndex = req.url.indexOf("?");
    const qs = qIndex >= 0 ? req.url.slice(qIndex) : "";
    const target = `${backend}/api/${suffix}${qs}`;

    const headers = { Accept: "application/json" };
    const ct = req.headers["content-type"];
    if (ct) headers["Content-Type"] = ct;
    if (req.headers["x-admin-key"]) headers["X-Admin-Key"] = req.headers["x-admin-key"];

    const init = { method: req.method, headers };
    if (req.method !== "GET" && req.method !== "HEAD") {
        if (typeof req.body === "string") {
            init.body = req.body;
        } else if (req.body != null && Object.keys(req.body).length) {
            init.body = JSON.stringify(req.body);
            if (!headers["Content-Type"]) headers["Content-Type"] = "application/json";
        }
    }

    try {
        const upstream = await fetch(target, init);
        const text = await upstream.text();
        const upstreamCt = upstream.headers.get("content-type");
        if (upstreamCt) res.setHeader("Content-Type", upstreamCt);
        res.setHeader("Cache-Control", "no-store");
        res.status(upstream.status).send(text);
    } catch (err) {
        res.status(502).json({
            ok: false,
            detail: "proxy_error",
            message: String(err && err.message ? err.message : err),
        });
    }
};
