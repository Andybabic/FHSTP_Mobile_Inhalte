// MVP (Model-View-Presenter) Pattern Example

// Model: Represents the data and business logic
class UserModel {
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getEmail(): string {
        return this.email;
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
    }
}

// View: Interface for displaying data
interface UserView {
    displayUserDetails(fullName: string, email: string): void;
    displayError(message: string): void;
    getUserInput(): { email: string };
}

// Concrete View Implementation
class WebUserView implements UserView {
    private container: HTMLElement;

    constructor(containerId: string) {
        this.container = document.getElementById(containerId) || document.createElement('div');
    }

    displayUserDetails(fullName: string, email: string): void {
        this.container.innerHTML = `
            <div class="user-details">
                <h2>${fullName}</h2>
                <p>Email: ${email}</p>
            </div>
        `;
    }

    displayError(message: string): void {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        this.container.appendChild(errorDiv);
    }

    getUserInput(): { email: string } {
        // In a real application, this would get input from a form
        const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
        return {
            email: emailInput ? emailInput.value : ''
        };
    }
}

// Presenter: Handles the logic between Model and View
class UserPresenter {
    private model: UserModel;
    private view: UserView;

    constructor(model: UserModel, view: UserView) {
        this.model = model;
        this.view = view;
    }

    presentUserDetails(): void {
        const fullName = this.model.getFullName();
        const email = this.model.getEmail();
        this.view.displayUserDetails(fullName, email);
    }

    updateUserEmail(): void {
        try {
            const input = this.view.getUserInput();
            if (this.validateEmail(input.email)) {
                this.model.updateEmail(input.email);
                this.presentUserDetails();
            } else {
                this.view.displayError('Invalid email format');
            }
        } catch (error) {
            this.view.displayError('An error occurred while updating email');
        }
    }

    private validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Usage Example
function initializeUserMVP(): void {
    // Create Model with initial data
    const userModel = new UserModel('John', 'Doe', 'john.doe@example.com');

    // Create View
    const userView = new WebUserView('user-container');

    // Create Presenter
    const userPresenter = new UserPresenter(userModel, userView);

    // Display initial user details
    userPresenter.presentUserDetails();

    // Example of handling user interaction
    document.getElementById('update-email-btn')?.addEventListener('click', () => {
        userPresenter.updateUserEmail();
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeUserMVP); 