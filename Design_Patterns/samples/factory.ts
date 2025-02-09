// Factory Pattern Example

// Product Interface
interface Vehicle {
    start(): void;
    stop(): void;
    getInfo(): string;
}

// Concrete Products
class Car implements Vehicle {
    private make: string;
    private model: string;
    private year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public start(): void {
        console.log('Car engine started');
    }

    public stop(): void {
        console.log('Car engine stopped');
    }

    public getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Motorcycle implements Vehicle {
    private make: string;
    private model: string;
    private engineSize: number;

    constructor(make: string, model: string, engineSize: number) {
        this.make = make;
        this.model = model;
        this.engineSize = engineSize;
    }

    public start(): void {
        console.log('Motorcycle engine started');
    }

    public stop(): void {
        console.log('Motorcycle engine stopped');
    }

    public getInfo(): string {
        return `${this.make} ${this.model} (${this.engineSize}cc)`;
    }
}

class Bicycle implements Vehicle {
    private brand: string;
    private type: string;
    private gears: number;

    constructor(brand: string, type: string, gears: number) {
        this.brand = brand;
        this.type = type;
        this.gears = gears;
    }

    public start(): void {
        console.log('Started pedaling the bicycle');
    }

    public stop(): void {
        console.log('Stopped the bicycle');
    }

    public getInfo(): string {
        return `${this.brand} ${this.type} (${this.gears} gears)`;
    }
}

// Factory Interface
interface VehicleFactory {
    createVehicle(): Vehicle;
    getDescription(): string;
}

// Concrete Factories
class LuxuryCarFactory implements VehicleFactory {
    public createVehicle(): Vehicle {
        return new Car('Mercedes', 'S-Class', 2024);
    }

    public getDescription(): string {
        return 'Luxury Car Factory - Produces high-end automobiles';
    }
}

class SportMotorcycleFactory implements VehicleFactory {
    public createVehicle(): Vehicle {
        return new Motorcycle('Ducati', 'Panigale V4', 1103);
    }

    public getDescription(): string {
        return 'Sport Motorcycle Factory - Produces high-performance motorcycles';
    }
}

class MountainBikeFactory implements VehicleFactory {
    public createVehicle(): Vehicle {
        return new Bicycle('Trek', 'Mountain Bike', 21);
    }

    public getDescription(): string {
        return 'Mountain Bike Factory - Produces off-road bicycles';
    }
}

// Vehicle Dealer
class VehicleDealer {
    private factories: Map<string, VehicleFactory>;

    constructor() {
        this.factories = new Map();
    }

    public registerFactory(type: string, factory: VehicleFactory): void {
        this.factories.set(type, factory);
    }

    public orderVehicle(type: string): Vehicle | null {
        const factory = this.factories.get(type);
        if (!factory) {
            console.log(`No factory registered for vehicle type: ${type}`);
            return null;
        }

        console.log(`\nOrdering from ${factory.getDescription()}`);
        const vehicle = factory.createVehicle();
        console.log(`Created: ${vehicle.getInfo()}`);

        // Perform basic testing
        console.log('Performing basic testing:');
        vehicle.start();
        vehicle.stop();

        return vehicle;
    }

    public listAvailableVehicles(): void {
        console.log('\nAvailable Vehicle Types:');
        this.factories.forEach((factory, type) => {
            console.log(`- ${type}: ${factory.getDescription()}`);
        });
    }
}

// Usage Example
function demonstrateVehicleFactory(): void {
    // Create dealer
    const dealer = new VehicleDealer();

    // Register factories
    dealer.registerFactory('luxury-car', new LuxuryCarFactory());
    dealer.registerFactory('sport-motorcycle', new SportMotorcycleFactory());
    dealer.registerFactory('mountain-bike', new MountainBikeFactory());

    console.log('=== Vehicle Factory Demo ===');
    
    // List available vehicles
    dealer.listAvailableVehicles();

    // Order different types of vehicles
    console.log('\nOrdering vehicles:');
    dealer.orderVehicle('luxury-car');
    dealer.orderVehicle('sport-motorcycle');
    dealer.orderVehicle('mountain-bike');

    // Try to order an unavailable vehicle type
    console.log('\nTrying to order an unavailable vehicle:');
    dealer.orderVehicle('electric-car');
}

// Run the demonstration
demonstrateVehicleFactory(); 