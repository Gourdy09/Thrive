import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '../../constants/images.js'

const Header = () => {
  return (
    <View className="bg-primary py-2 flex-row justify-center">
      <Image source={images.logo} className="w-14 h-14"/>
    </View>
  )
}

export default Header