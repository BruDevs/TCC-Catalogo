import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Desktop(props){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Desktop </Text>
      <ScrollView>
      <View style={estilo.fundo}>

      <Text style={estilo.conceito}>

      Quando se trata de serviços em desktops, estamos aqui para oferecer soluções confiáveis e eficientes. 
      Nossa equipe especializada é capaz de lidar com uma ampla gama de problemas e necessidades relacionados a desktops,
       desde configurações iniciais até manutenção e reparos avançados.

      </Text>
      
      </View>

      <Image style={estilo.img}  source={require('../assets/Desktop.jpeg')}/>

    
      <Text style={estilo.subtitulo}> Serviços: </Text>
      <View style={estilo.fundo}>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('ReparoDesktop')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Reparo </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('LimpezaDesktop')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Limpeza </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('BackupDesktop')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Backup e instalação </Text>
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
  margin: 0,
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
  backgroundcolor: '#000'
}
})