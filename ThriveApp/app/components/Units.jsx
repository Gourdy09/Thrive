import { View, Text } from 'react-native'
import React from 'react'

const Units = ({units}) => {
  return (
    <View className={`border-l-2 border-darkborder pl-2 h-12 items-center justify-center focus:border-secondary`}>
      <Text className="text-gray font-rregular text-sm px-0">{units}</Text>
    </View>
  )
}

export default Units