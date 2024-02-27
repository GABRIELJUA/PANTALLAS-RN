import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const Acercade = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>
      <View style={styles.cafe}>
        <View style={styles.conte}>
          <View style={styles.contentContainer}>
            <View style={styles.codigo}>
              <View style={styles.qrContainer}>
                <Image source={require('../assets/qr.jpg')} style={styles.qrCode} />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Data Athletics</Text>
              <Text style={styles.textSubtitle}>Nosotros</Text>
            </View>
          </View>
          <View style={styles.middleContainer}>
            <Text>En Data Athletics ofrecemos comodidad, estilo y seguridad a los deportistas a través de 
                nuestras prendas unisex dotadas con la tecnología innovadora de los códigos QR, permitiendo
                 a los deportistas almacenar y acceder a datos de salud importantes en tiempo real, así como lucir con estilo.</Text>
            <Image source={require('../assets/ejer.jpg')} style={styles.ejer} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/cora.png')} style={styles.iconcora} />
            <Image source={require('../assets/mensa.jpg')} style={styles.iconme} />
            <Image source={require('../assets/tele.png')} style={styles.iconte} />
            <Image source={require('../assets/fle.png')} style={styles.iconfle} />
          </View>
        </View>
      </View>
      
      {/* Repetir el contenido */}
      <Text style={styles.subtitle}>¿Quiénes somos?</Text>
      <View style={styles.cafe}>
        <View style={styles.conte}>
          <View style={styles.contentContainer}>
            <View style={styles.codigo}>
              <View style={styles.qrContainer}>
                <Image source={require('../assets/qr.jpg')} style={styles.qrCode} />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Data Athletics</Text>
              <Text style={styles.textSubtitle}>Mision</Text>
            </View>
          </View>
          <View style={styles.middleContainer}>
            <Text>Simplificar el acceso a datos de salud importantes del deportista (siendo una herramienta de ayuda en caso de emergencia)
                 ofreciendo una amplia variedad y calidad de prendas
deportivas tanto como hombre y de mujer</Text>
            <Image source={require('../assets/bici.png')} style={styles.ejer} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/cora.png')} style={styles.iconcora} />
            <Image source={require('../assets/mensa.jpg')} style={styles.iconme} />
            <Image source={require('../assets/tele.png')} style={styles.iconte} />
            <Image source={require('../assets/fle.png')} style={styles.iconfle} />
          </View>
        </View>
      </View>

      {/* Repetir el contenido */}
      <Text style={styles.subtitle}>Nuestra Mision</Text>
      <View style={styles.cafe}>
        <View style={styles.conte}>
          <View style={styles.contentContainer}>
            <View style={styles.codigo}>
              <View style={styles.qrContainer}>
                <Image source={require('../assets/qr.jpg')} style={styles.qrCode} />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Data Athletics</Text>
              <Text style={styles.textSubtitle}>Vision</Text>
            </View>
          </View>
          <View style={styles.middleContainer}>
            <Text>Distribuir prendas de alta calidad a nivel nacional, siendo una empresa
                 reconocida por un alto nivel de innovación en el diseño de playeras con código QR, 
                 asi coma revolucionar de forma única y personalizada la forma en que los deportistas interactuan con la vestimenta.</Text>
            <Image source={require('../assets/corre.png')} style={styles.ejer} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/cora.png')} style={styles.iconcora} />
            <Image source={require('../assets/mensa.jpg')} style={styles.iconme} />
            <Image source={require('../assets/tele.png')} style={styles.iconte} />
            <Image source={require('../assets/fle.png')} style={styles.iconfle} />
          </View>
        </View>

      </View>
      <Text style={styles.subtitle}>Nuestra Vision</Text>
      <Text style={styles.dos}></Text>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  conte: {
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
  },
  cafe: {
    marginTop:40,
    padding: 20,
    backgroundColor: '#a18262',
    borderWidth: 1,
    borderRadius: 15,
  },
  ejer: {
    marginTop: 20,
    width: 150,
    height: 150,
    alignItems:'center',
  },
  codigo: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  qrContainer: {},
  qrCode: {
    width: 20,
    height: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textTitle: {
    fontWeight: 'bold',
    marginLeft:10,
  },
  textSubtitle: {
    color: '#888',
    textAlign:'center',
    marginLeft:10,
  },
  dos: {
marginTop:100,
  },
  middleContainer: {
    marginBottom: 20,
    borderTopWidth: 3,
    borderTopColor: 'grey',
    alignItems:'center',
  },
  iconContainer: {
    flexDirection: 'row',
    borderTopWidth: 3,
    borderTopColor: 'grey',
  },
  iconcora: {
    width: 40,
    height: 40,
  },
  iconme: {
    marginTop:6,
    width: 30,
    height: 30,
  },
  iconte: {
    width: 40,
    height: 40,
  },
  iconfle: {
    width: 40,
    height: 40,
    marginLeft: 120,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign:'center',
  },
});

export default Acercade;
