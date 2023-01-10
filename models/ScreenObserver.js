import { Medikament } from "./Medikament";

export const ScreenObserver = {

    // Medikamentenbefuellung
    aktuellerScreen: '',
    wochentag: 0,                       // ausgewaehlter Tag
    fach : 0,                           // aktuelles Fach
    medikamente: [],                    // alle im ausgewaehlten Tag hinterlegten Medikamente

    //Medikamentenerfassung
    tempMedName : '',       // Name des temporaeren Medikaments
    tempMedBefuellung: [],  // Befuellung des temporaeren Medikaments. Index = Fachindex, Wert = Tablettenanzahl
    tempMed: new Medikament('')
}