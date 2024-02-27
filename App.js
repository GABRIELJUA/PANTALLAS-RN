import React from 'react';
import { StyleSheet, View } from 'react-native';
import Inicio from './componentes/Inicio'; // Importa el componente Inicio
import Acercade from './componentes/Acercade';
import Detalles from './componentes/Detalles';

export default function App() {
  return (
    <View style={styles.container}>
      <Detalles/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
