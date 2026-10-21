/**
 * Same-origin proxy for Mini App → Trade API (TRADE_API_BASE on Vercel).
 * Rewrites in vercel.json send /api/* here.
 */
module.exports = async function handler(req, res) {
    const backend = (process.env.TRADE_API_BASE || "").replace(/\/$/, "");
    if (!backend) {
        res.status(500).json({ ok: false, detail: "TRADE_API_BASE is not set" });
        return;
    }

    let path = req.query.path;
    if (Array.isArray(path)) path = path.join("/");
    path = String(path || "").replace(/^\/+/, "");
    if (!path) {
        res.status(400).json({ ok: false, detail: "missing path" });
        return;
    }

    const qIndex = req.url.indexOf("?");
    let qs = qIndex >= 0 ? req.url.slice(qIndex + 1) : "";
    // drop our internal path= query key, keep the rest (e.g. period=today)
    if (qs) {
        qs = qs
            .split("&")
            .filter((p) => p && !p.startsWith("path="))
            .join("&");
    }
    const target = `${backend}/api/${path}${qs ? `?${qs}` : ""}`;

    const headers = { Accept: "application/json" };
    if (req.headers["content-type"]) headers["Content-Type"] = req.headers["content-type"];
    if (req.headers["x-admin-key"]) headers["X-Admin-Key"] = req.headers["x-admin-key"];

    const init = { method: req.method, headers };
    if (req.method !== "GET" && req.method !== "HEAD") {
        if (typeof req.body === "string") {
            init.body = req.body;
        } else if (req.body != null && typeof req.body === "object" && Object.keys(req.body).length) {
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
