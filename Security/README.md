# Sicherheit in der Softwareentwicklung

## Übersicht
Diese Dokumentation erklärt die wichtigsten Sicherheitsrisiken und Schutzmaßnahmen in der Softwareentwicklung. Sicherheit ist wie ein Schloss an Ihrer Haustür - es schützt vor unerwünschten Eindringlingen und hält Ihre Werte sicher.

> **Wichtiger Hinweis zur Abdeckung der Themen**: 
> Im Rahmen der Masterklasse wurden schwerpunktmäßig folgende Kernthemen behandelt:
> - Cross-Site Scripting (XSS)
> - SQL Injection
> - Brute Force Angriffe
> - Verschlüsselung und Hashing
>
> Die weiteren Sicherheitsthemen werden zur Vollständigkeit erwähnt, wurden aber nicht im Detail behandelt.

## 1. Kernthemen der Masterklasse

### Cross-Site Scripting (XSS) [↗](https://owasp.org/www-community/attacks/xss/)
#### Was ist das?
Wie ein gefälschter Brief in Ihrem Briefkasten: Angreifer schmuggeln schädlichen Code in Ihre Webseite, der dann bei anderen Benutzern ausgeführt wird.

#### Arten von XSS
- **Reflected XSS**
  - Wie ein Echo: Code kommt direkt zurück
  - Über URL oder Formulare eingeschleust
  - Betrifft einzelne Benutzer

- **Stored XSS**
  - Wie ein vergifteter Brunnen: Code wird gespeichert
  - In der Datenbank gespeichert
  - Betrifft alle Benutzer
  - Besonders gefährlich

- **DOM-based XSS**
  - Wie ein Trojaner im Browser
  - Manipuliert die Seite direkt
  - Schwer zu entdecken

#### Wie schützt man sich?
- **Eingaben prüfen**
  - Nur erlaubte Zeichen akzeptieren
  - Länge begrenzen
  - Format validieren

- **Ausgaben schützen**
  - HTML-Zeichen maskieren
  - JavaScript-Code filtern
  - URLs prüfen

- **Framework-Schutz nutzen**
  - Eingebaute Schutzfunktionen verwenden
  - Template-Systeme nutzen
  - Security-Header setzen

### SQL Injection [↗](https://owasp.org/www-community/attacks/SQL_Injection)
#### Was ist das?
Wie ein gefälschter Hausschlüssel: Angreifer schmuggeln SQL-Befehle in Ihre Anwendung, um an Daten zu kommen oder diese zu manipulieren.

#### Arten von Angriffen
- **Einfache Injection**
  - Wie ein simpler Dietrich
  - Manipuliert WHERE-Bedingungen
  - Umgeht Login-Prüfungen

- **Blind Injection**
  - Wie ein Einbrecher im Dunkeln
  - Errät Daten Stück für Stück
  - Nutzt TRUE/FALSE-Antworten

- **Time-based Injection**
  - Wie eine Zeitbombe
  - Nutzt Verzögerungen
  - Sehr schwer zu erkennen

#### Wie schützt man sich?
- **Prepared Statements**
  - Wie ein Tresor mit Zahlenschloss
  - Trennt Befehle von Daten
  - Verhindert Code-Einschleusung

- **ORM verwenden**
  - Wie ein Sicherheitsdienst
  - Automatische Absicherung
  - Weniger Fehlerquellen

### Brute Force Angriffe [↗](https://owasp.org/www-community/attacks/Brute_force_attack)
#### Was ist das?
Wie ein Einbrecher, der alle möglichen Schlüssel ausprobiert: Systematisches Durchprobieren von Passwörtern oder Zugangsdaten.

#### Schutzmaßnahmen
- **Rate Limiting**
  - Wie eine Sperre nach zu vielen Versuchen
  - Begrenzt Anmeldeversuche
  - Zeitverzögerungen einbauen

- **Account Sperren**
  - Wie ein Alarmsystem
  - Temporäre Sperrungen
  - Admin-Benachrichtigung

- **Starke Passwörter**
  - Wie ein kompliziertes Schloss
  - Mindestlänge
  - Sonderzeichen
  - Zahlen und Buchstaben

