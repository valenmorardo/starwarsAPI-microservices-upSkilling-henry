import { createProxyMiddleware } from "http-proxy-middleware";

const proxyPlanets = createProxyMiddleware({
  target: "http://planets:3003",
  changeOrigin: true,
  pathRewrite: {
    "^/getPlanets": "/getPlanets",
    "^/newPlanet": "/newPlanet",
    "^/planets": "/",
  },
});

export default proxyPlanets;
