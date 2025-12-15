import winston from "winston";

// const {combine, timestamp, printf, colorize} = winston.format

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});
export const logger = winston.createLogger({
  level: "debug",
  //   format: winston.format.json(),
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        logFormat
      ),
    }),

    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

logger.exceptions.handle(
  new winston.transports.File({ filename: "logs/exceptions.log" })
);
