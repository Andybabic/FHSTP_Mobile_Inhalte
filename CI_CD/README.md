# Continuous Integration, Continuous Delivery & DevOps

## Übersicht
Eine umfassende Darstellung moderner CI/CD-Praktiken und DevOps-Werkzeuge für effiziente Softwareentwicklung und -bereitstellung.

> **Hinweis**: DevOps und Kubernetes wurden im Rahmen der Masterklasse nicht vollumfänglich behandelt. Diese Dokumentation dient als ergänzende Übersicht und Orientierung für weiterführende Studien.

## 1. Versionskontrolle mit Git
### Grundkonzepte
- **Repository-Struktur**
  - Working Directory
  - Staging Area
  - Local/Remote Repository
  - .gitignore

- **Branching-Strategien**
  - Git Flow
  - Trunk-Based Development
  - Feature Branch Workflow
  - Release Branching

### Best Practices
```bash
# Branch erstellen und wechseln
git checkout -b feature/new-feature

# Änderungen committen
git add .
git commit -m "feat: implement new feature"

# Rebase für saubere Historie
git pull --rebase origin main

# Merge Request vorbereiten
git push origin feature/new-feature
```

## 2. Containerisierung mit Docker
### Grundlagen
- **Container vs. VMs**
  - Ressourceneffizienz
  - Isolierung
  - Portabilität
  - Performance

- **Docker-Komponenten**
  - Dockerfile
  - Images
  - Container
  - Registry
  - Docker Compose

### Beispiel Dockerfile
```dockerfile
# Multi-stage build
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose Beispiel
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

## 3. Kubernetes Orchestrierung
### Architektur
- **Cluster-Komponenten**
  - Control Plane
  - Nodes
  - Pods
  - Services
  - Ingress

- **Workload-Ressourcen**
  - Deployments
  - StatefulSets
  - DaemonSets
  - Jobs/CronJobs

### Kubernetes Manifest Beispiel
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: "1"
            memory: "512Mi"
          requests:
            cpu: "0.5"
            memory: "256Mi"
```

## 4. Automatisiertes Testen
### Testarten
- **Unit Tests**
  - Jest
  - JUnit
  - PyTest
  - Mocha

- **Integrationstests**
  - API Tests
  - Datenbank Tests
  - Service Tests

- **End-to-End Tests**
  - Cypress
  - Selenium
  - Playwright
  - TestCafe

### Test-Beispiel (Jest)
```javascript
describe('User Authentication', () => {
  test('should login with valid credentials', async () => {
    const response = await auth.login({
      username: 'test@example.com',
      password: 'password123'
    });
    expect(response.status).toBe(200);
    expect(response.data.token).toBeDefined();
  });
});
```

## 5. CI/CD Pipeline
### Pipeline-Komponenten
- **Build**
  - Code Checkout
  - Dependency Installation
  - Compilation
  - Asset Building

- **Test**
  - Unit Tests
  - Integration Tests
  - Code Coverage
  - Security Scans

- **Deploy**
  - Staging Environment
  - Production Environment
  - Rollback Strategien
  - Monitoring

### GitHub Actions Beispiel
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
```

## 6. Virtuelle Maschinen
### Management
- **Hypervisor-Typen**
  - Typ 1 (Bare Metal)
  - Typ 2 (Hosted)

- **VM-Lifecycle**
  - Provisionierung
  - Konfiguration
  - Monitoring
  - Backup/Recovery

### Infrastructure as Code
```hcl
# Terraform Beispiel
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
    Environment = "Production"
  }
}
```

## Best Practices
### DevOps-Kultur
- Kommunikation zwischen Teams
- Automatisierung wo möglich
- Continuous Improvement
- Feedback Loops
- Monitoring und Observability

### Security
- Secure Supply Chain
- Container Scanning
- Secret Management
- RBAC (Role-Based Access Control)
- Network Policies

### Performance
- Resource Limits
- Auto-Scaling
- Load Balancing
- Caching Strategien
- Performance Monitoring

## Tools und Frameworks
### CI/CD Plattformen
- Jenkins
- GitLab CI
- GitHub Actions
- CircleCI
- Azure DevOps

### Monitoring
- Prometheus
- Grafana
- ELK Stack
- Datadog
- New Relic

### Configuration Management
- Ansible
- Puppet
- Chef
- Terraform
- CloudFormation

## Ressourcen
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- The DevOps Handbook
- Continuous Delivery (von Jez Humble)
- Kubernetes: Up and Running
- Docker Deep Dive (von Nigel Poulton) 