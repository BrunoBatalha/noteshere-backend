require("dotenv").config();
import "reflect-metadata";
import * as express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import "./controllers/userController/user.controller";
import "./controllers/authController/auth.controller";
import { InvesifyConfig } from "./inversify.config";

const server = new InversifyExpressServer(new InvesifyConfig()._container);
server.setConfig((app) => {
  app.use(express.urlencoded({ extended: true }));
});

const app = server.build();
app.listen(3000, () => console.log("Server running: http://localhost:3000"));
