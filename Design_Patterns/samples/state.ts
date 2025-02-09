// State Pattern Example

// State Interface
interface VendingMachineState {
    insertCoin(machine: VendingMachine, amount: number): void;
    selectProduct(machine: VendingMachine, productId: string): void;
    dispense(machine: VendingMachine): void;
    refund(machine: VendingMachine): void;
}

// Concrete States
class NoCoinState implements VendingMachineState {
    public insertCoin(machine: VendingMachine, amount: number): void {
        machine.addBalance(amount);
        console.log(`Coin inserted: $${amount}`);
        machine.setState(new HasCoinState());
    }

    public selectProduct(machine: VendingMachine, productId: string): void {
        console.log('Please insert coin first');
    }

    public dispense(machine: VendingMachine): void {
        console.log('Please insert coin first');
    }

    public refund(machine: VendingMachine): void {
        console.log('No coins to refund');
    }
}

class HasCoinState implements VendingMachineState {
    public insertCoin(machine: VendingMachine, amount: number): void {
        machine.addBalance(amount);
        console.log(`Additional coin inserted: $${amount}`);
    }

    public selectProduct(machine: VendingMachine, productId: string): void {
        const product = machine.getProduct(productId);
        if (!product) {
            console.log('Product not found');
            return;
        }

        if (machine.getBalance() >= product.price) {
            console.log(`Selected ${product.name} - $${product.price}`);
            machine.setState(new DispensingState(product));
        } else {
            console.log(`Insufficient funds. Need $${product.price - machine.getBalance()} more`);
        }
    }

    public dispense(machine: VendingMachine): void {
        console.log('Please select a product first');
    }

    public refund(machine: VendingMachine): void {
        const refundAmount = machine.getBalance();
        machine.resetBalance();
        machine.setState(new NoCoinState());
        console.log(`Refunded: $${refundAmount}`);
    }
}

class DispensingState implements VendingMachineState {
    private product: Product;

    constructor(product: Product) {
        this.product = product;
    }

    public insertCoin(machine: VendingMachine, amount: number): void {
        console.log('Please wait, dispensing product');
    }

    public selectProduct(machine: VendingMachine, productId: string): void {
        console.log('Please wait, dispensing product');
    }

    public dispense(machine: VendingMachine): void {
        const remainingBalance = machine.getBalance() - this.product.price;
        machine.resetBalance();
        
        console.log(`Dispensing ${this.product.name}`);
        
        if (remainingBalance > 0) {
            console.log(`Returning change: $${remainingBalance}`);
        }
        
        machine.setState(new NoCoinState());
    }

    public refund(machine: VendingMachine): void {
        console.log('Cannot refund during dispensing');
    }
}

// Product Interface
interface Product {
    id: string;
    name: string;
    price: number;
}

// Context
class VendingMachine {
    private state: VendingMachineState;
    private balance: number = 0;
    private products: Map<string, Product>;

    constructor() {
        this.state = new NoCoinState();
        this.products = new Map();
        this.initializeProducts();
    }

    private initializeProducts(): void {
        this.products.set('A1', { id: 'A1', name: 'Cola', price: 1.50 });
        this.products.set('A2', { id: 'A2', name: 'Chips', price: 1.00 });
        this.products.set('A3', { id: 'A3', name: 'Candy', price: 0.75 });
    }

    public setState(state: VendingMachineState): void {
        this.state = state;
    }

    public insertCoin(amount: number): void {
        this.state.insertCoin(this, amount);
    }

    public selectProduct(productId: string): void {
        this.state.selectProduct(this, productId);
    }

    public dispense(): void {
        this.state.dispense(this);
    }

    public refund(): void {
        this.state.refund(this);
    }

    public addBalance(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }

    public resetBalance(): void {
        this.balance = 0;
    }

    public getProduct(productId: string): Product | undefined {
        return this.products.get(productId);
    }

    public displayProducts(): void {
        console.log('\nAvailable Products:');
        this.products.forEach(product => {
            console.log(`${product.id}: ${product.name} - $${product.price}`);
        });
    }
}

// Usage Example
function demonstrateVendingMachine(): void {
    const vendingMachine = new VendingMachine();
    
    console.log('=== Vending Machine Demo ===');
    vendingMachine.displayProducts();

    console.log('\n1. Trying to select product without coin');
    vendingMachine.selectProduct('A1');

    console.log('\n2. Inserting $1.00');
    vendingMachine.insertCoin(1.00);

    console.log('\n3. Trying to buy Cola ($1.50)');
    vendingMachine.selectProduct('A1');

    console.log('\n4. Inserting additional $1.00');
    vendingMachine.insertCoin(1.00);

    console.log('\n5. Selecting Cola again');
    vendingMachine.selectProduct('A1');
    vendingMachine.dispense();

    console.log('\n6. Inserting $2.00');
    vendingMachine.insertCoin(2.00);

    console.log('\n7. Requesting refund');
    vendingMachine.refund();
}

// Run the demonstration
demonstrateVendingMachine(); 