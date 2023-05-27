import dotenv from "dotenv";

dotenv.config();

export default class EnvironmentSettings {
  public static instance: EnvironmentSettings = new EnvironmentSettings();

  public readonly connectDB: ConnectDB;

  public readonly appConfig: AppConfig;

  private constructor() {
    const handleNumber = (val: string) => {
      let result;
      try {
        result = parseInt(val, 10);
      } catch (e) {
        result = 0;
      }

      return result;
    };

    this.connectDB = {
      host: process.env.DB_HOST as string,
      port: handleNumber(process.env.DB_PORT as string),
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      dataBase: process.env.DB_NAME as string
    };

    this.appConfig = {
      port: handleNumber(process.env.APP_PORT as string)
    };
  }
}

interface ConnectDB {
  readonly host: string;
  readonly port: number;
  readonly user: string;
  readonly password: string;
  readonly dataBase: string;
}

interface AppConfig {
  port: number;
}
