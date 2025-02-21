import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// Componente principal do aplicativo
const App = () => {
  // Estado para armazenar o texto digitado no TextInput
  const [text, setText] = useState('');
  // Estado para controlar a exibição do indicador de carregamento
  const [isLoading, setIsLoading] = useState(false);

  // Função chamada quando os botões são pressionados
  const handlePress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa após 2 segundos
      alert('Botão pressionado!'); // Exibe um alerta
    }, 2000);
  };

  // Dados para a FlatList (lista simples)
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList (lista agrupada por seções)
  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* Texto de saudação */}
        <Text style={styles.text}>Olá, mundo!</Text>

        {/* Exibição de imagem do React Native */}
        <Image source={require('./assets/SenaiImg.png')} style={styles.image} />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />

        {/* Botão simples com função handlePress */}
        <Button title="Clique aqui" onPress={handlePress} />

        {/* Botão customizado usando TouchableOpacity */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento */}
        <ActivityIndicator animating={isLoading} />
      </View>

      {/* Lista simples de itens usando FlatList */}
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Lista agrupada por seções usando SectionList */}
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  touchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
