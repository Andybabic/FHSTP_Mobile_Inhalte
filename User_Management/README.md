# Benutzerverwaltung und Authentifizierung

## Übersicht
Diese Dokumentation erklärt, wie Sie Benutzer sicher verwalten und deren Zugriff auf Ihre Anwendung kontrollieren können. Denken Sie an die Benutzerverwaltung wie an einen Concierge in einem Gebäude - sie kontrolliert, wer hinein darf und was jeder Benutzer tun kann.

> **Wichtiger Hinweis zur Abdeckung der Themen**: 
> Im Rahmen der Masterklasse wurden schwerpunktmäßig folgende Kernthemen behandelt:
> - Token-basierte Authentifizierung (JWT)
> - Cookie-basierte Authentifizierung
> - Session Management
> - Multi-Faktor-Authentifizierung
>
> Die weiteren Themen werden zur Vollständigkeit erwähnt, wurden aber nicht im Detail behandelt.

## 1. Token-basierte Authentifizierung
### JWT (JSON Web Tokens) [↗](https://jwt.io/)
#### Was ist das?
Wie ein digitaler Ausweis: Ein kompakter, sicherer Weg, um Benutzerinformationen zwischen verschiedenen Systemen zu übertragen.

#### Aufbau eines JWT
- **Header**
  - Wie der Briefkopf eines Dokuments
  - Enthält Typ des Tokens
  - Gibt verwendeten Algorithmus an

- **Payload**
  - Wie der Inhalt des Ausweises
  - Enthält Benutzerinformationen
  - Speichert Gültigkeitsdauer
  - Weitere wichtige Daten

- **Signatur**
  - Wie ein Sicherheitsstempel
  - Prüft Echtheit des Tokens
  - Verhindert Manipulation

#### Vorteile
- **Zustandslos**
  - Kein Server-Speicher nötig
  - Gut für verteilte Systeme
  - Einfach zu skalieren

- **Flexibel**
  - Funktioniert überall
  - Leicht zu übertragen
  - Viele Implementierungen

#### Nachteile
- **Nicht widerrufbar**
  - Token läuft erst ab
  - Blacklisting nötig
  - Größerer Token-Overhead

### OAuth 2.0 [↗](https://oauth.net/2/)
#### Was ist das?
Wie ein Türsteher für Apps: Erlaubt anderen Anwendungen sicheren Zugriff auf Benutzerdaten, ohne das Passwort zu kennen.

#### Ablauf
- **Autorisierung**
  - Benutzer erlaubt Zugriff
  - App erhält Code
  - Code wird gegen Token getauscht

- **Zugriff**
  - Token für API-Zugriff
  - Begrenzte Berechtigungen
  - Zeitlich limitiert

## 2. Cookie-basierte Authentifizierung
#### Was ist das?
Wie ein Eintrittsstempel für eine Veranstaltung: Der Browser speichert ein Kennzeichen, das den Benutzer identifiziert.

#### Arten von Cookies
- **Session Cookies**
  - Temporär im Browser
  - Verschwinden beim Schließen
  - Für aktive Sitzungen

- **Persistente Cookies**
  - Bleiben länger gespeichert
  - "Angemeldet bleiben" Funktion
  - Mit Ablaufdatum

#### Sicherheitsmerkmale
- **HttpOnly**
  - Wie ein versiegelter Brief
  - Kein JavaScript-Zugriff
  - Schutz vor XSS

- **Secure**
  - Nur über HTTPS
  - Verschlüsselte Übertragung
  - Abhörsicher

- **SameSite**
  - Wie eine Zugangskontrolle
  - Schutz vor CSRF
  - Domain-Beschränkung

## 3. Session Management
#### Was ist das?
Wie die Verwaltung von Hotelzimmerschlüsseln: Kontrolliert und verwaltet aktive Benutzersitzungen.

#### Strategien
- **Server-seitige Sessions**
  - Wie ein Gästebuch
  - Sitzungsdaten auf Server
  - Hohe Sicherheit
  - Mehr Kontrolle

