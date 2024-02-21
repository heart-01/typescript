abstract class Logger {
  protected level: number;
  // Next element in the chain of responsibility
  protected nextLogger: Logger;

  constructor(level: number) {
    this.level = level;
  }

  setNextLogger(nextLogger: Logger): void {
    this.nextLogger = nextLogger;
  }

  logMessage(level: number, message: string): void {
    if (this.level <= level) {
      this.write(message);
    }
    if (this.nextLogger != null) {
      this.nextLogger.logMessage(level, message);
    }
  }

  protected abstract write(message: string): void;
}

class ConsoleLogger extends Logger {
  constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("Standard Console::Logger: " + message);
  }
}

class ErrorLogger extends Logger {
  constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.error("Error Console::Logger: " + message);
  }
}

class FileLogger extends Logger {
  constructor(level: number) {
    super(level);
  }

  protected write(message: string): void {
    console.log("File::Logger: " + message);
  }
}

// Setting up the chain
let loggerChain: Logger = new ConsoleLogger(1);
const errorLogger = new ErrorLogger(2);
const fileLogger = new FileLogger(3);

loggerChain.setNextLogger(errorLogger);
errorLogger.setNextLogger(fileLogger);

// Making requests
loggerChain.logMessage(1, "This is an information.");
loggerChain.logMessage(2, "This is an error message.");
loggerChain.logMessage(3, "This is a debug level message.");
