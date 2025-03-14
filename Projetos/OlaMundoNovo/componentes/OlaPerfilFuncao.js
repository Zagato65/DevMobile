import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OlaPerfilFuncao = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componente Funcional</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Endereço: {props.endereco}</Text>
      <Text>Telefone: {props.telefone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default OlaPerfilFuncao;