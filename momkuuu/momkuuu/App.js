import React from 'react'
import {Text,View,StyleSheet,Image,TouchableOpacity,TextInput,Alert} from 'react-native'
import {Header} from 'react-native-elements';
import db from './localdb';
import SoundButton from './components/PhonicSoundButton'


export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text:"",
      chunks:[],
      phonicSounds:[]
    }
  }
  render(){
    return(
      <View>

    <Header backgroundColor="red"
    centerComponent={{
      text:"Momkuuuu",
      style:{color:"white",fontSize:20},
       }}>
      </Header>
     
     
    <Text style={styles.txt}>Haiiiiiiiiiiiiiiiiiii Mammmmakuttyyyyyyy</Text>
     <Image style={styles.img}
     source={{uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png" }}Image/>
      <TextInput style={styles.inputBox}
       onChangeText={text=>{
       this.setState({text:text})
     }}
      value={this.state.text}/>
    
     <TouchableOpacity style={styles.btn} onPress={
       ()=>{
        var word = this.state.text.toLowerCase()
        db[word]?
        (this.setState({chunks : db[word].chunks}),this.setState({phonicSounds:db[word].phones})):
        Alert.alert("word not found")
     }
    
     }>
     <Text style={styles.txt1}>Touch me</Text>
     </TouchableOpacity>

    <View>
    {this.state.chunks.map((item,index)=>{
      return(
        <SoundButton
        wordChunk={this.state.chunks[index]}
        soundChunk={this.state.phonicSounds[index]}
        />
      );
    })}
   </View>
   </View>
    )
  }
}
const styles =StyleSheet.create({
  img:{
    width:200,
  height:200,
  alignSelf:"center"},
  btn:{
    backgroundColor:"red",
    width:200,
    height:35,
    alignSelf:"center",
    
    },
    txt:{
 alignSelf:"center",
 paddingTop:10,

    },
   txt1:{
     alignSelf:"center",
     paddingTop:9,
     fontWeight:"bold" 
     
   }, 
   inputBox:{
     borderWidth:4,
     width:200,
     height:35,
     marginTop:5,
     marginBottom:10,
     outline:"none",
     alignSelf:"center",
     textAlign:"center"
     

    
   } 
})