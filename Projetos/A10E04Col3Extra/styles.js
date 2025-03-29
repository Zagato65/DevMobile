import { Platform, StyleSheet, StatusBar } from "react-native";

// Cria um objeto StyleSheet para definir os estilos
export default StyleSheet.create({
  // Estilos para o container principal
  container: {
    flex: 1, // Preenche todo o espaço disponível
    flexDirection: "column", // Organiza os elementos em coluna
    backgroundColor: "ghostwhite", // Define a cor de fundo
    alignItems: "center", // Centraliza os elementos horizontalmente
    justifyContent: "space-around", // Distribui o espaço igualmente entre os elementos

    // Aplica um padding top diferente dependendo da plataforma
    ...Platform.select({
      ios: { paddingTop: 20 }, // Padding top para iOS
      android: { paddingTop: StatusBar.currentHeight }, // Padding top para Android, considerando a altura da barra de status
    }),
  },

  // Estilos para as caixas
  box: {
    width: 250, // Largura da caixa ajustada
    height: 120, // Altura da caixa ajustada
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    backgroundColor: "lightgray", // Cor de fundo da caixa
    borderWidth: 2, // Largura da borda ajustada
    borderStyle: "dashed", // Estilo da borda (tracejada)
    borderColor: "darkslategray", // Cor da borda
    borderRadius: 10, // Bordas arredondadas
    margin: 10, // Espaçamento entre as caixas
  },

  // Estilos para o texto dentro das caixas
  boxText: {
    color: "darkslategray", // Cor do texto
    fontWeight: "bold", // Peso da fonte (negrito)
    fontSize: 18, // Tamanho da fonte ajustado
  },
});
