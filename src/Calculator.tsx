import { Pressable, Text, View, Image } from 'react-native';
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
            updateHistory('(' + val + ') = ' + result + '   ');
            setVal(result.toString());
        }
        catch(error){
            if (error instanceof Error) {
                displayError(error);
            } else {
                displayError(new Error('Unknown error occurred'));
            }
        }
    };

    const updateHistory = (entry:String ) =>{
        const newHistory = [entry,...history].slice(0,5);
        setHistory(newHistory);
    };

    const deleteLastChar = () => {
        setVal(val.slice(0,-1));
    };

    const displayError = (error: Error) =>{
        setVal('Error ' + error);
        setTimeout(() => setVal(' '),3000);
    };

    const resetVal = () => {
        setVal('');
    };

    return (
        <View className="grid grid-rows-4 grid-flow-row gap-10">
            <View>
                <View>
                    <Text>{history}</Text>
                </View>
                <Text>{val}</Text>
            </View>
            <View className="grid grid-rows-4 grid-flow-row gap-4 ">


                <View className="flex flex-row justify-center items-center mx-auto">
                    <Pressable className="py-5 mx-3.5 w-44 h-16 bg-red-400 rounded-full" onPress={() => resetVal()}>
                        <Text className="text-center text-white">Reset</Text>
                    </Pressable>
                    <Pressable className="m-3 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center" onPress={() => handlePress('(')}>
                        <Text className="text-white text-lg">(</Text>
                    </Pressable>
                    <Pressable className="m-3 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center" onPress={() => handlePress(')')}>
                        <Text className="text-white text-lg">)</Text>
                    </Pressable>
                </View>

                <View className="flex flex-row justify-center items-center mx-auto ">
                    {['1','2','3','+'].map((char) => (
                        <Pressable
                            key={char}
                            className="m-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center"
                            onPress={() => handlePress(char)}
                        >
                            <Text className="text-white text-lg">{char}</Text>
                        </Pressable>                    ))}
                </View>

                <View className="flex flex-row justify-center items-center mx-auto ">
                    {['4','5','6','-'].map((char) => (
                        <Pressable
                            key={char}
                            className="m-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center"
                            onPress={() => handlePress(char)}
                        >
                            <Text className="text-white text-lg">{char}</Text>
                        </Pressable>
                    ))}
                </View>

                <View className="flex flex-row justify-center items-center mx-auto ">
                    {['7','8','9','*'].map((char) => (
                        <Pressable
                            key={char}
                            className="m-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center"
                            onPress={() => handlePress(char)}
                        >
                            <Text className="text-white text-lg">{char}</Text>
                        </Pressable>                    ))}
                </View>

                <View className="flex flex-row justify-center items-center mx-auto ">
                    <Pressable onPress={deleteLastChar} className="m-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center">
                        <Image source={require('./img/backspace.png')} className="w-5 h-5"  />
                    </Pressable>
                    <Pressable className="m-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center"onPress={()=>handlePress('0')}><Text className="text-white text-lg" >0</Text></Pressable>
                    <Pressable className="m-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center" onPress={()=>calculateResult()}><Text className="text-white text-lg" >=</Text></Pressable>
                    <Pressable className="m-4 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center" onPress={()=>handlePress('/')}><Text className="text-white text-lg">/</Text></Pressable>
                </View>
            </View>
        </View>
    );
};
export default Calculator;
