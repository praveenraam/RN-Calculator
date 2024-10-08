import { Pressable, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Parser } from 'expr-eval';
import History from './components/History';
import { getFromAsyncStorage, removeFromAsyncStorage, saveToAsyncStorage } from './asyncStorageHelper';
import OptionsComponent from './components/OptionsComponent';

const Calculator = () => {

    const [val,setVal] = useState('');
    const [history,setHistory] = useState<String[]>([]);
    const parser = new Parser();
    const [fontSize, setFontSize] = useState(40);
    const [showHistory,setShowHistory] = useState(false);
    const [showOptions,setShowOptions] = useState(false);

    useEffect(() => {
        const loadHistory = async (): Promise<void> => {
            const storedHistory = await getFromAsyncStorage('CalculatorHistory');
            setHistory(storedHistory);
        };

        loadHistory();
    }, []);

    const handlePress = (input:String) => {
        const operators = ['+', '-', '*', '/'];
        let lastChar = val.slice(-1);

        // Handling multiply Operators
        if (operators.includes(input) && operators.includes(lastChar)) {
            setVal(val.slice(0, -1) + input);
        }
        else {
            setVal(val + input);
        }

        // Handling Font Size
        if (val.length >= 17) {
            setFontSize(30);
        } else if (val.length >= 10) {
            setFontSize(35);
        } else {
            setFontSize(40);
        }
    };

    const calculateResult = () => {
        try{
            let sanitizedVal = val;

            // Handling the Ops at the end and the beginning of the val
            sanitizedVal = sanitizedVal.replace(/^(?!-)[+*/-]+/, '');
            sanitizedVal = sanitizedVal.replace(/[+*/-]+$/, '');

            sanitizedVal = sanitizedVal.replace(/([+\-*/])\1+/g, '$1');

            const result = parser.evaluate(sanitizedVal);
            updateHistory('(' + sanitizedVal + ') = ' + result + '   ');
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

    const updateHistory = async (entry:String ) =>{
        const newHistory = [entry,...history].slice(0,5);
        setHistory(newHistory);
        await saveToAsyncStorage('CalculatorHistory',newHistory);
    };

    const deleteLastChar = () => {
        setVal(val.slice(0,-1));
    };

    const displayError = (error: Error) =>{
        setVal('Error : Enter Number and Operations in correct format   ');
        setFontSize(20);
        setTimeout(() => {
            setVal(' ');
            setFontSize(40);
        }
        ,3000);
    };

    const resetVal = () => {
        setVal('');
        setFontSize(40);
    };

    const toggleHistory = () => {
        setShowHistory(!showHistory);
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const selectHistory = (entry:string) => {
        setVal(entry);
        toggleHistory;
    };

    const clearHistory = async () => {
        await removeFromAsyncStorage('CalculatorHistory');
        setHistory([]);
    };

    return (
        <View className="grid grid-rows-4 grid-flow-row gap-10 bg-black h-screen" style={{backgroundColor:'rgb(21, 21, 21)'}}>
            <View className="h-1/4">

                <Pressable onPress={toggleOptions} className="absolute top-1 right-0 p-3 z-10">
                <Image source={require('../assets/img/more.png')} className="w-7 h-7" />
                </Pressable>

                {showOptions && (
                <View className="absolute top-0 right-0 bg-gray-500 z-20">
                    <OptionsComponent onClose={toggleOptions} />
                </View>
                )}

                <View className="p-3 h-full">
                    <Pressable onPress={toggleHistory}>
                        {showHistory ? (
                        <Image source={require('../assets/img/cross.png')} className="w-10 h-10" />
                        ) : (
                        <Image source={require('../assets/img/history.png')} className="w-10 h-10" />
                        )}
                    </Pressable>

                    {showHistory ? (
                        <History history={history} onSelectHistory={selectHistory} onClearHistory={clearHistory} />
                    ) : (
                        <Text
                        className="text-white text-right absolute bottom-0 right-0 mr-10 ml-10"
                        style={{ fontSize: 32 }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        >
                        {val}
                        </Text>
                    )}
                </View>
            </View>

            <View className="grid grid-rows-4 grid-flow-row gap-4 ">


                <View className="flex flex-row justify-center items-center mx-auto">
                    <Pressable className="py-5 mx-3.5 w-44 h-16 bg-red-400 rounded-full" onPress={() => resetVal()}>
                        <Text className="text-center text-white">Reset</Text>
                    </Pressable>
                    <Pressable className="m-3 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center" onPress={() => handlePress('(')}>
                        <Text className="text-white text-lg">(</Text>
                    </Pressable>
                    <Pressable className="m-3 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center" onPress={() => handlePress(')')}>
                        <Text className="text-white text-lg">)</Text>
                    </Pressable>
                </View>

                <View className="flex flex-row justify-center items-center mx-auto ">
                    {['1','2','3','+'].map((char) => (
                        <Pressable
                            key={char}
                            className="m-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center"
                            onPress={() => handlePress(char)}
                        >
                            <Text className="text-white text-lg">{char}</Text>
                        </Pressable>                    ))}
                </View>

                <View className="flex flex-row justify-center items-center mx-auto ">
                    {['4','5','6','-'].map((char) => (
                        <Pressable
                            key={char}
                            className="m-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center"
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
                            className="m-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center"
                            onPress={() => handlePress(char)}
                        >
                            <Text className="text-white text-lg">{char}</Text>
                        </Pressable>                    ))}
                </View>

                <View className="flex flex-row justify-center items-center mx-auto ">
                    <Pressable onPress={deleteLastChar} className="m-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                        <Image source={require('../assets/img/backspace.png')} className="w-5 h-5"  />
                    </Pressable>
                    <Pressable className="m-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center"onPress={()=>handlePress('0')}><Text className="text-white text-lg" >0</Text></Pressable>
                    <Pressable className="m-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center" onPress={()=>calculateResult()}><Text className="text-white text-lg" >=</Text></Pressable>
                    <Pressable className="m-4 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center" onPress={()=>handlePress('/')}><Text className="text-white text-lg">/</Text></Pressable>
                </View>
            </View>
        </View>
    );
};
export default Calculator;
