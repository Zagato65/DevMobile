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
  //Slider,
  Switch,
  ImageBackground,
  StyleSheet
} from 'react-native';

const App = () => {
  // Estados do componente
  const [text, setText] = useState(''); // Armazena o texto digitado no TextInput
  const [isLoading, setIsLoading] = useState(false); // Controla a exibição do ActivityIndicator
  const [sliderValue, setSliderValue] = useState(0); // Controla o valor do Slider
  const [switchValue, setSwitchValue] = useState(false); // Controla o estado do Switch

  // Dados para o FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para o SectionList
  const sections = [
    { title: 'Seção 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
    { title: 'Seção 2', data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }] }
  ];

  // Função para lidar com o clique do botão
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Botão pressionado!');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho com imagem de fundo */}
      <ImageBackground source={{ uri: 'https://via.placeholder.com/300' }} style={styles.imageBackground}>
        <Text style={styles.title}>Exemplo de Código React Native</Text>
      </ImageBackground>

      <View style={styles.content}>
        {/* Exibição de imagem */}
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        
        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />

        {/* Botão */}
        <Button title="Clique aqui" onPress={handlePress} />

        {/* Botão TouchableOpacity */}
        <TouchableOpacity style={styles.button} onPress={() => alert('TouchableOpacity pressionado!')}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento */}
        <ActivityIndicator animating={isLoading} size="large" color="#0000ff" />

        {/* Controle deslizante (Slider) */}
        {/* <Slider
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        /> */}
        {/* <Text>Valor do Slider: {sliderValue.toFixed(0)}</Text> */}

        {/* Interruptor (Switch) */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

        {/* Lista de itens simples */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        {/* Lista seccionada */}
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
        />
      </View>
    </ScrollView>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
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
