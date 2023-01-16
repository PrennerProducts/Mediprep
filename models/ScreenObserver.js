import { Medikament } from "./Medikament";

export const ScreenObserver = {

    // Medikamentenbefuellung
    aktuellerScreen: '',
    wochentag: 0,                       // ausgewaehlter Tag
    fach : 0,                           // aktuelles Fach
    medikamente: [],                    // alle im ausgewaehlten Tag hinterlegten Medikamente

    //Medikamentenerfassung
    tempMed: new Medikament(''),
    dayly: false,
    days: [], //index 0=Mo, 1=Di, 2=Mi, 3=Do, 4=Fr, 5=Sa, 6=So Werte: 0=false , 1=true

    
}