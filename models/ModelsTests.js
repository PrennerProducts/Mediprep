import { Medikament } from "./Medikament";
import { MEDIKAMENTE } from "../data/mediList";
import { MedikamentenListe } from "./MedikamentenListe";
import { Schachtel } from "./Schachtel";

export const modelsTests = {
    test: function(){

    //Simulation: Benutzer*in erfasst Medikamente. Die ID wird von einem Singleton ID-Generator vergeben.
    //Jedes neue Medikament wird automatisch in der Dummy Datenbank "MLDummy" abgelegt. Diese Datenbank ist provvisorisch als statische Variable in der Klasse MedikamentenListe angelegt.
    let m1 = new Medikament("Ibuprofen", 20, "bild-Url", false);
    let m2 = new Medikament("Thomapyrin", 25, "bild-Url", false);
    let m3 = new Medikament("Voltaren", 20, "bild-Url", false);
    MedikamentenListe.MLDummy.anzeigen();


    //Simulation: Benutzer*in erstellt Schachtel mit gewuenschter Anzahl von Faechern (4,7,14 oder 28)
    let s1 = new Schachtel("Meine Schachtel", 28);
    //s1.anzeigen();


    //Simulation: Benutzer*in befuellt Schachtel manuell mit verschiedenen Medikamenten
    s1.befuellen(0, 3, 0.5);
    s1.befuellen(0, 2, 3);
    s1.befuellen(0, 2, 5);
    s1.befuellen(1, 7, 0.5);
    s1.befuellen(1, 5, 3);
    s1.befuellen(2, 2, 0.5);
    s1.befuellen(3, 3, 1);
    s1.befuellen(3, 6, 1);


    //Simulation: Benutzer*in befuellt Schachtel zyklisch mit verschiedenen Medikamenten. Hier mit Modus 2 (= alle 2 Tage), Startfach 0 (= MontagMorgen), MedikamentID 4 (= Bisoprol), Anzahl 20
    s1.befuellenZyklisch(2, 0, 4, 20);
    //s1.anzeigen();


    //Simulation: Benutzer*in aktiviert Medikamentenvorbereitung: Auswahl Wochentag (TODO, wird hier nur simuliert) -> Medikamente werden der Reihe nach zur Befuellung angezeigt.
    //Schritt 1: Wahl des Wochentags. Hier als Beispiel Montag Morgen (simuliert durch fachIndex 0)
    let fachIndex = 0;
    let medikamentIndex = 0;
    s1.anzeigenFachMedikament(fachIndex, medikamentIndex);
    //Schritt 2: Benutzer*in bestaetigt Befuellung durch Tippen auf "Weiter"-Button. Naechstes Medikament wird angezeigt (medikamentIndex wird um 1 hochgezaehlt).
    medikamentIndex++;
    s1.anzeigenFachMedikament(fachIndex, medikamentIndex);
    //Schritt 3: Benutzer*in bestaetigt Befuellung durch Tippen auf "Weiter"-Button. Naechstes Medikament wird angezeigt (medikamentIndex wird um 1 hochgezaehlt).
    medikamentIndex++;
    s1.anzeigenFachMedikament(fachIndex, medikamentIndex);
    //Schritt 4: Benutzer*in bestaetigt Befuellung durch Tippen auf "Weiter"-Button. Naechstes Medikament wird angezeigt (medikamentIndex wird um 1 hochgezaehlt).
    medikamentIndex++;
    s1.anzeigenFachMedikament(fachIndex, medikamentIndex);


    //Simulation: Benutzer*in leert Fach
    s1.leerenFach(0);
    //s1.anzeigen();


    //Simulation: Benutzer*in leert Schachtel
    s1.leeren();
    //s1.anzeigen();


    }
}