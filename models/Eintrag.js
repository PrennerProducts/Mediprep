import { MedikamentenListe } from "./MedikamentenListe";

export class Eintrag{
    constructor(medikamentId, anzahl){
        this.medikamentId = medikamentId;
        this.anzahl = anzahl;
    }

    //Gibt Infos zum Eintrag auf der Console aus.
    anzeigen(){
        console.log("\t" + MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(this.medikamentId).name, this.anzahl + ";");
    }

    //Anzahl wird aktualsiert.
    anzahlAendern(anzahl){
        this.anzahl = anzahl;
    }
    
    leeren(){
        this.medikamentId = null;
        this.anzahl = null;
    }
}