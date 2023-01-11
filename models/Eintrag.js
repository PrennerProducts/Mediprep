export class Eintrag {
  constructor(medikamentId, anzahl) {
    this.medikamentId = medikamentId;
    this.anzahl = anzahl;
  }

  //Anzahl wird aktualisiert.
  anzahlAendern(anzahl) {
    this.anzahl = anzahl;
  }

  leeren() {
    this.medikamentId = null;
    this.anzahl = null;
  }
}
