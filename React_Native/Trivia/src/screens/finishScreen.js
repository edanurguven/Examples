import React from 'react';
import {View,Text,StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default FinishScreen=({route,navigation})=>{
    const { trueAnswer } = route.params;

    const handlePress = () =>{
        navigation.reset({
            index:0,
            routes: [{name:'HomePage'}],
        })
    }
 
    function response(value){
        if(value>=8){
            return ["We need to applaud you! Your scores are so high we felt like you were challenging the laws of gravity.",require("../../assets/img/g1.jpg")];
        }else if((value<8) && (value>=5)){
            return ["So this is part of your learning process. Nobody became a superhero the first time, right?",require("../../assets/img/g2.jpg")];
        }else if((value<5) && (value>=3)){
            return ["It's a good thing your grades put other people at ease. They also appreciate their own success more.",require("../../assets/img/g3.jpg")];
        }else{
            return ["The fact that the score is so low is, I guess, a superhero's way of maintaining his anonymity. Because no one expects such a low score!",require("../../assets/img/g4.jpg")];
        }
    }
    const text= response(trueAnswer);
    return (
        <View style={style.container}>
            <Text style={style.title}>{text[0]}</Text>
            <Image source={text[1]} style={[style.image,{borderRadius:15}]} resizeMode='cover' />
            <TouchableOpacity style = {style.button} onPress={handlePress}>
                <Text style={style.buttonText}>Home Page</Text>
            </TouchableOpacity>
        </View>
    );
}

const style=StyleSheet.create({
    container:{
        backgroundColor: "#C0DFFF",
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize:25,
        color:'white',
        textAlign:'center',
        margin:30,
    },
    image:{
        height: 200,
        width : 200,
        backgroundColor: "#C0DFFF",
        resizeMode: 'contain',
    },
    button:{
        margin:10,
        borderRadius:20,
        backgroundColor:"#009688",
        height:50,
        width:200,
        justifyContent:'center',
    },
    buttonText:{
        fontSize:20,
        color:'white',
        textAlign:'center',
        fontFamily: 'FuzzyBubbles-Bold',
    },

})
