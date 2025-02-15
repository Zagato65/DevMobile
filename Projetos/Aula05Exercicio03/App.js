import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar estado
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, StyleSheet } from 'react-native'; // Importa os componentes básicos do React Native

const App = () => {
    const [text, setText] = useState(''); // Estado para armazenar o texto digitado pelo usuário
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]); // Lista de itens para o FlatList

    const sections = [
        {
            title: 'Seção 1',
            data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
        },
        {
            title: 'Seção 2',
            data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }],
        }
    ]; // Estrutura de seções para o SectionList

    const handlePress = () => {
        alert('Botão pressionado!'); // Exibe um alerta ao pressionar o botão
    };

    return (
        <ScrollView style={styles.container}> {/* ScrollView para permitir rolagem */}
            <View style={styles.view}> {/* Container para a imagem e o texto */}
                <Text style={styles.text}>Texto de exemplo</Text>
                <Image
                    source={require('./assets/SenaiImg.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite algo"
                    onChangeText={setText}
                    value={text}
                />
                <Button title="Clique aqui" onPress={handlePress} /> {/* Botão interativo */}
                <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}> {/* Botão customizado */}
                    <Text style={styles.touchableOpacityText}>Toque aqui</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={items}
                renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da lista
                keyExtractor={(item) => item.id.toString()} // Gera chave única para cada item
            />
            <SectionList
                sections={sections}
                renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da seção
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )} // Exibe cabeçalho de cada seção
                keyExtractor={(item) => item.id.toString()} // Gera chave única para cada item
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({ // Definição dos estilos para os componentes
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
        marginBottom: 20,
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
