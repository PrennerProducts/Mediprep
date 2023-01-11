import { Eintrag } from './Eintrag';

export class Fach {
  constructor(tag, zeit) {
    this.tag = tag;
    this.zeit = zeit;
    this.eintraege = [];
  }

  //Gibt Infos zum Fach auf der Console aus. Alle Eintraege werden angezeigt.
  anzeigen() {
    console.log(this.tag + '' + this.zeit + '. Inhalt (' + this.eintraege.length + ' Eintraege):');
    for (const e of this.eintraege) {console.log(e);}
  }

  //Eintrag wird hinzugefeugt. Wenn bereits ein Eintrag mit dem gleichen Medikament existiert, wird die Anzahl im Eintrag ueberschrieben
  eintragHinzufuegen(medikamentId, anzahl) {
    for (const e of this.eintraege) {
      if (e.medikamentId === medikamentId) {
        e.anzahlAendern(anzahl);
        return;
      }
    }
    this.eintraege.push(new Eintrag(medikamentId, anzahl));
  }

  //Alle Eintraege im Fach werden geloescht
  leeren() {
    for (const e of this.eintraege) {
      e.leeren();
    }
    this.eintraege = [];
  }
}
