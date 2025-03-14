import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class OlaPerfilClasse extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Componente de Classe</Text>
        <Text>Nome: {this.props.nome}</Text>
        <Text>Endereço: {this.props.endereco}</Text>
        <Text>Telefone: {this.props.telefone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default OlaPerfilClasse;