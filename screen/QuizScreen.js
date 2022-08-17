import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import quizscreenstyles from '../css/quizscreenstyles';


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const QuizScreen = ({navigation}) => {
  const [questions, setquestions] = useState();
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState(0);
  const [num, setnum] = useState(0);
  const [nums, setnums] = useState(0);
  const [num2, setnum2] = useState(1);

  const [option, setoption] = useState([]);

  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986';
    setloading(true);
    const response = await fetch(url);
    const data = await response.json();
    setquestions(data.results);

    setoption(createoption(data.results[0]));
    setloading(false);
  };

  useEffect(() => {
    getQuiz();
  }, [num2]);

  if (loading) {
    return <ActivityIndicator color="green" size="small" />;
  }

  const createoption = (data )=> {
    const option = [...data.incorrect_answers];
    option.push(data.correct_answer);

    shuffleArray(option);

    return option;
  };

  const nexthandler = () => {
    if(num!==9){
      setnum(num + 1);
    setoption(createoption(questions[num+1]));
    }


  };
  
const answerChecker=(data)=>{
 if(data===questions[num].correct_answer && (nums<10) ){
 setresult(result+1);

}
setnums(nums+1)
nexthandler()

} 




  return (
    <View style={{height: '100%'}}>
      {questions &&  (
        <View style={quizscreenstyles.container}>
          <View style={quizscreenstyles.questins}>
            <Text style={quizscreenstyles.text}>Q{num+1}.{" "}{decodeURIComponent(questions[num].question)}</Text>
          </View>
        
         <View>
            <TouchableOpacity 

            onPress={()=>{

              answerChecker((option[0]))

            }}
            
            style={quizscreenstyles.option}>
              <Text style={quizscreenstyles.options}>{decodeURIComponent(option[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={()=>{

              answerChecker((option[1]))

            }}
            
            
            style={quizscreenstyles.option}>
              <Text style={quizscreenstyles.options}>{decodeURIComponent(option[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={()=>{

              answerChecker((option[2]))

            }}
            
            
            style={quizscreenstyles.option}>
              <Text style={quizscreenstyles.options}>{decodeURIComponent(option[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={()=>{

              answerChecker((option[3]))

            }}
            
            
            style={quizscreenstyles.option}>
              <Text style={quizscreenstyles.options}>{decodeURIComponent(option[3])}</Text>
            </TouchableOpacity>
          </View> 
          <View style={quizscreenstyles.buttoncontainer}>
           

            {num!==9 ?  <TouchableOpacity
              onPress={nexthandler}
              style={quizscreenstyles.button}>
             <Text style={quizscreenstyles.buttontext}>Skip</Text>
            </TouchableOpacity>:<TouchableOpacity
            onPress={() =>
              navigation.navigate('Result',{Result:result,})
            }
             
              style={quizscreenstyles.button}>
             <Text style={quizscreenstyles.buttontext}>Result</Text>
            </TouchableOpacity>}
          </View>
        </View>
      ) }
    </View>
  );
};

export default QuizScreen;

