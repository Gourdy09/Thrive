import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';

import Header from '../components/Header';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import Units from '../components/Units';
import Chart from '../components/Chart';
import { calculateForecast } from '../../assets/predictor';

const Home = () => {
  const [form, setForm] = useState({ bloodsugar: '' });
  const [selected, setSelected] = useState('0');
  const [points, setPoints] = useState([{ sugar: 0, time: 0 }]);
  
  const data = Array.from({ length: 25 }, (_, i) => ({
    key: i.toString(),
    value: (i * 0.5).toFixed(1)
  }));

  return (
    <SafeAreaView className="bg-black flex-1 flex-col">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Header />
        <View className="w-5/6 h-[250px] mt-3 ml-5">
          <Chart DATA={points} />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1">
            {/* Logging Stuff */}
            <View className="flex-row px-3 mt-7 justify-end">
              <FormField
                name="Bloodsugar"
                value={form.bloodsugar}
                placeholder="Enter Blood Sugar"
                handleChangeText={(text) => setForm({ bloodsugar: text.replace(/[^0-9.]+/g, '') })}
                otherStyles="w-11/12 mr-5"
                unit="mg/dL"
                extra={<Units />}
              />
            </View>
            {/* Food or Drink Time */}
            <View className="px-3 items-baseline flex-row mt-3 justify-center">
              <Text className="text-gray">Last food or drink  </Text>
              <SelectList
                className="w-12"
                data={data}
                setSelected={setSelected}
                defaultOption={data[0]}
                search={false}
                maxHeight={100}
                boxStyles={{ borderColor: "#FFC400", minWidth:72, justifyContent: 'center' }}
                arrowicon={<Text />}
                closeicon={<Text />}
                inputStyles={{ color: "#FFC400" }}
                dropdownTextStyles={{ color: "#B1B1B1" }}
              />
              <Text className="text-gray">  hours ago</Text>
            </View>
            {/* Log Button */}
            <View className="items-center justify-center mt-9 mb-10">
              <CustomButton
                otherStyles="w-6/12"
                handlePress={() => {
                  setPoints(calculateForecast(form.bloodsugar.length > 0 ? parseFloat(form.bloodsugar) : 100, selected));
                }}
                text="Log"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
