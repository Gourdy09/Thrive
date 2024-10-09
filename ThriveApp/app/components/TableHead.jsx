import { View, Text } from 'react-native'
import React from 'react'

const TableHead = () => {
  return (
    <View className="px-4 w-11/12 h-16 bg-black-100 rounded-t-xl bg-black flex-row justify-around items-center border-b-0 ml-4">
      <Text className="text-gray">Spot</Text>
      <Text className="text-gray">|       Name      |</Text>
      <Text className="text-gray">Sugar</Text>
    </View>
  )
}

export default TableHead