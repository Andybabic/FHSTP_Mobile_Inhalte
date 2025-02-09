# Web Vitals und Benutzerfreundlichkeit

## Übersicht
Eine umfassende Darstellung von Web Vitals, Performance-Optimierung und Barrierefreiheit für optimale Benutzererfahrung.

## 1. Core Web Vitals [↗](https://web.dev/vitals/)
### Largest Contentful Paint (LCP)
#### Beschreibung
- Ladezeit des größten sichtbaren Elements
- Zielwert: unter 2,5 Sekunden
- Wichtig für wahrgenommene Ladegeschwindigkeit

#### Optimierung
- **Serverantwortzeit verbessern**
  - Server-Caching
  - CDN Nutzung
  - Edge Computing

- **Ressourcen optimieren**
  - Bildoptimierung
  - Code-Splitting
  - Critical CSS

### First Input Delay (FID)
#### Beschreibung
- Zeit bis zur ersten Interaktionsmöglichkeit
- Zielwert: unter 100 Millisekunden
- Maß für Interaktivität

#### Optimierung
- **JavaScript optimieren**
  - Code-Splitting
  - Lazy Loading
  - Web Workers

- **Main Thread entlasten**
  - Lange Tasks aufteilen
  - Event Handler optimieren
  - Debouncing/Throttling

### Cumulative Layout Shift (CLS)
#### Beschreibung
- Visuelle Stabilität der Seite
- Zielwert: unter 0,1
- Verhindert unerwartete Layout-Verschiebungen

#### Optimierung
- **Medien-Dimensionen**
  - width/height Attribute
  - aspect-ratio
  - Platzhalter

- **Dynamische Inhalte**
  - Reservierte Bereiche
  - Skeleton Screens
  - Loading States

## 2. Bildoptimierung
### Lazy Loading
```html
<img src="bild.jpg" 
     loading="lazy" 
     alt="Beschreibung"
     width="800" 
     height="600">
```

#### Implementierung
- **Native Lazy Loading**
  - loading="lazy" Attribut
  - Browser-native Unterstützung
  - Fallback für ältere Browser

- **Intersection Observer**
  - Dynamisches Laden
  - Benutzerdefinierte Schwellenwerte
  - Progressive Enhancement

### Bildformate
- **WebP**
  - Moderne Kompression
  - Breite Unterstützung
  - Fallback-Strategien

- **AVIF**
  - Beste Kompression
  - Wachsende Unterstützung
  - Zukunftssicher

### Responsive Images
```html
<picture>
  <source media="(min-width: 800px)" srcset="gross.jpg">
  <source media="(min-width: 400px)" srcset="mittel.jpg">
  <img src="klein.jpg" alt="Beschreibung">
</picture>
```

## 3. Barrierefreiheit (WCAG 2.1)
### Grundprinzipien
- **Wahrnehmbar**
  - Alt-Texte für Bilder
  - Untertitel für Videos
  - Ausreichender Kontrast
  - Responsive Design

- **Bedienbar**
  - Keyboard Navigation
  - Skip Links
  - Genügend Zeit
  - Keine Blitze

- **Verständlich**
  - Klare Struktur
  - Konsistente Navigation
  - Fehleridentifikation
  - Hilfe und Dokumentation

- **Robust**
  - Valides HTML
  - ARIA-Labels
  - Kompatibilität
  - Geräteunabhängig

### ARIA-Rollen und Attribute
```html
<nav role="navigation" aria-label="Hauptmenü">
  <button aria-expanded="false" aria-controls="menu">
    Menü
  </button>
  <ul id="menu" role="menu">
    <li role="menuitem"><a href="#">Start</a></li>
  </ul>
</nav>
```

### Tastaturnavigation
- Fokus-Styles
- Logische Tab-Reihenfolge
- Skip Links
- Keyboard Traps vermeiden

## 4. Performance Optimierung
### Code-Splitting
```javascript
// Dynamischer Import
const Komponente = React.lazy(() => import('./Komponente'));

// Route-basiertes Splitting
const Route = {
  component: React.lazy(() => import('./Route'))
};
```

### Critical CSS
- Above-the-fold CSS inline
- Async CSS Loading
- CSS-in-JS Optimierung
- Modulares CSS

### Caching-Strategien
- **Browser Cache**
  - Cache-Control Header
  - ETag
  - Last-Modified

- **Service Worker**
  - Offline First
  - Cache then Network
  - Stale While Revalidate

## 5. UX Best Practices
### Loading States
- Skeleton Screens
- Progressive Loading
- Optimistic UI
- Loading Indikatoren

### Error Handling
- Benutzerfreundliche Fehlermeldungen
- Wiederherstellungsoptionen
- Offline Support
- Formularvalidierung

### Mobile First
- Responsive Design
- Touch-freundlich
- Viewport-Optimierung
- Progressive Enhancement

## Performance Checkliste
- [ ] Bilder optimiert und Lazy Loading implementiert
- [ ] Critical CSS identifiziert und inline
- [ ] JavaScript Code-Splitting implementiert
- [ ] Service Worker für Caching eingerichtet
- [ ] Web Fonts optimiert
- [ ] ARIA-Labels und Rollen implementiert
- [ ] Tastaturnavigation getestet
- [ ] Responsive Design implementiert
- [ ] Performance-Monitoring eingerichtet
- [ ] Barrierefreiheit getestet

## Tools und Testing
### Performance
- Lighthouse
- WebPageTest
- Chrome DevTools
- GTmetrix

### Barrierefreiheit
- WAVE
- aXe
- Screenreader Tests
- Keyboard Navigation Tests

### Monitoring
- Google Analytics
- Core Web Vitals Report
- Real User Monitoring (RUM)
- Synthetic Monitoring

## Ressourcen
- [Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- High Performance Web Sites (von Steve Souders)
- Inclusive Design Patterns (von Heydon Pickering)
- Web Performance in Action (von Jeremy Wagner) 