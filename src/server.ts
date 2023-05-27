import express from "express";
import EnvironmentSettings from "./env/envConfigs";
import { logger } from "./config";

const { port } = EnvironmentSettings.instance.appConfig;
const app = express();

app.listen(port, () => logger.info(`Server is running in http://localhost:${port}`));
