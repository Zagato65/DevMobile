import React from "react";
import { Text, View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js

// Componente principal App
export default function App() {
  return (
    // View principal que serve como container, aplicando os estilos definidos em styles.container
    <View style={styles.container}>
      
      {/* Primeira caixa */}
      <View style={styles.box}>
        <Text style={styles.boxText}>#1</Text>
      </View>

      {/* Segunda caixa */}
      <View style={styles.box}>
        <Text style={styles.boxText}>#2</Text>
      </View>

      {/* Terceira caixa */}
      <View style={styles.box}>
        <Text style={styles.boxText}>#3</Text>
      </View>

    </View>
  );
}
