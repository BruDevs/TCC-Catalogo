import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Home(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Catálogo de Serviços </Text>
      <ScrollView>
      
      <Image style={estilo.img} source={require('../assets/logoTCC.jpg')}/>

      <Text style={estilo.conceito}>
      
     BR TECH 
     </Text>
     <Text style={estilo.conceito}>
      Seu parceiro confiável para todas as suas necessidades de assistência!

      </Text>

      <View style={estilo.fundo} resizeMode={'contain'}>

      <Text style={estilo.subtitulo}> Serviços: </Text>

      <Text style={estilo.topicos}> 
      <AntDesign name="setting" /> Desktops </Text>

      <Text style={estilo.topicos}> 
      <AntDesign name="setting" /> Smartphones </Text>

      <Text style={estilo.topicos}> 
      <AntDesign name="setting" /> Notebooks </Text>
    
      </View></ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor:'#1B57A6',
  
},
titulo: {
marginTop: 30,
marginBottom: 20,
fontSize: 30,
alignSelf: 'center',
color: '#ffffff'
},
conceito:{
  fontSize: 18,
  margin: 15,
  color: '#ffffff',
  alignSelf: 'center',

},
subtitulo: {
  fontSize: 20,
  marginBottom: 20,
  marginLeft: 20,
  alignSelf: 'center',

  
},
topicos: {
  fontSize: 20,
  marginLeft: 20
},
img:{

  borderRadius: 10,
  margin: 10,
  alignSelf: 'center',
  heigth: 10
},
fundo:{
  borderRadius: 20,
  marginHorizontal: 10,
  backgroundColor: '#E0FFFF',
  marginBottom: 28
}
})