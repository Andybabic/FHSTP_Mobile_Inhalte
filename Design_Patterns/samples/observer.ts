// Observer Pattern Example

// Interface for all observers
interface Observer {
    update(data: any): void;
}

// Abstract Subject class
abstract class Subject {
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
        console.log('Subject: Attached an observer.');
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify(data: any): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}

// Concrete Subject: WeatherStation
class WeatherStation extends Subject {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    public setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.notify({
            temperature: this.temperature,
            humidity: this.humidity,
            pressure: this.pressure
        });
    }
}

// Concrete Observer: Display Device
class DisplayDevice implements Observer {
    private name: string;
    private displayType: string;

    constructor(name: string, displayType: string) {
        this.name = name;
        this.displayType = displayType;
    }

    public update(data: any): void {
        console.log(`\n${this.name} (${this.displayType}) displaying:`);
        console.log(`Temperature: ${data.temperature}°C`);
        console.log(`Humidity: ${data.humidity}%`);
        console.log(`Pressure: ${data.pressure} hPa`);
    }
}

// Concrete Observer: WeatherAlert
class WeatherAlert implements Observer {
    private temperatureThreshold: number;

    constructor(temperatureThreshold: number) {
        this.temperatureThreshold = temperatureThreshold;
    }

    public update(data: any): void {
        if (data.temperature > this.temperatureThreshold) {
            console.log(`\nALERT: Temperature above threshold!`);
            console.log(`Current temperature: ${data.temperature}°C`);
            console.log(`Threshold: ${this.temperatureThreshold}°C`);
        }
    }
}

// Concrete Observer: DataLogger
class DataLogger implements Observer {
    private log: any[] = [];

    public update(data: any): void {
        const timestamp = new Date().toISOString();
        this.log.push({
            timestamp,
            ...data
        });
        console.log(`\nDataLogger: Logged weather data at ${timestamp}`);
    }

    public getLogs(): any[] {
        return [...this.log];
    }
}

// Usage Example
function demonstrateWeatherStation(): void {
    // Create the WeatherStation (Subject)
    const weatherStation = new WeatherStation();

    // Create various observers
    const phoneDisplay = new DisplayDevice('Phone', 'Mobile');
    const tabletDisplay = new DisplayDevice('Tablet', 'Tablet');
    const weatherAlert = new WeatherAlert(30); // Alert when temperature > 30°C
    const dataLogger = new DataLogger();

    // Attach observers to the weather station
    weatherStation.attach(phoneDisplay);
    weatherStation.attach(tabletDisplay);
    weatherStation.attach(weatherAlert);
    weatherStation.attach(dataLogger);

    // Simulate weather changes
    console.log('\n--- First Weather Update ---');
    weatherStation.setMeasurements(24, 65, 1013);

    console.log('\n--- Second Weather Update ---');
    weatherStation.setMeasurements(32, 70, 1014);

    // Detach an observer
    console.log('\n--- Detaching Tablet Display ---');
    weatherStation.detach(tabletDisplay);

    console.log('\n--- Third Weather Update ---');
    weatherStation.setMeasurements(28, 75, 1015);

    // Get logged data
    console.log('\n--- Weather History ---');
    console.log(dataLogger.getLogs());
}

// Run the demonstration
demonstrateWeatherStation(); 