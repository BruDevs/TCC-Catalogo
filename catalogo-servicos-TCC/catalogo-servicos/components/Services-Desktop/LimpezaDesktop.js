import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function LimpezaDesktop(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Limpeza Desktop </Text>
      <ScrollView>
      <View style={estilo.fundo}>

      <Text style={estilo.conceito}>

      A limpeza correta ajuda a manter seu equipamento funcionando, já que previne maus contatos entre os terminais,
      Garante também a vida útil de componentes fundamentais como o cooler e o processador.
     
      </Text>
      
      </View>

      <Image style={estilo.img}  source={require('../../assets/LimpezaDesktop.png')}/>

    
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