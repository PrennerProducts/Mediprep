import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

let languageSave = 'DE';
let isPlaying = false;

const images = [
  require('../assets/audio1.png'),
  require('../assets/audio2.png')
];

const audioClips = [
  require('../assets/Audio/DE/HomescreenDE.mp3'), 
  require('../assets/Audio/DE/MedikamenteBearbeitenDE.mp3')
];

const audioClipsCH = [
  require('../assets/Audio/CH/HomescreenCH.mp3'), 
  require('../assets/Audio/CH/MedikamenteBearbeitenCH.mp3')
];

function sleep(time){
  return new Promise((resolve)=>setTimeout(resolve,time)
  )
}

export function Audioverwaltung(props) {

    const [language, setLanguage] = useState(languageSave);
    const pressHandlerDE = () => {
      languageSave = 'DE';
      setLanguage('DE');
      };
    const pressHandlerCH = () => {
      languageSave = 'CH';
      setLanguage('CH');
      };

    let playButtonText = 'Audio';
    if (props.playButtonText) playButtonText = props.playButtonText;

    let playButtonStyle = styles.audioButton;
    if (props.playButtonStyle) playButtonStyle = props.playButtonStyle;

    let playButtonTextStyle = styles.audioButton;
    if (props.playButtonTextStyle) playButtonTextStyle = props.playButtonTextStyle;

    let audioClip = null;
    if (language === 'DE') audioClip = audioClips[props.index];
    if (language === 'CH') audioClip = audioClipsCH[props.index];

    const [sound, setSound] = useState();
    const[myImage,setMyImage]= useState(images[0]);
    
    async function playSound() {
      console.log('Loading Sound: ' + props.index);
      const { sound, status } = await Audio.Sound.createAsync(
        audioClip,
        null,
        this._onPlaybackStatusUpdate,
      );

      setSound(sound);  
      console.log('Playing Sound: ' + props.index);
      setMyImage(images[1]);

      if (isPlaying === false){
        await sound.replayAsync();
        isPlaying = true;
        await sleep(status.durationMillis);
        setMyImage(images[0]);
        isPlaying = false;
      }
      else {
        setMyImage(images[0]);
        isPlaying = false;
      }
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound: ' + props.index);
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);
    
    return (
        <View style={styles.container}>
          
          <TouchableOpacity style={styles.languageButtonStyle} onPress={pressHandlerDE}>
            <Image source={require('../assets/DE.png')} style={{width: 40, height: 40}} />
          </TouchableOpacity>
          
          <TouchableOpacity style={playButtonStyle} onPress={playSound}>
            {/*<Text style={playButtonTextStyle}>{playButtonText}</Text>*/}
            <Image source={myImage} style={{width: 40, height: 40}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.languageButtonStyle} onPress={pressHandlerCH}>
            <Image source={require('../assets/CH.png')} style={{width: 40, height: 40}} />
          </TouchableOpacity>

        </View>
      );
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      bottom: 35,
    },
    languageButtonStyle: {
      top: 10,
      height: 80,
      width: 80,
      borderRadius: 90,
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      justifyContent: 'center',
      
      color: 'white',
      fontSize: 30,
    },
    audioButton: {
      //position: 'absolute',
      top: 10,
      height: 80,
      borderColor: 'black',
      borderWidth: 3,
      width: 80,
      borderRadius: 90,
      backgroundColor: '#032E5B',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 30,
      shadowColor: 'black',
      shadowOffset: 10,
      shadowRadius: 5,
    },
  });