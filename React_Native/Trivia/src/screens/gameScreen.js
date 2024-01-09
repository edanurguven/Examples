import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import useFetch from '../hooks/useFetch/index';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Config from 'react-native-config';

export default GameScreen = (props) =>{

    const navigation = props.navigation;
    let [timeRemaining, setTimeRemaining] =useState(12);
    let [trueAnswer,setTrueAnswer] = useState(0);
    let [falseAnswer,setFalseAnswer] = useState(0);
    let [emptyAnswer,setEmptyAnswer] = useState(0);
    let [counter,setCounter] = useState(0);
    let [queueData,setQueueData] = useState(null);
    //nomalde API globalde seçilen türe göre şekil alacak şu anlık hazır seçili aldık.
    const {error,loading,data} = useFetch(Config.API);
    const optionsArray = data.results ? 
    [{ incorrect_answers: (data.results[counter]?.incorrect_answers || []) }, { correct_answer: (data.results[counter]?.correct_answer || '') }] : []; 
        //[{incorrect_answers:(data.results[counter].incorrect_answers)},{correct_answer:(data.results[counter].correct_answer)}] : []; 

    useEffect(()=>{
        dataCheck(data.results);
    },[queueData])

    async function dataCheck(data){
        if(await data != undefined){
            setQueueData(data[counter]);
        }
    }



    useEffect(()=>{ 
        /*
        const timer = setInterval(()=>{
            if(timeRemaining >0){
                setTimeRemaining(timeRemaining - 1);
            }else{
                setCounter(counter + 1);
            }
        },1000)  */
        console.log("COUNTER:",counter)
        if(counter >= 10){
            console.log("Navigating to FinishScreen...");
            navigation.navigate('FinishScreen', { trueAnswer: trueAnswer });
        }
    },[counter,navigation])  //,timeRemaining

    if(loading){
        return <Loading/>;
    }
    
    if(error){
        return <Error/>
    }

    function shuffleArray(array) {
        const newArray = [...array]; 
        for (let i = newArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          // Elemanları yer değiştir
          [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
        }
        return newArray;
    }

    const handlerChosenOption = (correctAnswer,chosenAnswer)=>{
        if(counter<10){
            setCounter((prev) => prev + 1);
            if(correctAnswer === chosenAnswer){
                setTrueAnswer((prev) => prev + 1);
            }else if(correctAnswer !== chosenAnswer){
                setFalseAnswer((prev) => prev + 1);
            }else{
                setEmptyAnswer((prev) => prev + 1);
            }
        }else{
            
        }
    }
    
    const questions =(value)=>{
        if(value.length !== 0 ){
            let values = [];
            let correct = "";
            value.forEach(element => {
                if(element.incorrect_answers){
                    values =[...element.incorrect_answers];
                }else if(element.correct_answer){
                    values = [...values,element.correct_answer+" * "];
                    correct = element.correct_answer+" * ";
                }
            });
            const shuffledArray = shuffleArray(values);
                if(counter<10){
                    return (
                        <View>
                            <Text style={style.queueNumber}>Question - {counter+1} </Text>
                            <View style={style.questionCard}>
                                <Text style={style.questionText}>{data.results[counter].question}</Text>
                            </View>
                            {shuffledArray.map((_,index)=>(
                            <View key={index}>
                                <TouchableOpacity onPress={()=>{handlerChosenOption(correct,shuffledArray[index])}}>
                                    <View style={style.option}>
                                        <Text style={style.text}>{shuffledArray[index]}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )) }
                        </View>
                       
                    );
                }else{
                  //  ()=>navigation.navigate("FinishScreen", { trueAnswer: trueAnswer });
                }
                
        } else{
            return <Loading/>
        }

        
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.queueNumber}>True: {trueAnswer}</Text>
                <Text style={style.queueNumber}>False:{falseAnswer}</Text>
                <Text style={style.queueNumber}>Empty:{emptyAnswer}</Text>
            </View>
            <View>
                {questions(optionsArray)}
            </View>
            
        </View>
    )
}


const style= StyleSheet.create({
    container:{
        backgroundColor: '#3A1994',//'#3B3B98',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    questionText:{
        fontSize:18,
        color:'black',
    },
    text:{
        fontSize:16,
        color:'black',
    },
    option:{
        borderWidth: 3,
        borderColor:"#FACFFF",
        borderRadius:20,
        padding:5,
        width:350,
        height:60,
        margin:4,
        backgroundColor:'white',
    },
    questionCard:{
        borderWidth: 3,
        borderColor:"#FACFFF",//"#BDFFEC",
        borderRadius:20,
        padding:10,
        width:350,
        height: 150,
        margin:5,
        backgroundColor:'white',
    },
    queueNumber:{
        margin:10,
        textAlign:'center',
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize:20,
        color:'white',
    },
    header:{
        textAlign:'center',
        fontFamily: 'FuzzyBubbles-Bold',
        fontSize:18,
        color:'white',
        flexDirection:'row'
    }
})