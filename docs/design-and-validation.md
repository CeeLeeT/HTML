# Gestaltung und Prüfung – 8. Oktober 2026

## Vorgaben

- Bestehendes GeekStation-Logo verwenden.
- Neues Bild und verständlichere, aussagekräftigere Texte.
- Sämtliche Hintergründe dunkel, keine hellen Zwischenabschnitte.
- Kurzer Titel: GeekStation.
- Kompakter Aufbau mit großem Bild, konkreten Projekten und Themenarchiven.

## Gestaltung

Farben: Hintergrund `#080d0b`, Flächen `#0c1410`, Text `#edf4ef`, Akzent `#83f7ad`, Linien `#2c4034`.

Die final bestätigte Bildkonzeption zeigt einen breiten Titelbereich, eine Panoramaaufnahme, ein hervorgehobenes Scanner-Projekt mit zwei ergänzenden Projekten, vier Archivlinks und einen kurzen persönlichen Abschnitt. Die Umsetzung folgt dieser Konzeption.

Bewusste Anpassungen: Das vorhandene GS-Schildlogo ersetzt die Logoannäherung im Bildentwurf. Die Texte sind anhand der tatsächlichen Repositories präzisiert; insbesondere bietet der Scanner Ping-Host-Erkennung und Hostnamenauflösung, keinen Portscan. Das Lab Dashboard ist mit HTML/CSS/JavaScript beschrieben. Terminalausgabe und KI-Motiv sind als Beispiele gekennzeichnet. Mobil werden Spalten sinnvoll untereinander angeordnet.

## Bildherkunft und Prompt

Das Bild wurde mit dem integrierten Bildgenerator erstellt und anschließend für die Website als WebP exportiert. Es ist eine Illustration, keine Aufnahme des tatsächlichen Homelabs.

Finaler Bildauftrag: Panoramaaufnahme eines realistischen Heim-IT-Labs im Verhältnis 21:9. Ultrawide-Monitor mit dunklem Linux-Terminal und Systemmonitor, Raspberry Pi in transparentem Gehäuse, kompakter Netzwerk-Switch, kleine NAS-/Mini-PC-Geräte, dunkle Tastatur und Maus, ordentlich geführte Kabel. Zurückhaltende mintgrüne Statuslichter, natürliche warme Beleuchtung und dunkle Graphitfarben. Keine Personen, keine Zugangsdaten oder echten Adressen, keine Logos, kein Textoverlay, keine künstliche grüne Farbtönung.

## Visueller Abgleich

Der bestätigte dunkle Entwurf und Screenshots der Umsetzung wurden direkt betrachtet und verglichen:

| Prüfpunkt | Umsetzung |
|---|---|
| Titel und sichtbare Starttexte | Kurzer Titel, Untertitel und Projekt-CTA entsprechen der bestätigten Richtung |
| Aufbau | Titelbereich, breites Foto, asymmetrische Projekte, vier Archive und persönlicher Abschnitt |
| Typografie | Große, kurze Hauptüberschrift; kleinere gut lesbare Projekt- und Fließtexte |
| Farben | Durchgehend dunkle Flächen, grüne Akzente, keine weißen Zwischenbereiche |
| Bild und Logo | Bestehendes Schildlogo; eigenes Panorama ohne Textoverlay |
| Interaktion | Abschnittslinks, GitHub-Verweise und mobiles Menü |
| Responsive Verhalten | Desktop, iPad, iPhone und schmales 320-Pixel-Layout |

Die Fließtexte sind absichtlich ausführlicher als im Bildentwurf. Das erhöht die Höhe der Projektbereiche, bewahrt aber deren Anordnung. Die Abweichungen oben sind nachvollziehbare Inhaltskorrekturen und erfüllen die Nutzerwünsche.

## Prüfung

Die lokale Vorschau war im Cloud-Browser nicht erreichbar (`ERR_CONNECTION_REFUSED`). Daher wurde vor der Veröffentlichung mit Playwright und einem lokal ausgeführten Chromium geprüft. JavaScript-Syntax, Bildladen, Abschnittsziele, horizontales Überlaufen und mobile Menüaktionen wurden kontrolliert. Zusätzlich wurde die Navigation ohne JavaScript geprüft.

Viewportgrößen: Desktop 1440 × 1000, iPad 820 × 1180, iPhone 390 × 844, kleines Gerät 320 × 740. Der native 1024-Pixel-Entwurf wurde ergänzend in einem 1024-Pixel-Viewport abgeglichen.
