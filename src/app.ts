require("dotenv").config();
import "reflect-metadata";
import * as express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { InversifyConfig } from "./inversify.config";

import "./controllers/userController/user.controller";
import "./controllers/authController/auth.controller";
import "./controllers/noteGroupController/noteGroup.controller";

const server = new InversifyExpressServer(new InversifyConfig()._container);
server.setConfig((app) => {
  app.use(express.urlencoded({ extended: true }));
});

const app = server.build();
app.listen(3000, () => console.log("Server running: http://localhost:3000"));
