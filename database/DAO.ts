import { DataAccessObject } from "mysql-all-in-one";
import EnvironmentSettings from "../src/env/envConfigs";

const dao = new DataAccessObject({
  host: EnvironmentSettings.instance.connectDB.host,
  port: EnvironmentSettings.instance.connectDB.port,
  user: EnvironmentSettings.instance.connectDB.user,
  password: EnvironmentSettings.instance.connectDB.password,
  database: EnvironmentSettings.instance.connectDB.dataBase
});

export default dao;
