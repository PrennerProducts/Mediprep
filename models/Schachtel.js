import { Fach } from './Fach';

export class Schachtel {
  constructor(name, anzahlFaecher) {
    this.name = name;

    //Erstellungsdatum wird erfasst und notiert.
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
    this.erstellungsDatum = today;

    //Erklaerung: Auswahlmoeglichkeiten von Faecheranzahl:  4,7,14,28
    //  4 -> Schachtel fuer einen Tag
    //  7 -> Schachtel fuer eine Woche (nur ein Fach pro Tag)
    //  14 -> Schachtel fuer eine Woche (2 Faecher pro Tag = Morgen, Abend)
    //  28 -> Schachtel fuer eine Woche (4 Faecher pro Tag = Morgen, Mittag, Abend, Nacht)
    //  Je nach Auswahl werden die Faecher automatisch korrekt benannt. Der Index der Faecher beginnt bei 0.
    this.faecher = [];
    if (anzahlFaecher === 4) {
      this.faecher.push(new Fach('', 'Morgen'));
      this.faecher.push(new Fach('', 'Mittag'));
      this.faecher.push(new Fach('', 'Abend'));
      this.faecher.push(new Fach('', 'Nacht'));
    } else if (anzahlFaecher === 7) {
      this.faecher.push(new Fach('Montag', ''));
      this.faecher.push(new Fach('Dienstag', ''));
      this.faecher.push(new Fach('Mittwoch', ''));
      this.faecher.push(new Fach('Donnerstag', ''));
      this.faecher.push(new Fach('Freitag', ''));
      this.faecher.push(new Fach('Samstag', ''));
      this.faecher.push(new Fach('Sonntag', ''));
    } else if (anzahlFaecher === 14) {
      this.faecher.push(new Fach('Montag', 'Morgen'));
      this.faecher.push(new Fach('Montag', 'Abend'));
      this.faecher.push(new Fach('Dienstag', 'Morgen'));
      this.faecher.push(new Fach('Dienstag', 'Abend'));
      this.faecher.push(new Fach('Mittwoch', 'Morgen'));
      this.faecher.push(new Fach('Mittwoch', 'Abend'));
      this.faecher.push(new Fach('Donnerstag', 'Morgen'));
      this.faecher.push(new Fach('Donnerstag', 'Abend'));
      this.faecher.push(new Fach('Freitag', 'Morgen'));
      this.faecher.push(new Fach('Freitag', 'Abend'));
      this.faecher.push(new Fach('Samstag', 'Morgen'));
      this.faecher.push(new Fach('Samstag', 'Abend'));
      this.faecher.push(new Fach('Sonntag', 'Morgen'));
      this.faecher.push(new Fach('Sonntag', 'Abend'));
    } else if (anzahlFaecher === 28) {
      for (let i = 0; i < anzahlFaecher; i++) {
        let tag = '';
        let zeit = '';
        if (i < 4) tag = 'Montag';
        else if (i < 8) tag = 'Dienstag';
        else if (i < 12) tag = 'Mittwoch';
        else if (i < 16) tag = 'Donnerstag';
        else if (i < 20) tag = 'Freitag';
        else if (i < 24) tag = 'Samstag';
        else tag = 'Sonntag';
        let rest = i % 4;
        if (rest === 0) zeit = 'Morgen';
        else if (rest === 1) zeit = 'Mittag';
        else if (rest === 2) zeit = 'Abend';
        else zeit = 'Nacht';
        this.faecher.push(new Fach(tag, zeit));
      }
    }
  }

  //diese Funktion zeigt die komplette Schachtel auf der Console an, geordnet nach Faechern.
  anzeigen() {
    let index = 0;
    console.log('\n' + this.name + ': Erstellt am ' + this.erstellungsDatum);
    for (const f of this.faecher) {
      console.log('\nFach ' + index);
      index++;
      f.anzeigen();
    }
  }

  //diese Funktion zeigt ein einzelnes Fach in der Console an. Der Index des Faches wird als Parameter uebergeben.
  anzeigenFach(fachIndex) {
    if (fachIndex >= 0 && fachIndex < this.faecher.length)
      this.faecher[fachIndex].anzeigen();
  }

  //diese Funktion zeigt ein einzelnes Fach und einen einzelnen Eintrag an.
  anzeigenFachMedikament(fachIndex, eintragIndex) {
    console.log(
      'Inhalt wird angezeigt von Fach ' +
        fachIndex +
        ', Eintrag Nummer ' +
        eintragIndex
    );
    if (fachIndex >= 0 && fachIndex < this.faecher.length)
      this.faecher[fachIndex].anzeigenEintrag(eintragIndex);
  }

