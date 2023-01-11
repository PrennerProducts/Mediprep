import { Speicherverwaltung } from "../data/Speicherverwaltung";
import { DummySchachtel } from "../data/DummySchachtelFile";
import { Medikament } from "./Medikament";

export class MedikamentenListe {
  static MLDummy = new MedikamentenListe('Medikamenten-Datenbank');
  constructor(name) {
    this.name = name;
    this.medikamente = [];
  }
  //Jedes erzeugte Medikament wird in der MedikamentenListe hinzugefuegt und in userMeds gespeichert. Wenn schon ein Eintrag besteht, wird der neue verworfen.
  async medikamentHinzufuegen(medikament) {
    for (const m of this.medikamente) {
      if (medikament.name === m.name) return;
    }
    this.medikamente.push(medikament);
    await Speicherverwaltung.writeFile('userMeds', medikament.name + ',' + medikament.bild + ',' + medikament.befuellung + '\n');
    DummySchachtel.aktualisieren(this.medikamente);
  }

  async initialisieren(){
    // Hier wird geprueft ob die Datei 'userMeds' im Speicher existiert. Wenn nicht, wird sie erstellt.
    let checkForMediListFile = await Speicherverwaltung.checkFile('userMeds');
    if (checkForMediListFile === false) {
        await Speicherverwaltung.createFile('userMeds', '');
        console.log('Datei userMeds wurde erstellt.');
    }
    let userMeds = await Speicherverwaltung.loadFile('userMeds');
    console.log(userMeds);
    let medikamente = userMeds.split('\n');                                        
    for (const m of medikamente){
        let token = m.split(',');
        if (token[0] === '') break;                         // bei leerem Token Abbruch!
        let tempMed = new Medikament(token[0], token[1]);
        for (let i = 0; i<28; i++){
            tempMed.befuellung[i] = token[i+2];             
        }
        this.medikamente.push(tempMed);
        DummySchachtel.aktualisieren(this.medikamente);
    }
  }
  //Zeigt die gesamete Liste in der Console an
  anzeigen() {
    console.log(
      this.name + ' (Anzahl Medikamente ' + this.medikamente.length + '):'
    );
    for (const m of this.medikamente) {
      m.anzeigen();
    }
    console.log('\n');
  }
  //Gibt aus der Liste das Medikament mit der angegebenen ID zurueck.
  medikamentAnhandIDabrufen(medikamentId) {
    for (const m of this.medikamente) {
      if (m.id === medikamentId) {
        return m;
      }
    }
    return { name: 'Leer', bild: '../assets/Immagine.png' };
  }

  // Returns the name of the medication with the given ID
  getMedikamentName(medikamentId) {
    for (const m of this.medikamente) {
      if (m.id === medikamentId) {
        return m.name;
      }
    }
    return 'Error 42';
  }

  // Returns the path of the image file
  getImgUrl(medikamentId) {
    for (const m of this.medikamente) {
      if (m.id === medikamentId) {
        return m.bild;
        //console.log(m.bild);
      }
    }
    return 'No image found';
  }

}
