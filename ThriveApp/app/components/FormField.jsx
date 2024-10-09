import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Units from './Units'

const FormField = ({name, value, placeholder, handleChangeText, otherStyles, extra, unit, ...props}) => {
  return (
    <View className={`px-4 border-2 border-darkborder w-full h-16 pl-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row ${otherStyles}`}>
      <TextInput className="flex-1 text-gray font-rregular text-sm px-0"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#B1B1B1"
          onChangeText={handleChangeText}
          keyboardType={name==="Bloodsugar" ? 'numeric' : 'default'}
      />
      {unit != null? <Units units={unit}/> : <View/>}
    </View>
  )
}

export default FormField