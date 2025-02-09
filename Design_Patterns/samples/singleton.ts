// Singleton Pattern Example

// Database Configuration Singleton
class DatabaseConfig {
    private static instance: DatabaseConfig;
    private host: string;
    private port: number;
    private username: string;
    private password: string;
    private connectionPool: Map<string, any>;

    private constructor() {
        // Private constructor to prevent direct construction calls
        this.host = process.env.DB_HOST || 'localhost';
        this.port = parseInt(process.env.DB_PORT || '5432');
        this.username = process.env.DB_USER || 'admin';
        this.password = process.env.DB_PASSWORD || '';
        this.connectionPool = new Map();
    }

    public static getInstance(): DatabaseConfig {
        if (!DatabaseConfig.instance) {
            DatabaseConfig.instance = new DatabaseConfig();
        }
        return DatabaseConfig.instance;
    }

    public getConnection(name: string = 'default'): any {
        if (!this.connectionPool.has(name)) {
            // Simulate creating a new database connection
            const connection = this.createConnection();
            this.connectionPool.set(name, connection);
        }
        return this.connectionPool.get(name);
    }

    private createConnection(): any {
        // Simulate database connection creation
        return {
            host: this.host,
            port: this.port,
            username: this.username,
            connected: true,
            query: (sql: string) => console.log(`Executing query: ${sql}`)
        };
    }

    public getConnectionString(): string {
        return `postgresql://${this.username}:****@${this.host}:${this.port}`;
    }
}

// Logger Singleton
class Logger {
    private static instance: Logger;
    private logs: string[];

    private constructor() {
        this.logs = [];
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}`;
        this.logs.push(logMessage);
        console.log(logMessage);
    }

    public getLogs(): string[] {
        return [...this.logs];
    }

    public clearLogs(): void {
        this.logs = [];
    }
}

// Usage Example
function demonstrateSingleton(): void {
    // Database Configuration Example
    const dbConfig1 = DatabaseConfig.getInstance();
    const dbConfig2 = DatabaseConfig.getInstance();

    console.log('Database Configurations are the same instance:', dbConfig1 === dbConfig2);
    console.log('Connection String:', dbConfig1.getConnectionString());

    // Get database connections
    const connection1 = dbConfig1.getConnection();
    const connection2 = dbConfig2.getConnection();
    console.log('Database Connections are the same:', connection1 === connection2);

    // Logger Example
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();

    console.log('Loggers are the same instance:', logger1 === logger2);

    logger1.log('Application started');
    logger2.log('User logged in');

    console.log('All logs:', logger1.getLogs());
}

// Run the demonstration
demonstrateSingleton(); 