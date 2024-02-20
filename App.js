import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Oswald_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/fundo.gif')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerTitulo}>
        <Image
          source={require('./images/choco.png')}
          style={styles.icone}
        />
        <Text style={styles.titulo}>Os Chocolates mais Fodas</Text>
        <Image
          source={require('./images/choco.png')}
          style={styles.icone}
        />
      </View>

      <ScrollView>


        <View style={styles.container1}>
        <Text style={styles.nome}>
            {'\n'}Lacta Sonho de Valsa{'\n'}
          </Text>
          <Image
            source={require('./images/lactaSonho.jpg')}
            style={styles.foto}
            resizeMode="contain"
          />
          <Text style={styles.comentario}>
            {'\n'}Foda demais{'\n'}
          </Text>
        </View>

        <View style={styles.container1}>
        <Text style={styles.nome}>
            {'\n'}Kit Kat Chocolate Branco{'\n'}
          </Text>
          <Image
            source={require('./images/kitkat.jpg')}
            style={styles.foto}
            resizeMode="contain"
          />
          <Text style={styles.comentario}>
            {'\n'}Muito foda{'\n'}
          </Text>
        </View>

        <View style={styles.container1}>
        <Text style={styles.nome}>
            {'\n'}Milka Raspberry Creme{'\n'}
          </Text>
          <Image
            source={require('./images/milka.jpg')}
            style={styles.foto}
            resizeMode="contain"
          />
          <Text style={styles.comentario}>
            {'\n'}Foda sem palavras{'\n'}
          </Text>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: 'rgba(150, 87, 32, 0.84)',
    borderRadius: 45,
    elevation: 3,
    zIndex: 5,
  },
  titulo: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 22,
    paddingTop: 10,
    color: 'Black',
    fontFamily: 'Oswald_700Bold',
  },
  icone: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginRight: 20
  },
  container1: {
    flex: 1,
    backgroundColor: 'rgba(150, 87, 32, 0.64)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    width: 340,
  },
  foto: {
    width: 300,
    height: 300,
    marginBottom: -70,
  },
  nome: {
    fontSize: 30,
    fontFamily: 'Oswald_700Bold',
    textAlign: 'center',
    marginBottom: -30,
  },
  comentario: {
    fontSize: 19,
    paddingTop: 10,
    color: 'black',
    fontFamily: 'Oswald_700Bold',
  },
});
