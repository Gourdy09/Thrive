import { View, AppState } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { ScrollView } from 'react-native'
import { FlatList, StyleSheet } from 'react-native'
import LoggedItem from '../components/LoggedItem'
import TableHead from '../components/TableHead'
import icons from '../../constants/icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Food = () => {
  const [name, setName] = useState("")
  const [sugar, setSugar] = useState("")
  const [log, setLog] = useState([])
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  state = {
    lastCheckedDate: null,
  }

  async function clearListIfNewDay() {
    try {
      const now = new Date();
      const today = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      console.log("Today: " + today);

      // Retrieve the last checked date from AsyncStorage
      const lastCheckedDateStr = await AsyncStorage.getItem('lastCheckedDate');
      const lastCheckedDate = lastCheckedDateStr ? new Date(lastCheckedDateStr) : null;
      const lastDay = lastCheckedDate ? lastCheckedDate.toISOString().split('T')[0] : null;
      console.log("Last Checked Date: " + lastDay);

      // Check if it's a new day or if the app state is not 'active'
      if (lastDay !== today || appState.current !== 'active') {
        console.log("Change detected, clearing list.");
        setLog([]);
        // Save the current date in AsyncStorage
        await AsyncStorage.setItem('lastCheckedDate', today);
      }
    } catch (err) {
      console.log('Error in clearListIfNewDay:', err);
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        clearListIfNewDay();
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove(); // Cleanup the subscription on unmount
    };
  }, []);

  const renderLoggedItems = ({item, index}) => {
    return (
      <LoggedItem
        index={index + 1}
        name={item.food}
        sugar={item.sugarContent}
      />
    )
  }

  const handleLog = () =>{
    setLog([...log, {id: Date.now().toString(), food: name, sugarContent: `${sugar.length > 0 ? sugar: 0}`}])
  }
  
  const handleDelete = () =>{
    log.pop();
    setLog([...log]);
  }

  return (
    <SafeAreaView className="bg-black flex-1">
        <View className="flex-1 flex-col bg-black items-center w-full">
          {/* Logging Stuff */}
          <View>
            <FormField
              name="FoodName"
              value={name.name}
              placeholder="Enter Name Of Food"
              handleChangeText={(text)=>{setName(text)}} 
              otherStyles="w-11/12 mt-5"
            />
              <FormField
                name="SugarContent"
                value={sugar.sugar}
                placeholder="Enter Sugar Content"
                handleChangeText={(text)=>{setSugar(text)}} 
                otherStyles="w-11/12 mt-5"
                unit="g"
              />
          </View>

          <View className="flex-row justify-between items-center">
            <CustomButton
              otherStyles="w-6/12 mt-5 mb-5"
              handlePress={() => {handleLog()}}
              text={"Log"}
            />
            <CustomButton
              otherStyles="w-3/12 mt-5 mb-5 ml-4"
              handlePress={() => {handleDelete()}}
              image={icons.deleteicon}
              imageStyle={"w-10 h-10"}
            />
          </View>

          {/* Data Display */}
          <View className="bg-black rounded-xl border-darkborder border-2 px-1 h-[60%] pb-2 w-11/12">
            <TableHead/>
            <FlatList data={log} renderItem={renderLoggedItems} contentContainerStyle={styles.list}/>
          </View>
            
            
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  }
})

export default Food