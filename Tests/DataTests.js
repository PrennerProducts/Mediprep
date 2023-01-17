import { Medikament } from "../models/Medikament";
import { MedikamentenListe } from "../models/MedikamentenListe";
import { ScreenObserver } from '../models/ScreenObserver';
import { Speicherverwaltung } from "../data/Speicherverwaltung";

export const DataTests = {
    test: async function(){
        // Szenario 1: 
        // App wird zum ersten mal gestartet. Noch keine Medikamente vorhanden.
        await this.reset();  
        await MedikamentenListe.MLDummy.initialisieren();

        // Beispielerfassung von Medikamenten.
        //Mexalen
        ScreenObserver.tempMed = new Medikament('Mexalen','https://cdn.shop-apotheke.com/images/A39/097/80/A3909780-p14.jpg');
        ScreenObserver.tempMed.befuellung[0] = 2;
        ScreenObserver.tempMed.befuellung[4] = 3;
        ScreenObserver.tempMed.befuellung[7] = 1;
        ScreenObserver.tempMed.befuellung[26] = 2;
        await MedikamentenListe.MLDummy.medikamentHinzufuegen(ScreenObserver.tempMed);
        //Aspirin
        ScreenObserver.tempMed = new Medikament('Aspirin','https://cdn.shop-apotheke.com/images/A24/239/92/A2423992-p1.jpg');
        ScreenObserver.tempMed.befuellung[2] = 1;
        ScreenObserver.tempMed.befuellung[4] = 0.5;
        ScreenObserver.tempMed.befuellung[8] = 1;
        ScreenObserver.tempMed.befuellung[26] = 3;
        await MedikamentenListe.MLDummy.medikamentHinzufuegen(ScreenObserver.tempMed);

        // Zur Kontrolle:
        console.log('\nInhalt von userMeds:\n');
        await Speicherverwaltung.showFile('userMeds');
        console.log('\nMedikamentenliste:\n')
        MedikamentenListe.MLDummy.anzeigen();
    },

    test2: async function(){
        // Szenario 2:
        // Medikamente sind vorhanden. MedikamentenListe wird mit den Daten aus userMeds befuellt. 
        await MedikamentenListe.MLDummy.initialisieren();

        // Beispielerfassung von Medikament
        //Euthyrox
        ScreenObserver.tempMed = new Medikament('Euthyrox','https://cdn.shop-apotheke.com/images/D02/754/766/D02754766-p10.jpg');
        ScreenObserver.tempMed.befuellung[0] = 2.5;
        ScreenObserver.tempMed.befuellung[4] = 2.5;
        ScreenObserver.tempMed.befuellung[8] = 2.5;
        ScreenObserver.tempMed.befuellung[12] = 2.5;
        ScreenObserver.tempMed.befuellung[16] = 2.5;
        ScreenObserver.tempMed.befuellung[20] = 2.5;
        ScreenObserver.tempMed.befuellung[24] = 2.5;
        ScreenObserver.tempMed.befuellung[28] = 2.5; // ungueltiges Fach
        await MedikamentenListe.MLDummy.medikamentHinzufuegen(ScreenObserver.tempMed);

        // Zur Kontrolle:
        console.log('\nInhalt von userMeds:\n');
        await Speicherverwaltung.showFile('userMeds');
        console.log('\nMedikamentenliste:\n')
        MedikamentenListe.MLDummy.anzeigen();
    },

    //Zum Resetten...
    reset: async function(deleteFile){
        if (deleteFile === true){
            let checkForMediListFile = await Speicherverwaltung.checkFile('userMeds');
            if (checkForMediListFile === true) {
                await Speicherverwaltung.deleteFile('userMeds');
            }   
        }
        await MedikamentenListe.MLDummy.initialisieren();
    }
}