- **Client-seitige Sessions**
  - Wie ein Besucherausweis
  - Daten beim Benutzer
  - Weniger Serverlast
  - Einfacher zu skalieren

#### Speicheroptionen
- **Memory Store**
  - Schnell aber flüchtig
  - Gut für Entwicklung
  - Nicht für Produktion

- **Redis**
  - Wie ein digitaler Tresor
  - Sehr schnell
  - Perfekt für Sessions
  - Skalierbar

- **Datenbank**
  - Permanent gespeichert
  - Gut durchsuchbar
  - Backup-fähig

## 4. Multi-Faktor-Authentifizierung (MFA)
#### Was ist das?
Wie mehrere Schlösser an einer Tür: Mehrere unabhängige Methoden zur Identitätsprüfung.

#### Faktoren
- **Etwas, das man weiß**
  - Passwort oder PIN
  - Sicherheitsfragen
  - Geheime Antworten

- **Etwas, das man hat**
  - Smartphone (2FA-App)
  - Hardware-Token
  - Sicherheitsschlüssel

- **Etwas, das man ist**
  - Fingerabdruck
  - Gesichtserkennung
  - Iris-Scan

#### Implementierungen
- **TOTP**
  - Zeitbasierte Einmalcodes
  - Wie Google Authenticator
  - Standardisiert

- **FIDO2/WebAuthn**
  - Moderne biometrische Auth
  - Sehr sicher
  - Benutzerfreundlich

## Praktische Tipps
- Sichere Passwort-Regeln definieren
- Regelmäßige Session-Timeouts
- Verdächtige Aktivitäten überwachen
- Benutzerfreundliche Fehlermeldungen
- Selbstbedienungsfunktionen anbieten
- Datenschutz beachten
- Logging für Sicherheitsereignisse

## Wie wähle ich die richtige Strategie?
Überlegen Sie sich:

### 1. Anwendungstyp
- **Welche Art von App?**
  → Bestimmt Auth-Methode
- **Wie viele Benutzer?**
  → Beeinflusst Skalierung
- **Mobile oder Web?**
  → Bestimmt Token-Strategie

### 2. Sicherheitsanforderungen
- **Wie sensibel sind die Daten?**
  → MFA notwendig?
- **Welche Compliance-Vorgaben?**
  → Bestimmt Protokolle
- **Wie kritisch ist Ausfallsicherheit?**
  → Beeinflusst Architektur

### 3. Benutzerfreundlichkeit
- **Wie technisch versiert sind die Nutzer?**
  → Bestimmt Komplexität
- **Wie oft wird eingeloggt?**
  → Session-Dauer
- **Mobile Nutzung wichtig?**
  → Token-basiert vs. Cookies

## Implementierungs-Checkliste
- [ ] Sichere Passwort-Speicherung
- [ ] Session-Timeout konfiguriert
- [ ] HTTPS überall aktiviert
- [ ] CSRF-Schutz implementiert
- [ ] XSS-Schutz aktiviert
- [ ] Logging eingerichtet
- [ ] Rate-Limiting implementiert
- [ ] Passwort-Reset sicher
- [ ] 2FA/MFA Option
- [ ] Datenschutz beachtet

## Ressourcen zum Lernen
- [OAuth 2.0 Dokumentation](https://oauth.net/2/)
- [JWT.io](https://jwt.io/)
- [OWASP Session Management](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/)
- Auth0 Blog und Dokumentation
- Online-Kurse (Udemy, Coursera)
- Security-Konferenzen
- Entwickler-Communities

## Fazit
Benutzerverwaltung ist ein kritischer Teil jeder Anwendung. Es geht darum, die richtige Balance zwischen Sicherheit und Benutzerfreundlichkeit zu finden. Die hier behandelten Kernthemen bieten einen soliden Ausgangspunkt für die Implementierung einer sicheren und benutzerfreundlichen Authentifizierung. 