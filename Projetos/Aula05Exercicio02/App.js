import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar estado
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native'; // Importa os componentes básicos do React Native

const App = () => {
    const [text, setText] = useState(''); // Estado para armazenar o texto digitado pelo usuário
    const [items, setItems] = useState([
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
    ]);

    const handlePress = () => {
        alert('Botão pressionado!'); // Exibe um alerta ao pressionar o botão
    };

    const addItem = () => {
        if (text) {
            setItems([...items, { id: Date.now().toString(), name: text }]); // Adiciona novo item à lista
            setText(''); // Limpa o campo de texto após adicionar
        }
    };

    return (
        <ScrollView style={styles.container}> {/* ScrollView para permitir rolagem */}
            <View style={styles.header}> {/* Cabeçalho com imagem e título */}
                <Image
                    source={require('./SenaiImg.png')}
                    style={styles.image}
                />
                <Text style={styles.title}>Exemplo de App React Native</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Digite algo"
                value={text}
                onChangeText={setText}
            />
            <Button title="Adicionar Item" onPress={addItem} /> {/* Botão para adicionar item à lista */}
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.item}> {/* Renderiza cada item da lista */}
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}> {/* Botão customizado */}
                <Text style={styles.buttonText}>Pressione-me</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({ // Definição dos estilos para os componentes
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    item: {
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default App;
