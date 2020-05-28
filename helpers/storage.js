
import { AsyncStorage } from 'react-native';

const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.log(error)
        // Error saving data
    }
};

const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {

            // console.log(value);
            return value;
        }
    } catch (error) {
        // Error retrieving data
    }
};

export {
    storeData,
    retrieveData
};