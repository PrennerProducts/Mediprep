import { Speicherverwaltung } from "../data/Speicherverwaltung"


//Hier kann man die Speicherverwaltung testen... 

export const SpeichervTests = {
    test: async function(){
        //await Speicherverwaltung.createFile('test.txt', 'Hello World');
        await Speicherverwaltung.clearFile('test.txt');
        await Speicherverwaltung.writeFile('test.txt', 'Das ist ein Test 1.');
        await Speicherverwaltung.showFile('test.txt');
        await Speicherverwaltung.writeFile('test.txt', 'Das ist ein Test 2.');
        await Speicherverwaltung.showFile('test.txt');
        await Speicherverwaltung.clearFile('test.txt');
        await Speicherverwaltung.showFile('test.txt');
        await Speicherverwaltung.writeFile('test.txt', 'Das ist ein Test 3.');
        await Speicherverwaltung.showFile('test.txt');
    }
}