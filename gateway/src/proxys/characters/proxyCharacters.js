import { createProxyMiddleware } from "http-proxy-middleware";

const proxyCharacters = createProxyMiddleware({
  target: "http://characters:3001",
  changeOrigin: true,
  pathRewrite: {
    "^/getCharacters": "/getCharacters",
    "^/newPlanet": "/newPlanet",
    "^/characters": "/",
  },
});

export default proxyCharacters;
