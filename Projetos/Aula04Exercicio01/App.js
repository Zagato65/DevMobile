import React, { useState } from 'react'; // Importa React e o hook useState
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'; // Componentes do React Native

const App = () => { // Define o componente funcional App
  const [nome, setNome] = useState(''); // Estado para armazenar o nome
  const [mensagem, setMensagem] = useState(''); // Estado para mensagem de resposta

  const lidarComClique = () => { // Função chamada ao pressionar o botão
    if (nome) { // Verifica se o nome foi preenchido
      setMensagem(`Olá, ${nome}!`); // Mensagem personalizada
    } else {
      setMensagem('Por favor, digite seu nome.'); // Mensagem de erro
    }
  };

  return ( // Retorna a interface do componente
    <View style={styles.container}> {/* Container principal */}
      <Image // Componente para exibir imagem
        source={require('./SenaiImg.png')} // Caminho da imagem 
        style={styles.logo}
      />
      <Text style={styles.titulo}>Exemplo Interativo</Text> {/* Título */}
      <TextInput // Campo de entrada de texto
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome} // Atualiza estado 'nome' a cada digitação
        value={nome} // Valor vinculado ao estado
      />
      <Button title="Enviar" onPress={lidarComClique} /> {/* Botão de ação */}
      {mensagem && <Text style={styles.mensagem}>{mensagem}</Text>} {/* Mensagem condicional */}
    </View>
  );
};

const styles = StyleSheet.create({ // Define os estilos do componente
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
    padding: 20, // Espaçamento interno de 20 unidades em todos os lados
  },
  logo: {
    width: 300, // Largura fixa
    height: 150, // Altura fixa
    marginBottom: 20, // Espaço abaixo da imagem
  },
  titulo: {
    fontSize: 24, // Tamanho grande de fonte
    fontWeight: 'bold', // Texto em negrito
    marginBottom: 20, // Espaço abaixo do título
  },
  input: {
    width: '100%', // Ocupa 100% da largura do container
    height: 40, // Altura fixa
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 20, // Espaço abaixo do campo
    paddingHorizontal: 10, // Espaçamento interno horizontal
  },
  mensagem: {
    marginTop: 20, // Espaço acima do texto
    fontSize: 16, // Tamanho médio de fonte
  },
});

export default App;