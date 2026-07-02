// Minimal zero-dependency static file server for previewing the Sogody static site.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT) || 8001;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/babel; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".mp4": "video/mp4",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath === "/") urlPath = "/index.html";

    // Mirror the production vercel.json URL structure:
    //  - cleanUrls: /work and /work/ serve work.html
    //  - real folders: /updates/<slug>/ serves updates/<slug>/index.html
    //  - rewrites: /work/<slug> → case-study.html, /services/<slug> → service.html,
    //    /careers/<slug> → career.html (templates read the slug from the path)
    const candidates = [urlPath];
    if (!path.extname(urlPath)) {
      const bare = urlPath.replace(/\/+$/, "");
      if (bare) candidates.push(bare + ".html");
      candidates.push(path.join(urlPath, "index.html"));
      const m = urlPath.match(/^\/(work|services|careers)\/[^/]+\/?$/);
      if (m) {
        const template = { work: "/case-study.html", services: "/service.html", careers: "/career.html" }[m[1]];
        candidates.push(template);
      }
    }

    const tryNext = (i) => {
      if (i >= candidates.length) {
        fs.readFile(path.join(ROOT, "404.html"), (err, data) => {
          res.writeHead(404, { "Content-Type": err ? "text/plain" : "text/html; charset=utf-8" });
          res.end(err ? "Not found" : data);
        });
        return;
      }
      const filePath = path.join(ROOT, candidates[i]);
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        return res.end("Forbidden");
      }
      fs.readFile(filePath, (err, data) => {
        if (err) return tryNext(i + 1);
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
        res.end(data);
      });
    };
    tryNext(0);
  })
  .listen(PORT, () => console.log(`Sogody static site on http://localhost:${PORT}`));
