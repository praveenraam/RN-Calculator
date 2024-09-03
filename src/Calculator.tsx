import { Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {

    const [val,setVal] = useState('');
    const [history,setHistory] = useState([]);

    const result = () => {
        try{
            var res = eval(val); setVal(res);

            setHistory((history) => {
                const updatedHistory = [val,...history];
                if(history.length > 5){
                    updatedHistory.pop();
                }
                return updatedHistory;
            });
        }
        catch(error){
            setVal('Error');
            setInterval(()=>{
                setVal('');
            },10000);
        }
    };

    return (
        <View>
            <View>
                <Text>{val}</Text>
            </View>
            <View>
                <View>
                    <Pressable onPress={()=>setVal(val + '1')}><Text>1</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '2')}><Text>2</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '3')}><Text>3</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '+')}><Text>+</Text></Pressable>
                </View>

                <View>
                    <Pressable onPress={()=>setVal(val + '4')}><Text>4</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '5')}><Text>5</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '6')}><Text>6</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '-')}><Text>-</Text></Pressable>
                </View>

                <View>
                    <Pressable onPress={()=>setVal(val + '7')}><Text>7</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '8')}><Text>8</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '9')}><Text>9</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '*')}><Text>*</Text></Pressable>
                </View>

                <View>
                    <Pressable onPress={()=>setVal('')}><Text>Reset</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '0')}><Text>0</Text></Pressable>
                    <Pressable onPress={()=>result()}><Text>=</Text></Pressable>
                    <Pressable onPress={()=>setVal(val + '/')}><Text>/</Text></Pressable>
                </View>
            </View>
            <View>
                <Text>{history}</Text>
            </View>
        </View>
    )
  
}

export default Calculator;