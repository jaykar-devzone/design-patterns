abstract class LogProcessor {
  public static DEBUG = 1;
  public static INFO = 2;
  public static ERROR = 3;
  public static FATAL = 4;
  logProcessor: LogProcessor | null = null;
  protected level: number;

  constructor(level: number) {
    this.level = level;
  }

  protected abstract write(message: string): void;

  public setNextLogger(logProcessor: LogProcessor) {
    this.logProcessor = logProcessor;
  }

  public logMessage(level: number, message: string) {
    if (this.level === level) {
      this.write(message);
    }
    if (this.logProcessor != null) {
      this.logProcessor.logMessage(level, message);
    }
  }
}

class DebugProcessor extends LogProcessor {
  public constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("Debug Logger: " + message);
  }
}

class InfoProcessor extends LogProcessor {
  public constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("Info Logger: " + message);
  }
}

class ErrorProcessor extends LogProcessor {
  public constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("Error Logger: " + message);
  }
}

class FatalProcessor extends LogProcessor {
  public constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("Fatal Logger: " + message);
  }
}

class Main {
  constructor() {
    console.log("### Chain of Responsibility Pattern");
    const loggerChain = Main.getChainOfLoggers();

    loggerChain.logMessage(LogProcessor.DEBUG, "This is a debug message");
    loggerChain.logMessage(LogProcessor.INFO, "This is an info message");
    loggerChain.logMessage(LogProcessor.ERROR, "This is an error message");
    loggerChain.logMessage(LogProcessor.FATAL, "This is a fatal message");
  }

  private static getChainOfLoggers(): LogProcessor {
    const debugLogger = new DebugProcessor(LogProcessor.DEBUG);
    const infoLogger = new InfoProcessor(LogProcessor.INFO);
    const errorLogger = new ErrorProcessor(LogProcessor.ERROR);
    const fatalLogger = new FatalProcessor(LogProcessor.FATAL);

    debugLogger.setNextLogger(infoLogger);
    infoLogger.setNextLogger(errorLogger);
    errorLogger.setNextLogger(fatalLogger);

    return debugLogger;
  }
}

new Main();
