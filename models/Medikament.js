import { IDGenerator } from './IDGenerator';
import { MedikamentenListe } from './MedikamentenListe';

export class Medikament {
  constructor(name, inhaltVerpackung, bild, istBereit, color) {
    this.id = IDGenerator.Singleton.getInstance().getNextID();
    this.name = name;
    this.inhaltVerpackung = inhaltVerpackung;
    this.bild = bild;
    this.istBereit = istBereit;
    this.color = color;
    MedikamentenListe.MLDummy.medikamentHinzufuegen(this);
  }

  //Gibt Infos zum Medikament auf der Console aus
  anzeigen() {
    console.log(
      'ID: ' +
      this.id +
        '\t' +
        this.name +
        //',\tInhalt Verpackung: ' +
        //this.inhaltVerpackung +
        //',\tBild: ' +
        //this.bild +
        //',\tBereit: ' +
        //this.istBereit +
        ';'
    );
  }
}
