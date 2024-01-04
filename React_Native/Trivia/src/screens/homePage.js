import LottieView from 'lottie-react-native'
import React from 'react'
import {Text,TouchableOpacity ,View,StyleSheet, Dimensions,Image} from 'react-native'

export default HomePage = (props) =>{
    const navigation = props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.settings}>
        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
            <LottieView source ={require("../../assets/lotties/settings.json")} autoPlay loop style={{ width: 80, height: 80 }}/>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.header}>
            <Image source={require('../../assets/img/TriviaLogo2.png')} style={styles.logo}/>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Your High Score!</Text>
            <Text style={styles.cardScore}>0</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('GameScreen')}>
            <LottieView source ={require("../../assets/lotties/startButton.json")} autoPlay loop style={{ width: 300, height: 175 }}/>
          </TouchableOpacity>
        </View>
      </View>
    )
}


const styles  =StyleSheet.create({
    container:{
      backgroundColor: '#3A1994',//'#3B3B98',
      flex:1,
    },
    body:{
     justifyContent:'center',
      alignItems:'center',
    },
    card:{
      borderWidth: 3,
      borderColor:"#BDFFEC",//'#1B9CFC',
      backgroundColor: "#C0DFFF",//"#BDFFEC",//'#9AECDB',
      height:220,
      width:280,
      borderRadius:10,
      margin:10
    },
    button:{
      width: 215,
      height:70,
      marginBottom:10,
      backgroundColor: '#31B3E7',// FC427B
      borderRadius:10,
    },
    settings:{
      alignItems:'flex-end'
    },
    text:{
        textAlign:'center',
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize:30,
        color:'white',
    },
    cardText:{
      margin:10,
      textAlign:'center',
      fontFamily: 'FuzzyBubbles-Bold',
      fontSize:40,
      color:'white',
    },
    cardScore:{
      textAlign:'center',
      fontFamily: 'FuzzyBubbles-Bold',
      fontSize:50,
      color:'white',
    },
    startButton:{
      width: 280,
      height:70,
    },
    logo:{
      height:Dimensions.get('window').height/4.5,
      resizeMode: 'contain',
    },
    header:{
      flexDirection: 'row', // Yatay düzenleme için flex yönlendirmesi
      alignItems: 'center',
      marginBottom: 30,
    },
    title:{
    //  fontFamily: 'FuzzyBubbles-Bold',
      fontSize:30,
      color: 'black',  
      display: 'flex',
    } 
})
