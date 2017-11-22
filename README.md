# lv1871-pwa
Eine App mit Frontend für einen Chatbot.


# Schritt 1 - Entwicklungsumgebung

Sucht euch einen Ordner in dem alles stattfinden soll, öffnet eine Git Bash (rechtsklick -> Git Bash here)

Dann folgendes Repository klonen:
**https://github.com/davidibl/lv1871-chatbot**

*git clone https://github.com/davidibl/lv1871-chatbot*

In diesem Repository findet ihr auch dieses Readme.

# Schritt 2 - CLI installieren und Angular Projekt erzeugen

- CLI installieren: *npm install -g @angular/cli*
- In der Umgebungsvariablen Path eures Kontos folgenden Eintrag hinzufügen: 'C:\Users\%USERNAME%\AppDate\Roaming\npm'
- In den Ordner des Projektes wechseln (lv1871-chatbot)
- Nun kann die Web App gestartet werden *ng serve --port xxxx* (Port mit Glück einen freien wählen)
- Und zuletzt könnt ihr die Web App betrachten: *localhost:port*

-> Schritt 2 geschafft

# Schritt 3 - Einen Chat bauen :-)

Der erste Schritt auf unserem Weg zu einem Chat Frontend soll es sein dem Benutzer eine Sprechblase mit einer Begrüßung
darzustellen.
Diese Nachricht soll folgendes Anzeigen:
"Hallo Herr Ibl, wie geht es Ihnen? Übrigens, Ihre Kundennummer ist 123"

Diese Nachricht soll nachdem die Chatseite betreten wurde, mit einer Sekunde Verzögerung erscheinen! Dies soll
das Gefühl einer Konversation verstärken.

Es existiert schon eine Chat Komponente in die auch alle benötigten Services injeziert werden.
Viel Erfolg.
