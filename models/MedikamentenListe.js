export class MedikamentenListe {
    static MLDummy = new MedikamentenListe("Medikamenten-Datenbank");
    constructor(name){
        this.name = name;
        this.medikamente = [];
    }
    //Jedes erzeugte Medikament (aus mediList oder vom User) wird in der MedikamentenListe hinzugefuegt. Wenn schon ein Eintrag besteht, wird das neue Medikament verworfen.
    medikamentHinzufuegen(medikament) {
        for (const m of this.medikamente) {
            if (medikament.name === m.name) return;
        }
        this.medikamente.push(medikament);
    }
    //Zeigt die gesamete Liste in der Console an
    anzeigen(){
        console.log(this.name + " (Anzahl Medikamente " + this.medikamente.length + "):");
        for (const m of this.medikamente){
            m.anzeigen();
        }
        console.log("\n");
    }
    //Gibt aus der Liste das Medikament mit der angegebenen ID zurueck.
    medikamentAnhandIDabrufen(medikamentId){
        for (const m of this.medikamente){
            if (m.id === medikamentId){
                return m;
            }
        }
        return ({name: 'Ungueltig', bild: ''});
    }
}