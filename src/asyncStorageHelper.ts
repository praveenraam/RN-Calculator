import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToAsyncStorage = async(key:string, value:any): Promise<void> => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key,jsonValue);
    }
    catch(error){
        console.log('Error in Saving the data',error);
    }
};

export const getFromAsyncStorage = async (key:string): Promise<any | null> => {
    try{
        const jsonValue = await AsyncStorage.getItem(key);
        const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : [];
        console.log(jsonValue);
        return Array.isArray(parsedValue) ? parsedValue : [];
    }
    catch(error){
        console.log('Error retrieving Data',error);
        return null;
    }
};

export const removeFromAsyncStorage = async (key:string): Promise<void> => {
    try{
        await AsyncStorage.removeItem(key);
    }
    catch(error){
        console.log('Error in removing the data',error);
    }
};
