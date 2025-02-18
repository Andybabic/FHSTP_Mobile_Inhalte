# Design Patterns: Bewährte Lösungsmuster

## Übersicht
Diese Dokumentation erklärt wichtige Design Patterns (Entwurfsmuster) und wie sie in der Softwareentwicklung eingesetzt werden. Design Patterns sind wie Baupläne, die bewährte Lösungen für häufige Programmierproblem bieten.

> **Wichtiger Hinweis zur Abdeckung der Themen**: 
> Im Rahmen der Masterklasse wurden schwerpunktmäßig folgende Kernmuster behandelt:
> - MVC (Model-View-Controller)
> - Singleton
> - Observer
> - Prototype
> - State
> - Chain of Responsibility
> - Factory
>
> Die weiteren Design Patterns (wie Adapter, Decorator, etc.) werden hier zur Vollständigkeit erwähnt, wurden aber nicht im Detail behandelt.

Die Beschreibungen und Konzepte der Design Patterns (außer MVC) basieren auf [Refactoring.guru](https://refactoring.guru/design-patterns/catalog).

## 1. Kernmuster der Masterklasse

### MVC (Model-View-Presenter) [↗](https://www.microsoft.com/en-us/download/details.aspx?id=55984)
#### Was ist das?
MVC ist wie ein Dirigent (Presenter), der zwischen den Musikern (Model) und dem Publikum (View) vermittelt. Jeder hat seine klare Rolle:
- **Model**: Enthält die Daten und Geschäftslogik
- **View**: Zeigt die Benutzeroberfläche
- **Presenter**: Koordiniert alles

#### Wofür gut geeignet?
- Benutzeroberflächen mit viel Logik
- Wenn Tests wichtig sind
- Große Teams mit klarer Aufgabenteilung
- Komplexe Formulare und Eingabemasken

### Singleton [↗](https://refactoring.guru/design-patterns/singleton)
#### Was ist das?
Stellt sicher, dass es von einer Klasse nur eine einzige Instanz gibt - wie ein Präsident in einer Demokratie.

#### Wofür gut geeignet?
- Datenbankverbindungen
- Konfigurationsmanager
- Logger
- Ressourcen-Manager

### Observer [↗](https://refactoring.guru/design-patterns/observer)
#### Was ist das?
Wie ein Nachrichtendienst: Interessierte "Abonnenten" werden automatisch informiert, wenn sich etwas ändert.

#### Wofür gut geeignet?
- Event-Handling
- Benachrichtigungssysteme
- UI-Updates
- Datenänderungen verfolgen

### Prototype [↗](https://refactoring.guru/design-patterns/prototype)
#### Was ist das?
Ermöglicht das Kopieren von Objekten - wie ein Kopierer, der komplexe Dokumente dupliziert.

#### Wofür gut geeignet?
- Komplexe Objekte kopieren
- Vorlagen-basierte Objekte
- Konfigurationen duplizieren
- Spielobjekte erstellen

### State [↗](https://refactoring.guru/design-patterns/state)
#### Was ist das?
Erlaubt einem Objekt, sein Verhalten zu ändern, wenn sich sein Zustand ändert - wie eine Ampel, die ihre Farben wechselt.

#### Wofür gut geeignet?
- Workflow-Management
- Spieleentwicklung
- Dokumenten-Management
- Bestellprozesse

### Chain of Responsibility [↗](https://refactoring.guru/design-patterns/chain-of-responsibility)
#### Was ist das?
Wie eine Kette von Zuständigen: Jeder prüft, ob er helfen kann, und gibt sonst weiter.

#### Wofür gut geeignet?
- Authentifizierung & Autorisierung
- Validierungsketten
- Event-Handling
- Fehlerbehandlung

### Factory [↗](https://refactoring.guru/design-patterns/factory-method)
#### Was ist das?
Eine "Fabrik" für Objekte - statt direkter Erstellung lässt man die Fabrik die Objekte bauen.

#### Wofür gut geeignet?
- Flexible Objekterstellung
- Plugin-Systeme
- Framework-Entwicklung
- Konfigurierbare Systeme

## 2. Weitere wichtige Patterns (nicht im Detail behandelt)

### Strukturelle Patterns
> **Hinweis**: Diese Patterns wurden nicht im Detail behandelt, sind aber wichtig für das Verständnis.

- **Adapter**
  - Macht inkompatible Schnittstellen kompatibel
  - Wie ein Reiseadapter für Steckdosen

- **Decorator**
  - Erweitert Objekte dynamisch
  - Wie Geschenkpapier um ein Geschenk

- **Composite**
  - Behandelt Gruppen von Objekten wie einzelne Objekte
  - Wie Ordner und Dateien im Dateisystem

### Verhaltensmuster
> **Hinweis**: Diese Patterns wurden nicht im Detail behandelt.

- **Strategy**
  - Austauschbare Algorithmen
  - Wie verschiedene Routen zum Ziel

- **Command**
  - Kapselt Befehle als Objekte
  - Wie eine Fernbedienung

### Erzeugungsmuster
> **Hinweis**: Diese Patterns wurden nicht im Detail behandelt.

- **Builder**
  - Schrittweise Objekterstellung
  - Wie ein Bauplan

- **Abstract Factory**
  - Familien verwandter Objekte
  - Wie eine Möbelfabrik

## Praktische Beispiele
Die praktischen Implementierungen finden Sie in den entsprechenden Beispieldateien im `/samples` Verzeichnis:
- `MVC.ts` - Model-View-Presenter Beispiel
- `singleton.ts` - Singleton Pattern
- `observer.ts` - Observer Pattern
- `prototype.ts` - Prototype Pattern
- `state.ts` - State Pattern
- `chain-of-responsibility.ts` - Chain of Responsibility
- `factory.ts` - Factory Pattern

## Wie wähle ich das richtige Pattern?
Überlegen Sie sich:

### 1. Problem verstehen
- **Was ist die Hauptherausforderung?**
  → Bestimmt die Pattern-Kategorie
- **Welche Flexibilität wird benötigt?**
  → Beeinflusst die Pattern-Wahl
- **Wie komplex ist das Problem?**
  → Bestimmt die Implementierungstiefe

### 2. Kontext beachten
- **Wie groß ist das Projekt?**
  → Beeinflusst die Pattern-Komplexität
- **Wie erfahren ist das Team?**
  → Bestimmt die Lernkurve
- **Wie wichtig ist Wartbarkeit?**
  → Beeinflusst die Struktur

### 3. Zukunft berücksichtigen
- **Welche Änderungen sind wahrscheinlich?**
  → Flexibilität einplanen
- **Wie skaliert das System?**
  → Pattern-Eignung prüfen
- **Welche neuen Anforderungen könnten kommen?**
  → Erweiterbarkeit beachten

## Best Practices
- Pattern nicht erzwingen
- Einfachheit bevorzugen
- Dokumentation pflegen
- Team-Verständnis sicherstellen
- Patterns kombinieren wenn sinnvoll
- Performance beachten
- Wartbarkeit im Auge behalten

## Ressourcen zum Lernen
- [Refactoring.Guru](https://refactoring.guru/design-patterns)
- Design Patterns (Gang of Four Buch)
- Head First Design Patterns
- Clean Code (Robert C. Martin)
- Online-Kurse (Udemy, Coursera)
- Pattern-spezifische Tutorials
- Community-Foren

## Fazit
Design Patterns sind mächtige Werkzeuge, aber kein Allheilmittel. Wichtig ist, sie dort einzusetzen, wo sie wirklich Vorteile bringen. Oft ist eine einfache, direkte Lösung besser als ein komplexes Pattern. Die hier behandelten Kernmuster bieten einen guten Einstieg in die Welt der Design Patterns.
