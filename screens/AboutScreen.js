import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';


const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>

        <Image
          source={require('../assets/images/bannerNike1.png')}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.text}>
          Nike, Inc. Um ícone global de atitude, inovação e superação. Fundada
          em 1971 nos Estados Unidos, a marca nasceu com um propósito ousado:
          levar inspiração e inovação para todos os atletas do mundo. {'\n'}
          {'\n'}
          Seu nome vem da deusa grega da vitória, Niké, e o famoso Swoosh
          representa exatamente isso — velocidade, movimento e conquista. {'\n'}
          {'\n'}
        </Text>

        <Text style={styles.subtitle}>Nossos Valores</Text>
        <Text style={styles.text}>
          A Nike é movida por um propósito simples, mas poderoso: inspirar e
          inovar para todos os atletas do mundo — e, como dizia seu cofundador
          Bill Bowerman, “se você tem um corpo, você é um atleta.” {'\n'}
          {'\n'}A marca acredita em: {'\n'}
          {'\n'}
          Superação Pessoal – Os limites existem para serem ultrapassados.{'\n'}
          {'\n'}
          Inclusão e Diversidade – A Nike promove um esporte mais justo,
          representativo e acessível. {'\n'}
          {'\n'}
          Inovação com Propósito – A Nike tem um objetivo claro: melhorar o
          desempenho sem abrir mão da responsabilidade com o planeta. {'\n'}
          {'\n'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
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
  },
  subtitle: {
    fontSize: 20, // Tamanho grande
    fontWeight: 'bold', // Deixa o texto em negrito
    color: '#111', // Cor do texto (quase preto)
    textTransform: 'uppercase', // Transforma todas as letras em maiúsculas
    letterSpacing: 2, // Espaçamento entre as letras
    textAlign: 'center', // Centraliza o texto dentro da caixa dele
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Sombra no texto para dar destaque
    textShadowOffset: { width: 2, height: 2 }, // Posição da sombra (horizontal e vertical)
    textShadowRadius: 5, // Suavidade da sombra
    marginTop: 10, // afastando do que está acima
  },
  text: {
    color: '#111', // Cor do texto (quase preto)
    textShadowColor: 'rgba(0, 0, 0.2)', // Sombra no texto para dar destaque
    textShadowOffset: { width: 2, height: 2 }, // Posição da sombra (horizontal e vertical)
    textShadowRadius: 5, // Suavidade da sombra
    textAlign: 'justify', // justificando o texto
    marginTop: 10, // afastando do que está acima
    padding: 10, // afastando da borda esquerda
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginTop: 15,
  },
});

export default AboutScreen;
