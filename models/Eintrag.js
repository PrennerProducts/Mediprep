import { MedikamentenListe } from "./MedikamentenListe";

export class Eintrag{
    constructor(medikamentId, anzahl){
        this.medikamentId = medikamentId;
        this.anzahl = anzahl;
    }

    anzeigen(){
        console.log("\t" + MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(this.medikamentId).name, this.anzahl + ";");
    }

    anzahlAendern(anzahl){
        this.anzahl = anzahl;
    }
    
    leeren(){
        this.medikamentId = null;
        this.anzahl = null;
    }
}