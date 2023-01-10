import * as FileSystem from 'expo-file-system';

export const Speicherverwaltung = {

    //Diese Funktion erstellt eine neue Datei mit einem Inhalt
    createFile : async (filename, content) => {
        let path = FileSystem.documentDirectory + filename;
        await FileSystem.writeAsStringAsync(path, content, { encoding: FileSystem.EncodingType.UTF8 });
    }, 

    //Diese Funktion fuegt in einer Datei einen neuen Inhalt am Ende hinzu
    writeFile : async (filename, content) => {
        let path = FileSystem.documentDirectory + filename;
        content = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 }) + content;
        await FileSystem.writeAsStringAsync(path, content, { encoding: FileSystem.EncodingType.UTF8 });
    }, 

    //Diese Funktion gibt den Inhalt einer Datei zurueck     
    loadFile : async (filename) => {
        let path = FileSystem.documentDirectory + filename;
        let file = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
        return file;
    },

    //Diese Funktion loescht den Inhalt einer Datei
    clearFile : async (filename) => {
        let path = FileSystem.documentDirectory + filename;
        await FileSystem.writeAsStringAsync(path, '', { encoding: FileSystem.EncodingType.UTF8 });
    },

    //Diese Funktion loescht die Datei vom Speicher
    deleteFile : async (filename) => {
        let path = FileSystem.documentDirectory + filename;
        await FileSystem.deleteAsync(path);
    },

    //Diese Funktion prueft ob eine Datei existiert und gibt true/false zurueck
    checkFile : async (filename) => {
        let path = FileSystem.documentDirectory + filename;
        let fileCheck = await FileSystem.getInfoAsync(path);
        return fileCheck.exists;
    },

    //Diese Funktion gibt zur Kontrolle den Inhalt einer Datei auf der Konsole aus   
    showFile : async (filename) => {
        let path = FileSystem.documentDirectory + filename;
        let content = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
        console.log(content);
    }
};


