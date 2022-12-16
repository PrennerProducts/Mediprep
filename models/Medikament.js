import { IDGenerator } from './IDGenerator';
import { MedikamentenListe } from './MedikamentenListe';

export class Medikament {
  constructor(name, inhaltVerpackung, bild, istBereit) {
    this.id = IDGenerator.Singleton.getInstance().getNextID();
    this.name = name;
    this.inhaltVerpackung = inhaltVerpackung;
    this.bild = bild;
    this.istBereit = istBereit;
    MedikamentenListe.MLDummy.medikamentHinzufuegen(this);
  }

  //Gibt Infos zum Medikament auf der Console aus
  anzeigen() {
    console.log(
      this.name +
        '\tID: ' +
        this.id +
        ',\tInhalt Verpackung: ' +
        this.inhaltVerpackung +
        ',\tBild: ' +
        this.bild +
        ',\tBereit: ' +
        this.istBereit +
        ';'
    );
  }
}
