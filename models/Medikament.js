import { IDGenerator } from './IDGenerator';

export class Medikament {
  constructor(name, url) {
    this.id = IDGenerator.Singleton.getInstance().getNextID();
    this.name = name;
    this.bild = url;
    this.befuellung = [];         // Befuellung des Medikaments. Index = Fachindex, Wert = Tablettenanzahl
    for (let i = 0; i<28; i++){   // Anfangs werden alle Werte auf 0 gesetzt
      this.befuellung.push(0);
    }
  }

  //Gibt Infos zum Medikament auf der Console aus
  anzeigen() {
    console.log(
      'ID: ' +
      this.id +
        '\t' +
        this.name +
        ',\tBild: ' +
        this.bild +
        '\tBefuellung: ' +
        this.befuellung +
        ';'
    );
  }
}
