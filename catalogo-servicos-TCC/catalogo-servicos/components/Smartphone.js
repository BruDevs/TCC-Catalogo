import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Smartphone(props){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Smartphone </Text>
      <ScrollView>
      <View style={estilo.fundo}>

      <Text style={estilo.conceito}>

      Nossa assistência técnica especializada oferece diagnóstico preciso e reparos rápidos em celulares de todas as marcas e modelos.
      Contamos com técnicos experientes que podem resolver problemas de hardware e software em seu celular, trazendo-o de volta à plena funcionalidade.

      </Text>
      
      </View>

      <Image style={estilo.img}  source={require('../assets/ReparoCelular.jpg')}/>

    
      <Text style={estilo.subtitulo}> Serviços: </Text>
      <View style={estilo.fundo}>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('ReparoPhone')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Reparo</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{props.navigation.navigate('BackupPhone')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Backup </Text>
      </TouchableOpacity>
      
      
      </View></ScrollView>
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