import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// Componentes básicos do React Native:
// - View: container para outros componentes (como div no HTML)
// - Text: exibe textos
// - Image: exibe imagens
// - ScrollView: permite rolagem do conteúdo
// - StyleSheet: para estilização

const HomeScreen = () => {
  // Componente da tela inicial
  return (
    <ScrollView style={styles.container}>

      <Image
        source={require('../assets/images/banner.png')}
        style={styles.banner}
        resizeMode="cover"
      />
      {/* Imagem de banner com ajuste para cobrir o espaço */}

      <View style={styles.content}>
        {/* Container para o conteúdo textual */}
        <Text style={styles.title}>Bem-Vindo ao Site Oficial Nike, Inc.</Text>
        {/* Texto com estilo de título */}
        <Text style={styles.text}>
          Desafie seus limites todos os dias, Não é sobre ser melhor que os
          outros, é sobre ser melhor do que quem você foi ontem. A cada passo, a
          cada gota de suor, você prova que é capaz de ir além. Vista o foco,
          calce a atitude e conquiste o que antes parecia impossível. O seu
          momento é agora. o seu momento é Nike.
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Explore os novos lançamentos.</Text>

        <Text style={styles.text}>
          Os lançamentos mais ousados já chegaram — design, inovação e
          performance em cada detalhe. Clique em Produtos, explore e encontre o
          que combina com a sua próxima conquista.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Objeto de estilos (similar ao CSS)
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#fff', // Fundo branco
  },
  content: {
    padding: 20,
  },
  banner: {
    width: '100%', // Largura total
    height: 400, // Altura fixa
    borderRadius: 3, // arredonda as bordas
  },
  title: {
    fontSize: 20, // Tamanho grande
    fontWeight: 'bold', // Deixa o texto em negrito
    color: '#111', // Cor do texto (quase preto)
    textTransform: 'uppercase', // Transforma todas as letras em maiúsculas
    letterSpacing: 2, // Espaçamento entre as letras
    textAlign: 'center', // Centraliza o texto dentro da caixa dele
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Sombra no texto para dar destaque
    textShadowOffset: { width: 2, height: 2 }, // Posição da sombra (horizontal e vertical)
    textShadowRadius: 5, // Suavidade da sombra
    marginTop: 15,
  },
  text: {
    color: '#111', // Cor do texto (quase preto)
    textShadowColor: 'rgba(0, 0, 0.2)', // Sombra no texto para dar destaque
    textShadowOffset: { width: 2, height: 2 }, // Posição da sombra (horizontal e vertical)
    textShadowRadius: 5, // Suavidade da sombra
    textAlign: 'justify', // justificando o texto
    marginTop: 15, // afastando do que está acima
    padding: 10, // afastando da borda esquerda
  },

  // ... outros estilos
});

export default HomeScreen;