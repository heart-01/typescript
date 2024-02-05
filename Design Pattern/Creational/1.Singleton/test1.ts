class Logger {
  private static instance: Logger | null = null;

  private constructor() {
    if (Logger.instance) {
      throw new Error("Cannot create more than one instance of Logger");
    }
    Logger.instance = this;
  }

  public log(message: string): void {
    console.log(message);
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}

// Usage:
const logger = Logger.getInstance();
logger.log("Hello, world!");
