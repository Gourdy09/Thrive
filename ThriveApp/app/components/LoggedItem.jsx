import { View, Text } from 'react-native'
import React from 'react'

const LoggedItem = ({index, name, sugar}) => {
    const maxlimit = 25;
  return (
    <View className="border-2 border-darkborder w-11/12 h-16 pl-0 pr-2 bg-black-100 rounded-2xl bg-black flex-row justify-between items-center my-0.5">
      <Text className="text-primary border-r-2 border-darkborder px-2 py-2">#{index}</Text>
      <Text className="text-gray">{((name).length > maxlimit) ? (((name).substring(0,maxlimit-3)) + '...') : name }</Text>
      <Text className="text-secondary border-l-2 border-darkborder px-2 py-2">{sugar}g</Text>
    </View>
  )
}

export default LoggedItem