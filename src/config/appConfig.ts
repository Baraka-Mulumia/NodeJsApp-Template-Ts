import dotenv from "dotenv";

dotenv.config();

// config.js
export const APP_CONFIG = {
  port: process.env.PORT || 8080,
  appName: process.env.APP_NAME || "My App",
  env: process.env.NODE_ENV || "production",
};

export const LOG_CONFIG = {
  level: process.env.LOG_LEVEL || "debug",
  logPath: "/node-app/logs/",
};

