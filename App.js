import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import Header from './src/Header'
import List from './src/List'
import Storys from './src/Storys';

export default function App(){
  const [feed, setFeed] = useState([
    {
      id:'1',
      nome: 'Lucas Silva',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1
    },
    {
      id:'2',
      nome: 'Pedro Gonçalves',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
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
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 39
    },
    {
      id:'5',
      nome: 'Algusto Silva',
      descricao: 'Java e uma linguagem orientada',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 153
    },
  ])












  const [stors, setStors] = useState([
    {
      id:'1',
      nome: 'Lucas',
      descricao: 'Mais um dia de mutos bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1

    },
    {
      id:'2',
      nome: 'Pedro..',
      descricao: 'sso sim é raiz!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0

    },
    {
      id:'3',
      nome: 'Fabricio',
      descricao: 'Dia de aprender react',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 0

    },
    {
      id:'4',
      nome: 'Fernado',
      descricao: 'Eu sou programdor',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 39
     
    },
    {
      id:'5',
      nome: 'Algusto',
      descricao: 'Java e uma linguagem orientada',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 153
    },
    {
      id:'6',
      nome: 'Pedro',
      descricao: 'sso sim é raiz!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0
    },
    {
      id:'7',
      nome: 'Fabricio',
      descricao: 'Dia de aprender react',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 0
    },
    {
      id:'8',
      nome: 'Fernado',
      descricao: 'Eu sou programdor',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 39
    },
    {
      id:'9',
      nome: 'Algusto',
      descricao: 'Java e uma linguagem orientada',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 153
    },
    {
      id:'10',
      nome: 'Silva',
      descricao: 'Mais um dia de mutos bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1
    },
    {
      id:'11',
      nome: 'Gonçalves',
      descricao: 'sso sim é raiz!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0
    },
    {
      id:'12',
      nome: 'Hneirque',
      descricao: 'Dia de aprender react',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 0
    },
    {
      id:'13',
      nome: 'Gomes',
      descricao: 'Eu sou programdor',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 39
    },
    {
      id:'14',
      nome: 'Algusto',
      descricao: 'Java e uma linguagem orientada',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 153
    },
  ])

  return(
    <View style={styles.container}>
      <Header/>

      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(item) => item.id}
      data={stors}
      renderItem={ ({item}) => <Storys data={item}/> }
      ></FlatList>
      

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

