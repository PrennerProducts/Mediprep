import { Medikament } from "../models/Medikament";
import { MedikamentenListe } from "../models/MedikamentenListe";
import { DummySchachtel } from "../data/DummySchachtelFile";
import { ScreenObserver } from '../models/ScreenObserver';
import { Speicherverwaltung } from "../data/Speicherverwaltung";

export const DataTests = {
    test: async function(){
    
    // In der Datei mediList.txt im lokalen Speicher werden alle Medikamente des Users*in gespeichert. Bei jedem Start der App wird diese Datei ausgelesen und die Medikamentenliste aktualisiert.
    // Zu Testzwecken wird hier mediList.txt geloescht...
    await Speicherverwaltung.deleteFile('mediList.txt');

    // Pruefen ob die Datei 'mediList.txt' im Speicher existiert. Wenn nicht, wird sie erstellt.
    let checkForMediListFile = await Speicherverwaltung.checkFile('mediList.txt');
    if (checkForMediListFile === false) {
        await Speicherverwaltung.createFile('mediList.txt', '');
        console.log('Datei mediList.txt wurde erstellt.');
    }

    // Beispielbefuellung mit Medikamenten. Jeder Eintrag besteht aus Name, Url, Befuellung. Mit ',' getrennt. Am Ende steht '}'. 
    await Speicherverwaltung.writeFile('mediList.txt', 'Mexalen,https://cdn.shop-apotheke.com/images/A39/097/80/A3909780-p14.jpg,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}');
    await Speicherverwaltung.writeFile('mediList.txt', 'Aspirin,https://cdn.shop-apotheke.com/images/A24/239/92/A2423992-p1.jpg,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}');

    // MedikamentenListe wird mit den Daten aus mediList.txt befuellt. 
    let mediListString = await Speicherverwaltung.loadFile('mediList.txt');
    let mediListMeds = mediListString.split('}');                                        
    for (const m of mediListMeds){
        let token = m.split(',');
        if (token[0] === '') break;                         // bei leerem Token Abbruch!
        let tempMed = new Medikament(token[0], token[1]);
        for (let i = 0; i<28; i++){
            tempMed.befuellung[i] = token[i+2];             
        }
        MedikamentenListe.MLDummy.medikamentHinzufuegen(tempMed);
    }

    // *** SIMULATION DER MEDIKAMENTENERFASSUNG ***
    // Beispiel: User muss Montag Morgen (= Fach 0) 1, Mittwoch Nachts (= Fach 11) 0.5, und Sonntag Abend (= Fach 26) 3 Tabletten Euthyrox nehmen.

    // TODO: Medikamentenerfassung auf Startscreen starten...
   
    // TODO: User sucht nach Medikament...
    // In API wird Medikament gefunden, und im ScreenObserver das temporaere Medikament aktualisiert.
    ScreenObserver.tempMed = new Medikament('Euthyrox 75µg', 'https://cdn.shop-apotheke.com/images/D02/754/766/D02754766-p10.jpg');

    // TODO: User gibt die Medikamentbefuellung ein...
    ScreenObserver.tempMed.befuellung[0] = 1;
    ScreenObserver.tempMed.befuellung[11] = 0.5;
    ScreenObserver.tempMed.befuellung[26] = 3;

    // User speichert Medikament ab -> Medikamentenliste wird aktualisiert und neuer Eintrag in mediList hinzugefuegt.
    MedikamentenListe.MLDummy.medikamentHinzufuegen(ScreenObserver.tempMed);
    await Speicherverwaltung.writeFile('mediList.txt', ScreenObserver.tempMed.name + ',' + ScreenObserver.tempMed.bild + ',' + ScreenObserver.tempMed.befuellung + '}');

    // Zur Kontrolle:
    console.log('\nInhalt von mediList.txt:\n');
    await Speicherverwaltung.showFile('mediList.txt');
    console.log('\nMedikamentenliste:\n')
    MedikamentenListe.MLDummy.anzeigen();

    // Zum Schluss: Auf DummySchachtel anwenden.
    DummySchachtel.aktualisieren();
    }
}