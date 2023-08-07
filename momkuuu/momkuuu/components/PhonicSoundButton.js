import React from 'react';
import{Text,View,StyleSheet,TouchableOpacity}from 'react-native';
import {Audio} from 'expo-av';
export default class SoundButton extends React.Component {
  playSound = async soundChunk =>{
    var soundLink='https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3'
    await Audio.Sound.createAsync(
      {
        uri:soundLink,
      },{
        shouldPlay:true
        }  
      
    )
    
  }
  render(){
    return(
      <View>
      <TouchableOpacity style={styles.btn} onPress={()=>{
        this.playSound(this.props.soundChunk)
        

      }}>
      <Text style={styles.txt}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
</View>
    )
  }
}
const styles =StyleSheet.create({
btn:{
    backgroundColor:"yellow",
    width:200,
    height:35,
    alignSelf:"center",
    marginTop:15,
},
    txt:{
 alignSelf:"center",
 paddingTop:10,
 textAlign:"center"

   }
})