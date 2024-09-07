import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HistoryProps{
    history:string[];
}

const History: React.FC<HistoryProps>  = ({history}) => {

  return (
    <View className="w-full p-4">
        {
            history.length === 0 ?
        (
            <Text className="text-white text-xl">No History</Text>
        ) : (
            history.map((entry, index) => (
            <Text key={index} className="text-white text-lg" >
                {entry}
            </Text>
        )))}
    </View>
  )
}

export default History

const styles = StyleSheet.create({})