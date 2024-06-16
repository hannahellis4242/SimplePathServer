import express from "express";
import basicAuth from "express-basic-auth";
import serveIndex from "serve-index";
import Users from "./Users";

const createApp = (users: Users, publicDir: string) => {
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
