export class MedikamentenListe {
    static MLDummy = new MedikamentenListe("Medikamenten-Datenbank");
    constructor(name){
        this.name = name;
        this.medikamente = [];
    }
    medikamentHinzufuegen(medikament) {
        this.medikamente.push(medikament);
    }
    anzeigen(){
        console.log(this.name + " (Anzahl Medikamente " + this.medikamente.length + "):");
        for (const m of this.medikamente){
            m.anzeigen();
        }
        console.log("\n");
    }
    medikamentAnhandIDabrufen(medikamentId){
        for (const m of this.medikamente){
            if (m.id == medikamentId){
                return m.name;
            }
        }
        console.log("Nicht gefunden.");
    }
}