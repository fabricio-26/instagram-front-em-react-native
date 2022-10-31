import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Header from './src/Header'
import List from './src/List'

export default function App(){
  const [feed, setFeed] = useState([
    {
      id:'1',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de mutos bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1
    },
    {
      id:'2',
      nome: 'Pedro Gonçalves',
      descricao: 'sso sim é raiz!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0
    },
    {
      id:'3',
      nome: 'Fabricio Hneirque',
      descricao: 'Dia de aprender react',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 0
    },
    {
      id:'4',
      nome: 'Fernado Gomes',
      descricao: 'Eu sou programdor',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 39
    },
    {
      id:'5',
      nome: 'Algusto Silva',
      descricao: 'Java e uma linguagem orientada',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 153
    },
  ])


  return(
    <View style={styles.container}>
      <Header/>

      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={feed}
      renderItem={ ({item}) => <List data={item}/> }
      >

      </FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

