import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
// FlatList é otimizado para listas longas (renderiza apenas itens visíveis)

const products = [
  // Array de objetos com dados dos produtos
  {
    id: '1', // Chave única obrigatória
    name: 'Bola Nike Premier League',
    description:
      'Concentre-se no seu jogo com a estrutura texturizada que ajuda a manter um toque mais consistente e gráficos de alto contraste que ajudam a bola a se destacar para que você possa fazer melhor mágica com os pés.',
    price: 'R$ 332,49',
    image: require('../assets/images/ProductOne.jpg'),
  },
  {
    id: '2', // Chave única obrigatória
    name: 'Sandália Crocs Monsters Inc Mike Cls C Unissex COLAB',
    description:
      'CA Sandália Crocs Monsters Inc Mike Cls C Unissex é feita de um material resistente e confortável, ideal para o dia a dia. O material proporciona conforto aos pés, garantindo durabilidade e estilo ao produto. A cor Multicolor traz um toque divertido e versátil, podendo ser combinada com diferentes estilos, desde o mais casual até o mais despojado.',
    price: 'R$  398,99 ',
    image: require('../assets/images/ProductTwo.webp'),
  },
  {
    id: '3', // Chave única obrigatória
    name: 'Tênis Nike Air Max Dn',
    description:
      'A Air Max Dn possui o nosso sistema de unidade Dynamic Air de tubos de dupla pressão, criando uma sensação ágil a cada passo. O resultado é um design futurista confortável o suficiente para ser usado de dia e de noite. Além disso, esta versão apresenta um tratamento de degradê na parte de cima. Vá em frente, sinta algo totalmente novo.',
    price: 'R$ 1299,99',
    image: require('../assets/images/ProductThree.webp'),
  },
  {
    id: '4', // Chave única obrigatória
    name: 'TÊNIS NIKE SHOX TL "BLACK GREEM STRIKE"',
    description:
      'O Tênis Nike Shox TL "Black Green Strike" representa a fusão perfeita entre tecnologia dos anos 2000 e atitude contemporânea. Com seu visual marcante em preto profundo e detalhes em verde neon, o modelo chama atenção nas ruas e no lifestyle urbano.',
    price: 'R$ 1399,99',
    image: require('../assets/images/ProductFive.jpg'),
  },
  {
    id: '5', // Chave única obrigatória
    name: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Vini Jr Campo',
    description:
      'Enquanto Vini Jr. voa sobre o campo em velocidades estonteantes, Mercurial o eleva a novas alturas. O design gradiente da sua Vapor 16 Elite mistura cores do seu clube de estreia com as da seleção brasileira — onde ele começou e para onde está indo.',
    price: 'R$ 2184,99',
    image: require('../assets/images/ProductSix.webp'),
  },
  {
    id: '6', // Chave única obrigatória
    name: 'Tênis Air Jordan Legacy 312 Low Masculino',
    description:
      'O Tênis Air Jordan Legacy 312 Low Masculino é a escolha perfeita para quem quer um visual descolado e confortável. Com um design inspirado em modelos clássicos da marca, ele é feito com materiais de alta qualidade, como máterial sintético e tecido, que garantem durabilidade e resistência.',
    price: 'R$ 712,49',
    image: require('../assets/images/ProductSeven.webp'),
  },
  {
    id: '7',
    name: 'Tênis Air Jordan 4 Retro',
    description: 'Se você é fã de tênis de alta performance e estilo icônico, o Tênis Air Jordan 4 Retro Rmstd Masculino é a escolha perfeita para você! Confeccionado com materiais de qualidade premium, este tênis apresenta um design elegante e moderno',
    price: 'R$ 1999,99',
    image: require('../assets/images/ProductOito.webp')
  }
  // ... outros produtos
];

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
              source={require('../assets/images/banner.png')}
              style={styles.banner}
              resizeMode="cover"
            />

      <FlatList
        data={products} // Fonte de dados
        keyExtractor={(item) => item.id} // Extrai chaves únicas
        renderItem={(
          { item } // Como renderizar cada item
        ) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent} // Estilo da lista
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   banner: {
    width: '100%', // Largura total
    height: 130, // Altura fixa
    borderRadius: 3, // arredonda as bordas
  },
  listContent: {
    padding: 20,
  },
  productCard: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 350,
  },
  productInfo: {
    padding: 15,
  },
  productName: {
    fontSize: 12, // Tamanho grande
    fontWeight: 'bold', // Deixa o texto em negrito
    color: '#111', // Cor do texto (quase preto)
    textTransform: 'uppercase', // Transforma todas as letras em maiúsculas
    letterSpacing: 2, // Espaçamento entre as letras
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Sombra no texto para dar destaque
    textShadowOffset: { width: 2, height: 2 }, // Posição da sombra (horizontal e vertical)
    textShadowRadius: 5, // Suavidade da sombra
    marginBottom: 5,
  },
  productDescription: {
    color: '#111', // Cor do texto (quase preto)
    textShadowColor: 'rgba(0, 0, 0.2)', // Sombra no texto para dar destaque
    textShadowOffset: { width: 2, height: 2 }, // Posição da sombra (horizontal e vertical)
    textShadowRadius: 5, // Suavidade da sombra
  },
  productPrice: {
    fontSize: 12, // Tamanho grande
    fontWeight: 'bold', // Deixa o texto em negrito
    color: '#111', // Cor do texto (quase preto)
    textTransform: 'uppercase', // Transforma todas as letras em maiúsculas
    letterSpacing: 2, // Espaçamento entre as letras
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Sombra no texto para dar destaque
    textShadowOffset: { width: 2, height: 2 }, // Posição da sombra (horizontal e vertical)
    textShadowRadius: 5, // Suavidade da sombra
    marginTop: 10,
  },
});

export default ProductsScreen;
