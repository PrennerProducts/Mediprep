import { View, Text } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.Logobox}>
      <View style={styles.LogoFont}>
        <Text>Zurück</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Logobox: {
    height: 200,
    width: '50%',
    borderWidth: 5,
    borderColor: 'limegreen',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
    elevation: 8,
  },
  LogoFont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Logo;
