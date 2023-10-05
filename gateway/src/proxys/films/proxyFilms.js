import { createProxyMiddleware } from "http-proxy-middleware";

const proxyFilms = createProxyMiddleware({
  target: "http://films:3002",
  changeOrigin: true,
  pathRewrite: {
    "^/getFilms": "/getFilms",
    "^/newFilm": "/newFilm",
    "^/films": "/",
  },
});

export default proxyFilms;
