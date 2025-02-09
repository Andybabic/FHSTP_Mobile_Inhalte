// Chain of Responsibility Pattern Example

// Request type containing user and permission details
interface SecurityRequest {
    userId: string;
    resource: string;
    action: 'read' | 'write' | 'delete';
    role: string;
    ipAddress: string;
}

// Abstract Handler
abstract class SecurityHandler {
    private nextHandler: SecurityHandler | null = null;

    public setNext(handler: SecurityHandler): SecurityHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: SecurityRequest): boolean {
        if (this.checkSecurity(request)) {
            return this.nextHandler ? this.nextHandler.handle(request) : true;
        }
        return false;
    }

    protected abstract checkSecurity(request: SecurityRequest): boolean;
}

// IP Whitelist Handler
class IpWhitelistHandler extends SecurityHandler {
    private whitelistedIps: string[];

    constructor(whitelistedIps: string[]) {
        super();
        this.whitelistedIps = whitelistedIps;
    }

    protected checkSecurity(request: SecurityRequest): boolean {
        const isWhitelisted = this.whitelistedIps.includes(request.ipAddress);
        console.log(`IP Check: ${isWhitelisted ? 'Allowed' : 'Blocked'} - ${request.ipAddress}`);
        return isWhitelisted;
    }
}

// Authentication Handler
class AuthenticationHandler extends SecurityHandler {
    private validUsers: Set<string>;

    constructor(validUsers: string[]) {
        super();
        this.validUsers = new Set(validUsers);
    }

    protected checkSecurity(request: SecurityRequest): boolean {
        const isAuthenticated = this.validUsers.has(request.userId);
        console.log(`Authentication: ${isAuthenticated ? 'Success' : 'Failed'} - User ${request.userId}`);
        return isAuthenticated;
    }
}

// Role-Based Authorization Handler
class RoleAuthorizationHandler extends SecurityHandler {
    private rolePermissions: Map<string, Set<string>>;

    constructor() {
        super();
        this.rolePermissions = new Map([
            ['admin', new Set(['read', 'write', 'delete'])],
            ['editor', new Set(['read', 'write'])],
            ['viewer', new Set(['read'])]
        ]);
    }

    protected checkSecurity(request: SecurityRequest): boolean {
        const allowedActions = this.rolePermissions.get(request.role);
        const isAuthorized = allowedActions?.has(request.action) ?? false;
        console.log(`Role Authorization: ${isAuthorized ? 'Granted' : 'Denied'} - ${request.role} for ${request.action}`);
        return isAuthorized;
    }
}

// Resource Access Handler
class ResourceAccessHandler extends SecurityHandler {
    private resourcePermissions: Map<string, Set<string>>;

    constructor() {
        super();
        this.resourcePermissions = new Map([
            ['document', new Set(['admin', 'editor', 'viewer'])],
            ['system', new Set(['admin'])],
            ['user-data', new Set(['admin', 'editor'])]
        ]);
    }

    protected checkSecurity(request: SecurityRequest): boolean {
        const allowedRoles = this.resourcePermissions.get(request.resource);
        const hasAccess = allowedRoles?.has(request.role) ?? false;
        console.log(`Resource Access: ${hasAccess ? 'Granted' : 'Denied'} - ${request.resource} for role ${request.role}`);
        return hasAccess;
    }
}

// Logging Handler
class LoggingHandler extends SecurityHandler {
    protected checkSecurity(request: SecurityRequest): boolean {
        const timestamp = new Date().toISOString();
        console.log(`
Security Log Entry:
Timestamp: ${timestamp}
User ID: ${request.userId}
IP Address: ${request.ipAddress}
Action: ${request.action}
Resource: ${request.resource}
Role: ${request.role}
        `);
        return true; // Always allows the request to continue
    }
}

// Security System Class
class SecuritySystem {
    private handler: SecurityHandler;

    constructor() {
        // Create handlers
        const ipWhitelist = new IpWhitelistHandler(['192.168.1.1', '192.168.1.2', '127.0.0.1']);
        const authentication = new AuthenticationHandler(['user1', 'user2', 'admin']);
        const roleAuthorization = new RoleAuthorizationHandler();
        const resourceAccess = new ResourceAccessHandler();
        const logging = new LoggingHandler();

        // Chain handlers
        this.handler = ipWhitelist;
        ipWhitelist.setNext(authentication)
            .setNext(roleAuthorization)
            .setNext(resourceAccess)
            .setNext(logging);
    }

    public checkAccess(request: SecurityRequest): boolean {
        console.log('\nProcessing Security Request...');
        const isAllowed = this.handler.handle(request);
        console.log(`Final Decision: ${isAllowed ? 'Access Granted' : 'Access Denied'}\n`);
        return isAllowed;
    }
}

// Usage Example
function demonstrateSecurityChain(): void {
    const securitySystem = new SecuritySystem();

    // Test Case 1: Valid Admin Access
    const adminRequest: SecurityRequest = {
        userId: 'admin',
        resource: 'system',
        action: 'write',
        role: 'admin',
        ipAddress: '192.168.1.1'
    };

    // Test Case 2: Invalid IP Address
    const invalidIpRequest: SecurityRequest = {
        userId: 'user1',
        resource: 'document',
        action: 'read',
        role: 'viewer',
        ipAddress: '192.168.1.100'
    };

    // Test Case 3: Insufficient Permissions
    const insufficientPermissionsRequest: SecurityRequest = {
        userId: 'user2',
        resource: 'system',
        action: 'delete',
        role: 'editor',
        ipAddress: '192.168.1.2'
    };

    console.log('=== Security System Demo ===');
    
    console.log('\nTest Case 1: Valid Admin Access');
    securitySystem.checkAccess(adminRequest);

    console.log('Test Case 2: Invalid IP Address');
    securitySystem.checkAccess(invalidIpRequest);

    console.log('Test Case 3: Insufficient Permissions');
    securitySystem.checkAccess(insufficientPermissionsRequest);
}

// Run the demonstration
demonstrateSecurityChain(); 