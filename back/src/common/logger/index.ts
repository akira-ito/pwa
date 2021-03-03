import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
  })
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new DailyRotateFile({
    json: true,
    filename: 'all-%DATE%.json',
    dirname: 'logs',
    utc: true,
    format: winston.format.json(),
  }),
];

const Logger = winston.createLogger({
  format,
  transports,
});

export default Logger;
