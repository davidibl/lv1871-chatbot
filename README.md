# lv1871-pwa
Ein Progressive Web App Dojo


# Schritt 1 - Entwicklungsumgebung

Sucht euch einen Ordner in dem alles stattfinden soll, öffnet eine Git Bash (rechtsklick -> Git Bash here)

Dann folgendes Repository klonen:
**https://github.com/davidibl/lv1871-pwa.git**

*git clone https://github.com/davidibl/lv1871-pwa.git*

In diesem Repository findet ihr auch dieses Readme.

# Schritt 2 - CLI installieren und Angular Projekt erzeugen

- CLI installieren: *npm install -g @angular/cli*
- In der Umgebungsvariablen Path eures Kontos folgenden Eintrag hinzufügen: 'C:\Users\%USERNAME%\AppDate\Roaming\npm'
- In den Ordner des Projektes wechseln (lv1871-pwa)
- Nun kann die Web App gestartet werden *ng serve --port xxxx* (Port mit Glück einen freien wählen)
- Und zuletzt könnt ihr die Web App betrachten: *localhost:port*

-> Schritt 2 geschafft

# Schritt 3 - Eine PWA erzeugen

Der erste Schritt zur Erzeugung einer PWA ist es ein manifest.json hinzuzufügen.
Sucht im Internet ein Beispiel und sorgt dafür dass Chrome in den Dev-Tools unter *Appplication -> Manifest* unsere Webapp als PWA registriert.