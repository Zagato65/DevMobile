import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar estado
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'; // Importa os componentes básicos do React Native

const App = () => {
    const [nome, setNome] = useState(''); // Estado para armazenar o nome digitado pelo usuário
    const [mensagem, setMensagem] = useState(''); // Estado para armazenar a mensagem exibida

    const lidarComClique = () => { // Função chamada ao clicar no botão
        if (nome) {
            setMensagem(`Olá, ${nome}!`); // Atualiza a mensagem com um cumprimento personalizado
        }
    };

    return (
        <ScrollView style={styles.container}> {/* ScrollView permite rolagem da tela caso necessário */}
            <View style={styles.view}> {/* Container para a imagem e o texto explicativo */}
                <Image 
                    source={require('./SenaiImg.png')} // Caminho da imagem 
                    style={styles.image} 
                />
                <Text style={styles.text}> {/* Texto explicativo sobre o app */}
                    Exemplo de elementos gráficos interativos em React Native
                </Text>
            </View>
            <View style={styles.inputContainer}> {/* Container para o campo de entrada e botão */}
                <TextInput
                    style={styles.input} // Estilização do campo de entrada
                    placeholder="Digite seu nome" // Texto de ajuda no campo de entrada
                    onChangeText={setNome} // Atualiza o estado 'nome' ao digitar
                    value={nome} // Valor do campo de entrada
                />
                <Button title="Enviar" onPress={lidarComClique} /> {/* Botão para enviar o nome digitado */}
            </View>
            {mensagem ? ( // Exibe a mensagem apenas se houver uma mensagem definida
                <View style={styles.messageContainer}> {/* Container para a mensagem */}
                    <Text style={styles.message}>{mensagem}</Text> {/* Exibe a mensagem formatada */}
                </View>
            ) : null}
            <TouchableOpacity style={styles.button} onPress={() => {}}> {/* Botão customizado */}
                <Text style={styles.buttonText}>Botão customizado</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({ // Definição dos estilos para os componentes
    container: { // Estilização do ScrollView
        flex: 1, // Ocupa toda a altura da tela
        padding: 20, // Adiciona um espaçamento interno
    },
    view: { // Estilização do container principal
        alignItems: 'center', // Centraliza os itens horizontalmente
        marginBottom: 20, // Adiciona um espaçamento abaixo
    },
    image: { // Estilização da imagem
        width: 300, // Define a largura da imagem
        height: 100, // Define a altura da imagem
        marginBottom: 10, // Adiciona espaçamento abaixo da imagem
    },
    text: { // Estilização do texto descritivo
        fontSize: 20, // Define o tamanho da fonte
        fontWeight: 'bold', // Define o peso da fonte como negrito
    },
    inputContainer: { // Estilização do container do input
        marginBottom: 20, // Adiciona um espaçamento abaixo
    },
    input: { // Estilização do campo de entrada de texto
        height: 40, // Define a altura do input
        borderColor: 'gray', // Define a cor da borda
        borderWidth: 1, // Define a largura da borda
        marginBottom: 10, // Adiciona espaçamento abaixo
        paddingHorizontal: 10, // Adiciona espaçamento interno lateral
    },
    messageContainer: { // Estilização do container da mensagem
        marginBottom: 20, // Adiciona espaçamento abaixo
    },
    message: { // Estilização do texto da mensagem
        fontSize: 16, // Define o tamanho da fonte
    },
    button: { // Estilização do botão customizado
        backgroundColor: 'blue', // Define a cor de fundo do botão
        padding: 10, // Adiciona espaçamento interno
        borderRadius: 5, // Arredonda as bordas do botão
        alignItems: 'center', // Centraliza o texto dentro do botão
    },
    buttonText: { // Estilização do texto do botão
        color: 'white', // Define a cor do texto
        fontSize: 16, // Define o tamanho da fonte
        fontWeight: 'bold', // Define a fonte como negrito
    },
});

export default App;
