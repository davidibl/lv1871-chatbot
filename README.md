# lv1871-pwa
Eine App mit Frontend für einen Chatbot.


# Schritt 1 - Entwicklungsumgebung

Schritte die mit "lv1871" markiert sind werden normalerweise nicht benötigt!

Sucht euch einen Ordner in dem alles stattfinden soll, öffnet eine Git Bash (rechtsklick -> Git Bash here)

- "lv1871" In Git den Proxy eintragen (proxy02:9090)

Dann folgendes Repository klonen:
**https://github.com/davidibl/lv1871-chatbot**

*git clone https://github.com/davidibl/lv1871-chatbot*

In diesem Repository findet ihr auch dieses Readme.

# Schritt 2 - CLI installieren und Angular Projekt erzeugen

- CLI installieren: *npm install -g @angular/cli*
- "lv1871" In der Umgebungsvariablen Path eures Kontos folgenden Eintrag hinzufügen: 'C:\Users\{USERNAME}\AppDate\Roaming\npm' ({USERNAME}) hierbei durch den eigenen Benutzernamen ersetzen!
- In den Ordner des Projektes wechseln (lv1871-chatbot)
- Abhängigkeiten mit npm install installieren: *npm install*
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
answer(message: string): Observable<ChatMessage>

Diese Methode nimmt die Nachricht des Benutzers entgegen. Die Signatur soll genau so sein!
Der Service soll ein Array mit 3 beliebigen Antworten enthalten von denen immer eine als Antwort zurückgegeben wird.
Die Antwort soll hierbei zufällig ausgewählt werden.

Jede Antwort soll in der UI leicht zeitverzögert erscheinen. Analog der initialen Nachricht.
Ausserdem soll jede Nachricht mit 'Hallo Kunde *kundennummer* beginnen!
Indem unsere Methode ein Observable zurück liefert, sind alle Vorbereitungen getroffen um einen Remoteservice
zum Antworten anzubinden.

Idealerweise ist es nach diesem Schritt zudem Nachrichten durch drücken der Enter-Taste zu senden.


# Schritt 7 - Der QnA Remote Service

Unter http://localhost:9001/api finden wir nun den Remote Service der schließlich antworten zu Fragen liefern soll.
In einem ersten Schritt gilt es diesen anzubinden und dafür zu sorgen dass auf eine Frage im er mit einer Antwort 
geantwortet wird.

Der richtige Ort für die Service Anbindung ist natürlich der ChatService. Mit Hilfe der Angular DI wird der
HttpClient im Kostruktor injeziert.

Wenn wir uns das API des HttpClient ansehen finden wir direkt Methoden die im REST Umfeld vertraut klingen...

In Zeile 34 wird mit Hilfe von *.switchMap(knr => this.getRandomMessage(knr))* eine zufällge Antwort erzeugt.
Genau hier muss statt der zufälligen Antwort eine Antwort aus dem Service abgerufen werden. Nachdem *getRandomMessage*
bereits asynchron implementiert ist müssen wir eigentlich nur die Frage durchschleifen und statt randomMessage den
HttpClient verwenden.


# Schritt 8 - Darstellung aller Antworten sortiert nach Score

Der Antwortservice liefert uns ein Modell zurück das n-Antworten enthalten kann.
In diesem Schritt sollen dem Benutzer alle Antworten des Service angezeigt werden. Sortiert nach ihrem Score.

* Der Score repräsentiert die Confidence mit der die Deep Learning Engine die Antwort ausgewählt hat

Man muss das Modell des Interface anpassen, das beim Abrufen der Nachrichte verwendet wird. Zudem muss das
Modell *ChatMessage* angepasst werden. Dieses kann nun mehrere Antworten enthalten und zudem zu jeder Antwort einen
Score.

Hält man das Modell abwärtskompatibel funktioniert die Nutzereingabe weiterhin. Dann müssen im Template mit Hilfe
der Angular Funktionen *ngIf und *ngFor etc. die Logik zur Darstellung abgebildet werden.

