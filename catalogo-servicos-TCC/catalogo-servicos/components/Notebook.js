import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Notebook(props){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Notebook </Text>
      <ScrollView>
      <View style={estilo.fundo}>

      <Text style={estilo.conceito}>

      Conte com nossa assistência técnica para a manutenção e reparo de notebooks. 
      Nossos técnicos estão preparados para lidar com problemas de hardware e software em diversas marcas e modelos.

      </Text>
      
      </View>

      <Image style={estilo.img}  source={require('../assets/Notebook.jpeg')}/>

    
      <Text style={estilo.subtitulo}> Serviços: </Text>
      <View style={estilo.fundo}>

       <TouchableOpacity onPress={()=>{props.navigation.navigate('ReparoNote')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Reparo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('LimpezaNote')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Limpeza</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('BackupNote')}}>
      <Text style={estilo.topicos}> <AntDesign name="setting" size={20} /> Backup e Restore</Text>
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
  backgroundcolor: '#000'
}
})