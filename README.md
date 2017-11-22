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


# Schritt 4 - Ein Userinput hinzufügen

Als nächstes benötigen wir eine Eingabemöglichkeit damit der User einen neuen Text eingeben kann.
Hierzu soll am ganz unteren Rand des Bildschirms ein 2-zeiliges Textfeld dargestellt werden.
Neben dem Textfeld soll sich ein Button befinden über den die Nachricht gesendet wird.

Wenn eine Nachricht gesendet wurde, soll die Nachricht unmittelbar im Nachrichtenstream erscheinen.
Und direkt eine Nachricht mit drei Punkten, die suggerieren dass der virtuelle Gesprächspartner
gerade eine Antwort schreibt.


# Schritt 5 - Ein bisschen abrunden

Irgendwie passts jetzt noch nicht so recht, wenn der Nutzer eine zweite Nachricht direkt danach eingibt.
Unsere drei Indikatorpunkte bleiben leider immer stehen.
Das sollten wir verbessern indem die drei Punkte wenn sie denn erschienen sind immer die unterste Nachricht darstellen.

Zudem ist es Anforderung dass Nachrichten des Nutzers in schwarz auf hellgrau dargestellt werden.


# Schritt 6 - Der Chatservice

In diesem Schritt binden wir nun den Chatservice an.
Um diesen zunächst zu simulieren implementieren wir in dem Service ChatService eine Methode
answer(kundennummer: number, message: string): Observable<ChatMessage>

Diese Methode nimmt die Kundennummer und die Nachricht des Benutzers entgegen.
Der Service soll ein Array mit 3 beliebigen Antworten enthalten von denen immer eine als Antwort zurückgegeben wird.
Die Antwort soll hierbei zufällig ausgewählt werden.

Jede Antwort soll in der UI leicht eitverzögert erscheinen. Analog der initialen Nachricht.
Indem unsere Methode ein Observable zurück liefert, sind alle Vorbereitungen getroffen um einen Remoteservice
zum Antworten anzubinden.

Idealerweise ist es nach diesem Schritt zudem Nachrichten durch drücken der Enter-Taste zu senden.
