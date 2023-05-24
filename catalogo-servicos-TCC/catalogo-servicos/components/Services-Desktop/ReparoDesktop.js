import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function ReparoDesktop(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Desktops </Text>
      <ScrollView>
      <View style={estilo.fundo}>

      <Text style={estilo.conceito}>

     A manutenção de computadores desktops se faz necessário previamente, garantindo funcionamento pleno de sua máquina, além de aumentar o tempo de vida útil das peças

      </Text>
      
      </View>

      <Image style={estilo.img}  source={require('../../assets/ReparoDesktop.jpeg')}/>

    </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({

container: {
  flex: 1,
  backgroundcolor:'#8590FF',
},
titulo: {
marginTop: 30,
marginBottom: 20,
fontSize: 30,
alignSelf: 'center'
},
conceito:{
  fontSize: 18,
  textAlign: 'justify',
  margin: 15,
  backgroundcolor: '#1E90FF'
},
subtitulo: {
  fontSize: 20,
  marginBottom: 20,
  marginLeft: 20
},
topicos: {
  fontSize: 20,
  marginLeft: 20
},
img:{
  borderRadius: 10,
  margin: 10,
  alignSelf: 'center'
},
fundo:{
  borderRadius: 20,
  marginHorizontal: 10,
  backgroundcolor: '#000',
  marginBottom: 28
}
})