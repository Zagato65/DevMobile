import React, { useState } from 'react';
import { 
  View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet 
} from 'react-native';

// Componente principal do aplicativo
const App = () => {
  // Estado para armazenar o nome digitado pelo usuário
  const [nome, setNome] = useState('');
  // Estado para armazenar a mensagem exibida ao usuário
  const [mensagem, setMensagem] = useState('');

  // Função para lidar com o clique no botão
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Exibição do logotipo */}
      <Image source={require('./assets/SenaiImg.png')} style={styles.logo} />
      
      {/* Título do aplicativo */}
      <Text style={styles.titulo}>Exemplo de App Interativo</Text>
      
      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />
      
      {/* Botão para enviar o nome */}
      <Button title="Enviar" onPress={lidarComClique} />
      
      {/* Botão customizado usando TouchableOpacity */}
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>
      
      {/* Exibição da mensagem */}
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
