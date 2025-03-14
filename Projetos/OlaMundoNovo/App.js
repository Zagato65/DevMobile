import React from 'react';
import { View, StyleSheet } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

const App = () => {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao
        nome="Kawã Gabriel"
        endereco="avenida São Carlos, 123"
        telefone="(16) 99999-9999"
      />
      
      <OlaPerfilClasse
        nome="Pedro Leme"
        endereco="Getulio Vargas, 1000"
        telefone="(16) 98888-8888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;