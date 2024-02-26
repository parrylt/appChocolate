import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Oswald_700Bold,
  });

  const [choco1Visivel, setchoco1Visivel] = useState(false);
  const [choco2Visivel, setchoco2Visivel] = useState(false);
  const [choco3Visivel, setchoco3Visivel] = useState(false);

  const toggleChoco1 = () => {
    setchoco1Visivel((prevState) => !prevState);
  };

  const toggleChoco2 = () => {
    setchoco2Visivel((prevState) => !prevState);
  };

  const toggleChoco3 = () => {
    setchoco3Visivel((prevState) => !prevState);
  };

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
        <Image source={require('./images/choco.png')} style={styles.icone} />
        <Text style={styles.titulo}>Os Chocolates mais Fodas</Text>
        <Image source={require('./images/choco.png')} style={styles.icone} />
      </View>

      <ScrollView>
        {!choco1Visivel && (
          <TouchableOpacity onPress={toggleChoco1}>
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
          </TouchableOpacity>
        )}
        {choco1Visivel && (
          <TouchableOpacity onPress={toggleChoco1}>
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
          </TouchableOpacity>
        )}

        {!choco2Visivel && (
          <TouchableOpacity onPress={toggleChoco2}>
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
          </TouchableOpacity>
        )}
        {choco2Visivel && (
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
        )}

        {!choco3Visivel && (
          <TouchableOpacity onPress={toggleChoco3}>
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
          </TouchableOpacity>
        )}
        {choco3Visivel && (
          <TouchableOpacity onPress={toggleChoco3}>
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
          </TouchableOpacity>
        )}

        {choco1Visivel && (
          <View style={styles.container2}>
            <Text style={styles.comentario}>
              {'\n'}Esse é muito forte{'\n'}
            </Text>

            <TouchableOpacity
              onPress={() => setchoco1Visivel(false)}
              style={styles.containerBotaoFechar}>
              <Text style={styles.textoBotaoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        )}

        {choco2Visivel && (
          <View style={styles.container3}>
            <Text style={styles.comentario}>
              {'\n'}Esse é sacanagem de bom{'\n'}
            </Text>

            <TouchableOpacity
              onPress={() => setchoco2Visivel(false)}
              style={styles.containerBotaoFechar}>
              <Text style={styles.textoBotaoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        )}

        {choco3Visivel && (
          <View style={styles.container4}>
            <Text style={styles.comentario}>
              {'\n'}Esse é gostoso demais, mas é caro{'\n'}
            </Text>

            <TouchableOpacity
              onPress={() => setchoco3Visivel(false)}
              style={styles.containerBotaoFechar}>
              <Text style={styles.textoBotaoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        )}
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
    marginRight: 20,
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
  container2: {
    flex: 1,
    padding: 70,
    width: 280,
    bottom: 1300,
    marginLeft: 30,
    backgroundColor: 'rgba(15, 130, 98, 0.9)',
    position: 'relative',
    zIndex: 3,
  },
  container3: {
    flex: 1,
    padding: 70,
    width: 280,
    bottom: 900,
    marginLeft: 30,
    backgroundColor: 'rgba(15, 130, 98, 0.9)',
    position: 'relative',
    zIndex: 3,
  },
  container4: {
    flex: 1,
    padding: 70,
    width: 280,
    bottom: 400,
    marginLeft: 30,
    backgroundColor: 'rgba(15, 130, 98, 0.9)',
    position: 'relative',
    zIndex: 3,
  },
  containerBotaoFechar: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 200,
    width: 75,
    height: 75,
    zIndex: 2,
  },
  textoBotaoFechar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
