const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
      createProxyMiddleware({
        target: "http://backend:8002",
        changeOrigin: true,
      })
  );
  app.use(
    "/media",
      createProxyMiddleware({
        target: "http://backend:8002",
        changeOrigin: true,
      })
  );
};
