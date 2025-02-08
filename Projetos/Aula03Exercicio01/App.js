import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu App Expo</Text>
      </View>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={text}
        onChangeText={setText}
      />

      <Text style={styles.textoutput}>Você digitou: {text}</Text>

      <Button title="Pressione-me" onPress={() => alert('Botão pressionado!')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  textoutput: {
    fontSize: 16,
    marginBottom: 20,
  },
});