### Verschlüsselung und Hashing [↗](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
#### Was ist das?
Wie ein Safe für Ihre Daten: Macht sensible Informationen unleserlich für Unbefugte.

#### Verschlüsselungsarten
- **Symmetrisch (AES)**
  - Wie ein Schlüssel für alle Türen
  - Schnell und effizient
  - Gleicher Schlüssel zum Ver- und Entschlüsseln

- **Asymmetrisch (RSA)**
  - Wie Briefkasten und Schlüssel
  - Öffentlicher Schlüssel zum Verschlüsseln
  - Privater Schlüssel zum Entschlüsseln

#### Hashing für Passwörter
- **Moderne Algorithmen**
  - Bcrypt (empfohlen)
  - Argon2 (noch sicherer)
  - PBKDF2 (standardkonform)

- **Best Practices**
  - Salting verwenden
  - Hohe Iterationszahlen
  - Regelmäßige Updates

## 2. Weitere wichtige Sicherheitsaspekte (nicht im Detail behandelt)

### Authentifizierung & Autorisierung
> **Hinweis**: Diese Konzepte wurden nicht im Detail behandelt.

- **Multi-Faktor-Authentifizierung**
  - Wie mehrere Schlösser
  - Etwas, das man weiß (Passwort)
  - Etwas, das man hat (Token)
  - Etwas, das man ist (Biometrie)

- **OAuth & JWT**
  - Wie ein Türsteher mit Gästeliste
  - Sichere Token-Verwaltung
  - Zugriffskontrolle

### Netzwerksicherheit
> **Hinweis**: Diese Themen wurden nicht im Detail behandelt.

- **HTTPS/TLS**
  - Wie ein verschlüsselter Tunnel
  - Sichere Kommunikation
  - Zertifikate

- **Firewalls**
  - Wie ein Sicherheitscheck am Eingang
  - Zugriffskontrolle
  - Angriffserkennung

## Praktische Tipps
- Sicherheit von Anfang an einplanen
- Regelmäßige Updates durchführen
- Backups erstellen und testen
- Logging und Monitoring einrichten
- Team-Schulungen durchführen
- Incident-Response-Plan haben
- Regelmäßige Security-Audits

## Wie wähle ich die richtigen Sicherheitsmaßnahmen?
Überlegen Sie sich:

### 1. Risikobewertung
- **Welche Daten schützen Sie?**
  → Bestimmt Sicherheitsniveau
- **Wer sind mögliche Angreifer?**
  → Beeinflusst Schutzmaßnahmen
- **Was sind die Folgen eines Angriffs?**
  → Bestimmt Prioritäten

### 2. Implementierung
- **Welche Ressourcen haben Sie?**
  → Budget und Personal
- **Wie komplex ist die Anwendung?**
  → Angriffsfläche
- **Welche Compliance-Anforderungen gibt es?**
  → Rechtliche Vorgaben

### 3. Wartung
- **Wie halten Sie die Sicherheit aktuell?**
  → Update-Strategie
- **Wie erkennen Sie Angriffe?**
  → Monitoring
- **Wie reagieren Sie auf Vorfälle?**
  → Notfallplan

## Security Checkliste
- [ ] Input-Validierung implementiert
- [ ] Output-Encoding aktiviert
- [ ] Prepared Statements verwendet
- [ ] Rate Limiting eingerichtet
- [ ] HTTPS konfiguriert
- [ ] Security-Header gesetzt
- [ ] Passwort-Hashing implementiert
- [ ] Session-Management sicher
- [ ] Logging aktiviert
- [ ] Backup-Strategie vorhanden

## Ressourcen zum Lernen
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Web Security Academy](https://portswigger.net/web-security)
- Security-Blogs und -Foren
- Online-Kurse (Udemy, Coursera)
- Sicherheits-Konferenzen
- Bug Bounty Plattformen

## Fazit
Sicherheit ist kein Produkt, sondern ein Prozess. Es geht nicht darum, ein perfektes System zu bauen (das gibt es nicht), sondern darum, die wichtigsten Risiken zu erkennen und angemessen zu behandeln. Die hier behandelten Kernthemen bieten einen guten Ausgangspunkt für sichere Anwendungsentwicklung. 