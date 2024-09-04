import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Parser } from 'expr-eval';

const Calculator = () => {

    const [val,setVal] = useState('');
    const [history,setHistory] = useState<String[]>([]);
    const parser = new Parser();

    const handlePress = (input:String) => setVal(val + input);

    const calculateResult = () => {
        try{
            const result = parser.evaluate(val);
            setVal(result.toString());
            updateHistory(result + ' ');
        }
        catch(error){
            if (error instanceof Error) {
                displayError(error);
            } else {
                // Handle unexpected types if needed
                displayError(new Error('Unknown error occurred'));
            }
        }
    };

    const updateHistory = (entry:String ) =>{
        const newHistory = [entry,...history].slice(0,5);
        setHistory(newHistory);
    };

    const displayError = (error: Error) =>{
        setVal('Error ' + error);
        setTimeout(() => setVal(' '),10000);
    };

    return (
        <View>
            <View>
                <View>
                    <Text>{history}</Text>
                </View>
                <Text>{val}</Text>
            </View>
            <View>
                <View>
                    {['1','2','3','+'].map((char) => (
                        <Pressable key={char} onPress={() => handlePress(char)}><Text>{char}</Text></Pressable>
                    ))}
                </View>

                <View>
                    {['4','5','6','-'].map((char) => (
                        <Pressable key={char} onPress={() => handlePress(char)}><Text>{char}</Text></Pressable>
                    ))}
                </View>

                <View>
                    {['7','8','9','*'].map((char) => (
                        <Pressable key={char} onPress={() => handlePress(char)}><Text>{char}</Text></Pressable>
                    ))}
                </View>

                <View>
                    <Pressable onPress={()=>setVal('')}><Text>Reset</Text></Pressable>
                    <Pressable onPress={()=>handlePress('0')}><Text>0</Text></Pressable>
                    <Pressable onPress={()=>calculateResult()}><Text>=</Text></Pressable>
                    <Pressable onPress={()=>handlePress('/')}><Text>/</Text></Pressable>
                </View>
            </View>
        </View>
    );
};
export default Calculator;
