// Prototype Pattern Example

// Prototype Interface
interface Prototype<T> {
    clone(): T;
}

// Complex Document Class
class CustomDocument implements Prototype<CustomDocument> {
    private title: string;
    private content: string;
    private metadata: DocumentMetadata;
    private permissions: DocumentPermissions;

    constructor(
        title: string,
        content: string,
        metadata: DocumentMetadata,
        permissions: DocumentPermissions
    ) {
        this.title = title;
        this.content = content;
        this.metadata = metadata;
        this.permissions = permissions;
    }

    public clone(): CustomDocument {
        // Create a deep copy of the document
        const clonedMetadata = this.metadata.clone();
        const clonedPermissions = this.permissions.clone();

        return new CustomDocument(
            this.title,
            this.content,
            clonedMetadata,
            clonedPermissions
        );
    }

    // Getters and setters
    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getMetadata(): DocumentMetadata {
        return this.metadata;
    }

    public getPermissions(): DocumentPermissions {
        return this.permissions;
    }
}

// Document Metadata Class
class DocumentMetadata implements Prototype<DocumentMetadata> {
    private author: string;
    private createdDate: Date;
    private lastModified: Date;
    private tags: string[];

    constructor(
        author: string,
        createdDate: Date,
        lastModified: Date,
        tags: string[]
    ) {
        this.author = author;
        this.createdDate = createdDate;
        this.lastModified = lastModified;
        this.tags = [...tags];
    }

    public clone(): DocumentMetadata {
        return new DocumentMetadata(
            this.author,
            new Date(this.createdDate),
            new Date(this.lastModified),
            [...this.tags]
        );
    }

    public updateLastModified(): void {
        this.lastModified = new Date();
    }

    public addTag(tag: string): void {
        this.tags.push(tag);
        this.updateLastModified();
    }
}

// Document Permissions Class
class DocumentPermissions implements Prototype<DocumentPermissions> {
    private readAccess: string[];
    private writeAccess: string[];
    private adminAccess: string[];

    constructor(
        readAccess: string[],
        writeAccess: string[],
        adminAccess: string[]
    ) {
        this.readAccess = [...readAccess];
        this.writeAccess = [...writeAccess];
        this.adminAccess = [...adminAccess];
    }

    public clone(): DocumentPermissions {
        return new DocumentPermissions(
            [...this.readAccess],
            [...this.writeAccess],
            [...this.adminAccess]
        );
    }

    public grantReadAccess(user: string): void {
        if (!this.readAccess.includes(user)) {
            this.readAccess.push(user);
        }
    }

    public grantWriteAccess(user: string): void {
        if (!this.writeAccess.includes(user)) {
            this.writeAccess.push(user);
        }
    }
}

// Document Template Registry
class DocumentTemplateRegistry {
    private templates: Map<string, CustomDocument> = new Map();

    public registerTemplate(name: string, template: CustomDocument): void {
        this.templates.set(name, template);
    }

    public createFromTemplate(name: string): CustomDocument | null {
        const template = this.templates.get(name);
        if (template) {
            return template.clone();
        }
        return null;
    }
}

// Usage Example
function demonstratePrototype(): void {
    // Create a template registry
    const templateRegistry = new DocumentTemplateRegistry();

    // Create a template document
    const templateMetadata = new DocumentMetadata(
        'System',
        new Date(),
        new Date(),
        ['template', 'document']
    );

    const templatePermissions = new DocumentPermissions(
        ['public'],
        ['admin'],
        ['admin']
    );

    const templateDocument = new CustomDocument(
        'Template Document',
        'This is a template document',
        templateMetadata,
        templatePermissions
    );

    // Register the template
    templateRegistry.registerTemplate('standard', templateDocument);

    // Create new documents from the template
    const document1 = templateRegistry.createFromTemplate('standard');
    const document2 = templateRegistry.createFromTemplate('standard');

    if (document1 && document2) {
        // Modify the first document
        document1.setTitle('First Document');
        document1.setContent('This is the first document');
        document1.getMetadata().addTag('first');
        document1.getPermissions().grantReadAccess('user1');

        // Modify the second document
        document2.setTitle('Second Document');
        document2.setContent('This is the second document');
        document2.getMetadata().addTag('second');
        document2.getPermissions().grantWriteAccess('user2');

        // Show that the documents are independent
        console.log('Document 1:');
        console.log('Title:', document1.getTitle());
        console.log('Content:', document1.getContent());
        console.log('Tags:', document1.getMetadata().clone());
        console.log('Permissions:', document1.getPermissions().clone());

        console.log('\nDocument 2:');
        console.log('Title:', document2.getTitle());
        console.log('Content:', document2.getContent());
        console.log('Tags:', document2.getMetadata().clone());
        console.log('Permissions:', document2.getPermissions().clone());
    }
}

// Run the demonstration
demonstratePrototype(); 