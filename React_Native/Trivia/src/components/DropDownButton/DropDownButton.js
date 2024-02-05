import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View,StyleSheet,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'

const DropDownButton=({array,zIndex,label,onValueChange = () => {}})=>{
    const [open, setOpen] = useState(false);
    const [value,setValue] = useState(null);
    const [items,setItems]  = useState([]); 
    useEffect(()=>{
        dataCheck();
    },[])

    function dataCheck(){
        if(array !== undefined){
            console.log("array:",array)
            if(label === 'Type'){
                const newArray = array.map(item => ({ label: item.name, value: item.name }));
                setItems(newArray);
            }else{
                setItems(array);
            }
        }
        console.log("category:",items);
    }

    const handleValueChange = (selectedValue) => {
        setValue(selectedValue);
        console.log("selectedValue : ");
        onValueChange && onValueChange(selectedValue); // Callback fonksiyonunu çağır

    }

    return(
        <View style={style.dropDownButton}>
                <DropDownPicker nestedScrollEnabled={true}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    onChangeValue={this.handleValueChange}
                    setItems={setItems}
                    containerStyle={style.dropDownContainer}
                    zIndex={zIndex}
                    placeholder= {label}
                />
        </View>
    );
}
export default DropDownButton;

const style= StyleSheet.create({
    dropDownButton:{
        width: 200,
        marginBottom:50,
    },
    dropDownContainer: {
        marginTop: 10, 
      },
})
