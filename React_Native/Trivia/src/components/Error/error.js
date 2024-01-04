import React from 'react';
import LottieView from 'lottie-react-native';
import {View,Text} from 'react-native';

function Error(){
    return (
        <View style={{flex:1,justifyContent: 'center'}}>
            <LottieView style={{flex:3}} source={require("../../../assets/lotties/errorA.json")} autoPlay/> 
            <View style={{justifyContent:'center',flex:2,}}>
                <Text style={{color:'red', fontSize:20,textAlign:'center',fontFamily: 'FuzzyBubbles-Bold',}}>Bir sorun oluştu!</Text>
            </View>
        </View>
    );
}
export default Error;