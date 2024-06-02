// screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Aquí puedes redirigir a otra pantalla después de la carga
      // Por ejemplo: navigation.navigate('Home');
    }, 3000); // Simula un tiempo de carga de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default LoadingScreen;
