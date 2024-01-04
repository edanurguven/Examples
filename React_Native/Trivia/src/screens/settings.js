import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch/index';
import Config from 'react-native-config';
import Loading from '../components/Loading/index';
import Error from '../components/Error/index';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownButton from '../components/DropDownButton/index';

const Settings =()=>{

    console.log(Config.API_CATEGORY_URL);
    const {loading, data,error} = useFetch(Config.API_CATEGORY_URL)

    const [open, setOpen] = useState(false);
    const [value,setValue] = useState(null);
    const [items,setItems]  = useState([]); 

    const levels = ([
        {label:'Easy',value:'easy'},
        {label:'Medium',value:'medium'},
        {label:'Hard',value:'hard'}
    ])

    const options = ([
        {label:"Multiple",value:"multiple"},
        {label:"True/False",value:"boolean"}
    ]);
    const categories = data.trivia_categories;


    
    useEffect(()=>{
        dataCheck(categories);
    },[])

    function dataCheck(array){
        if(array != undefined){
            console.log("array:",array)
            const newCategories = array.map(item => ({ label: item.name, value: item.name }));
            setItems(newCategories);
        }

    }

    if(error){
        return <Error/>
    }
    if(loading){
        return <Loading/>
    }

    const handleDropDownTypeChange = (selectedValue) =>{
        console.log(selectedValue);
    }

    const handleDropDownLevelChange = (selectedValue) =>{
        console.log(selectedValue);
    }
    const handleDropDownOptionsChange = (selectedValue) =>{
        console.log(selectedValue);
    }

    return(
        <View style={style.container} >
            <Text style={style.header} >Settings</Text>
            <View style={style.body}>
                <Text style={style.title}>Select question type:</Text>
                <DropDownButton array={categories} zIndex={1000} label={'Type'} onValueChange={handleDropDownTypeChange}/>
                <Text style={style.title}>Select question level:</Text>
                <DropDownButton array={levels} zIndex={999} label={'Level'} onValueChange={handleDropDownLevelChange}/> 
                <Text style={style.title}>Select answer type:</Text>
                <DropDownButton array={options} zIndex={998} label={'Answer Type'} onValueChange={handleDropDownOptionsChange}/> 
            </View>
        </View>
    );
}

export default Settings;

const style=StyleSheet.create({
    header:{
        margin:20,
        textAlign:'center',
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize:40,
        color:'white',

    },
    container:{
        backgroundColor: '#3A1994',//'#3B3B98',
        flex:1,
    },
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    dropDownButton:{
        width: 200,
        marginBottom:50,
    },
    title:{
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize:25,
        color:'white',

    }
})