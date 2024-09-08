import { Pressable,Text, View, Image } from 'react-native';
import React from 'react';

interface HistoryProps {
    history?: string[];
    onClearHistory: () => void;
}

const History: React.FC<HistoryProps> = ({ history = [], onClearHistory }) => {

    return (
        <View className="w-full p-4">

            {history.length === 0 ? (
                <Text className="text-white text-xl">No History</Text>
            ) : (
                <>
                    {history.map((entry, index) => (
                        <Text key={index} className="text-white text-lg">
                            {entry}
                        </Text>
                    ))}
                    <Pressable onPress={onClearHistory} className="mt-4">
                        <Image source={require('./img/delete.png')} className="w-10 h-10" />
                    </Pressable>
                </>
            )}

        </View>
    );
};

export default History;
