import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <View className="bg-black">
      <Redirect href="/home"/>
    </View>
    
  )
}

export default index