  //diese Funktion legt einen neuen Eintrag im angegebenen Fach an.
  befuellen(fachIndex, medikamentId, anzahl) {
    if (fachIndex >= 0 && fachIndex < this.faecher.length)
      this.faecher[fachIndex].eintragHinzufuegen(medikamentId, anzahl);
  }

  //diese Funktion befuellt mehrere Faecher, moegliche Modi: 1 = taeglich, 2 = alle 2 Tage...
  befuellenZyklisch(modus, startIndex, medikamentId, anzahl) {
    if (this.faecher.length === 4) {
      console.log(
        'Schachtel mit 4 Faechern kann nicht zyklisch befuellt werden.'
      );
      return;
    } else if (this.faecher.length === 14) modus = 2 * modus;
    else if (this.faecher.length === 28) modus = 4 * modus;
    let zaehler = startIndex;
    while (zaehler >= 0 && zaehler < this.faecher.length) {
      this.faecher[zaehler].eintragHinzufuegen(medikamentId, anzahl);
      zaehler += modus;
    }
  }

  //leert nur ein ausgewaehltes Fach
  leerenFach(fachIndex) {
    if (fachIndex >= 0 && fachIndex < this.faecher.length)
      this.faecher[fachIndex].leeren();
  }

  //leert alle Faecher
  leeren() {
    for (const f of this.faecher) {
      f.leeren();
    }
  }


  //diese Funktion gibt innerhalb eines Bereichs von Faechern alle MedikamentenIds zurueck
  zeigeMedikamentenIdsinBereich(startIndex, endIndex){
    let medikamente = [];
    for (let i = startIndex; i <= endIndex; i++){
      for (const e of this.faecher[i].eintraege){
        if (!medikamente.includes(e.medikamentId)) medikamente.push(e.medikamentId);
      }
    }
    return medikamente;
  }

  // **********  **********  **********  *********  **********
  // Medikamentevorbereiten / Einschachteln Funktionen
  // ----------  ----------  ----------  ----------  ----------

  // Diese Funktion zeigt an in welchen Fächern ein bestimmtes Medikament (ID) liegt, um die Farbliche
  // Visualisierung des Fachs umzusetzen.
  zeigeFaecher(medikamentId, startIndex, endIndex) {
    let index = 0;
    //console.log('MyTest');
    let indexesFach = [];

    for (let i = startIndex; i <= endIndex; i++) {
      for (const e of this.faecher[i].eintraege) {
        if (e.medikamentId === medikamentId) {
          indexesFach.push(index);
        }
      }
      index++;
    }
    //console.log(indexesFach);
    return indexesFach;
  }

  //diese Funktion zeigt wieviel Stück eines bestimmten Medi in welchem Fach sind.
  zeigeStueckProFaecher(medikamentId, startIndex, endIndex) {
    let index = 0;
    let stueckProFachDict = {};

    for (let i = startIndex; i <= endIndex; i++){
      for (const e of this.faecher[i].eintraege) {
        if (e.medikamentId === medikamentId) {
          stueckProFachDict[index] = e.anzahl;
        }
      }
      index++;
    }
    //console.log(+stueckProFachDict);
    return stueckProFachDict;
  }


  //zähle Tabletten pro Fach, Funktion gibt FachId, Ganze, Halbe, Viertel zurück
  sumTabFach( startIndex, endIndex) {
    let stueckProFachGroeße = {};
    let dictganze = [];
    let dicthalbe = [];
    let dictviertel = [];
    let FachId = 0;
    let ganze = 0;
    let halbe = 0;
    let viertel = 0;

    for (let i = startIndex; i <= endIndex; i++){
      ganze = 0;
      halbe = 0;
      viertel = 0;
      for (const e of this.faecher[i].eintraege) {
        //Anzahl Tabletten wird auf ganze Zahl gebracht, aber immer abgerundet
        const zahlint = Math.floor(e.anzahl);
        // Die abgerundete Zahle wird in "ganze" gespeichert
        ganze += zahlint;
        //Überprüft, ob es sich um eine halbe Tablette handelt, wenn ja dann wird die in "halbe" gespeichert
        if ((e.anzahl - zahlint) === 0.5) {
          halbe += 1;
        }
        //Überprüft, ob es sich um eine viertele Tablette handelt, wenn ja dann wird die in "viertel" gespeichert
        if ((e.anzahl - zahlint) === 0.25) {
          viertel += 1;
        }
      }
      dictganze =[ganze];
      dicthalbe =[halbe];
      dictviertel =[viertel];
      stueckProFachGroeße[FachId] = [dictganze, dicthalbe, dictviertel];
      FachId += 1;

    }
    return stueckProFachGroeße;
  }


}
