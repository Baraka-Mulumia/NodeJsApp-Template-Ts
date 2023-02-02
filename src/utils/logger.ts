import { DEFAULT_TIME_FORMAT_PATTERN } from '../constants';
import chalk from 'chalk';
import { format } from 'date-fns';
import util from 'util';

export default class AppLogger {
  public static info = (args: any) =>
    console.log(
      chalk.blue(`[${format(new Date(), DEFAULT_TIME_FORMAT_PATTERN)}]`),
      chalk.bgBlueBright.black(' INFO '),
      typeof args === 'string' ? chalk.blueBright(args) : args
    );

  public static error = (args: any) =>
    console.log(
      chalk.blue(`[${format(new Date(), DEFAULT_TIME_FORMAT_PATTERN)}]`),
      chalk.bgRedBright.black(' ERROR '),
      typeof args === 'string' ? chalk.redBright(args) : args
    );

  public static warn = (args: any) =>
    console.log(
      chalk.blue(`[${format(new Date(), DEFAULT_TIME_FORMAT_PATTERN)}]`),
      chalk.bgYellowBright.black(' WARN '),
      typeof args === 'string' ? chalk.yellowBright(args) : args
    );

  public static success = (args: any) =>
    console.log(
      chalk.blue(`[${format(new Date(), DEFAULT_TIME_FORMAT_PATTERN)}]`),
      chalk.bgGreenBright.black(' SUCCESS '),
      typeof args === 'string' ? chalk.greenBright(args) : args
    );
}

export const InfoLogger = (log: any) => AppLogger.info(log);
export const ErrorLogger = (log: any) => AppLogger.error(log);
export const WarnLogger = (log: any) => AppLogger.warn(log);
export const SuccessLogger = (log: any) => AppLogger.success(log);

export const LogAndInspect = (log: any) =>
  console.log(util.inspect(log, false, null, true));
