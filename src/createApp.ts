import Config from "./Config";
import express from "express";
import basicAuth from "express-basic-auth";
import serveIndex from "serve-index";

const createApp = ({ publicDir, users }: Config) => {
  const app = express();
  app.use(
    basicAuth({
      users,
      challenge: true,
    })
  );

  app.use(express.static(publicDir), serveIndex(publicDir, { icons: true }));
  return app;
};
export default createApp;
