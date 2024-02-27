import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import productImage from '../assets/pro5.jpg'; // Importa la imagen

export default function Detalles() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeText}></Text>
      </TouchableOpacity>
      <Text style={styles.headerText}></Text>
    </View>
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.productImage}
          source={productImage} // Usa la imagen importada
        />
        <TouchableOpacity style={styles.closeButtonContainer}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.productPrice}>Nombre: tropimango</Text>
        <Text style={styles.productPrice}>Precio: $100</Text>
        <Text style={styles.productDescription}>Descripción: Disfruta del dulce y jugoso mango</Text>
      </View>
    </View>
    <View style={styles.buyButtonContainer}>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.navigationContainer}>
      <TouchableOpacity style={styles.circularButtonLeft}>
        <Text style={styles.buttonText}>{"<"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.circularButtonUp}>
        <Text style={styles.buttonText}>{"^"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.circularButtonRight}>
        <Text style={styles.buttonText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
},
header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'yellow',
  width: '200%',
},
closeButton: {
  position: 'absolute',
  left: 10,
},
closeText: {
  fontSize: 20,
},
headerText: {
  fontSize: 20,
  fontWeight: 'bold',
  marginVertical:30,
},
productContainer: {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 10,
  overflow: 'hidden',
  marginTop:50,
},
imageContainer: {
  position: 'relative',
  width: '100%',
  padding: 50,
},
productImage: {
  width: 200,
  height: 200,
},
closeButtonContainer: {
  position: 'absolute',
  top: 10,
  right: 10,
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: 'white',
  borderWidth:1,
  alignItems: 'center',
  justifyContent: 'center',
},
closeButtonText: {
  color: 'black',
  fontSize: 16,
},
detailsContainer: {
  padding: 10,
},
productName: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5,
},
productPrice: {
  fontSize: 16,
  marginBottom: 5,
},
productDescription: {
  fontSize: 14,
  marginBottom: 10,
},
buyButtonContainer: {
  width: '200%',
  alignItems: 'center',
},
buyButton: {
  backgroundColor: 'orange',
  width: '200%',
  paddingVertical: 10,
  borderRadius: 5,
  alignItems: 'center',
  padding:125,
},
buyButtonText: {
  color: 'white',
  fontSize: 16,
},
navigationContainer: {
  borderColor:'black',
  borderWidth:1,
  borderRadius:25,
  padding:10,
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 10,
  marginTop:100,
},
circularButtonLeft: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: 'grey',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
},
circularButtonUp: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: 'grey',
  alignItems: 'center',
  justifyContent: 'center',
},
circularButtonRight: {

  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: 'grey',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
},
buttonText: {
  fontSize: 24,
  color: 'white',
},
});
