import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Notebook(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Notebook </Text>
      <ScrollView>
      <View style={estilo.fundo}>

      <Text style={estilo.conceito}>

      Oferecemos atendimento personalizado e diagnóstico preciso em nossa assistência técnica para smartphones, para que você tenha a melhor solução para seu dispositivo.
      Nossa empresa se destaca pela excelência em assistência técnica para smartphones, proporcionando um serviço ágil e de alta qualidade.

      </Text>
      
      </View>

      <Image style={estilo.img}  source={require('../../assets/RepairPhone.jpg')}/>

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
img:{
  borderRadius: 10,
  margin: 10,
  alignSelf: 'center',
  height: 380,
  width: 400
},
fundo:{
  borderRadius: 20,
  marginHorizontal: 10,
  backgroundcolor: '#000'
}
})