class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;

  private constructor() {
    if (DatabaseConnection.instance) {
      throw new Error("Cannot create more than one instance of DatabaseConnection");
    }
    // Code for database connection
    DatabaseConnection.instance = this;
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  // Other code related to database connection
}

// Usage
const dbConnection = DatabaseConnection.getInstance();
// dbConnection is an instance of the DatabaseConnection class used for database connections in the system
