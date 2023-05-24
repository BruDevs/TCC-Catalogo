import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Notebook(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Backup Smartphone </Text>
      <ScrollView>
      <View style={estilo.fundo}>

      <Text style={estilo.conceito}>

     Realize backups periódicos do seu celular para proteger seus dados importantes em caso de perda, roubo ou danos no dispositivo,
     para garantir a segurança dos seus contatos, fotos, vídeos e outros arquivos importantes.
     
      </Text>
      
      </View>

      <Image style={estilo.img}  source={require('../../assets/BackupCelular.jpg')}/>

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
  backgroundcolor: '#000',
  marginBottom: 28
}
})