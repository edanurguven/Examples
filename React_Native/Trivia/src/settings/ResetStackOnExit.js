import React,{useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const ResetStackOnExit = () =>{
    const navigation = useNavigation();
    useEffect(()=>{
        const unsubscribe =navigation.addListener('beforeRemove',(e)=>{
            if(e.data.action.type === 'POP'){  //sayfa stacklerini sıfırlama
                e.preventDefault();
                navigation.reset({
                    index:0,
                    routes: [{name : 'HomePage'}],
                });
            }
        })
        return () =>{ unsubscribe};
    },[navigation]);
    return null;
} 

export default ResetStackOnExit;