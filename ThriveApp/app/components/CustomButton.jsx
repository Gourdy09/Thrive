import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import icons from '../../constants/icons'

const CustomButton = ({otherStyles, handlePress, image, text, imageStyle}) => {
  return (
    <View className={`bg-primary w-20 h-16 rounded-xl ${otherStyles}`}>
      <Pressable className={`items-center ${image == null ? "mt-4" : "mt-3"}`} onPress={handlePress}>
        {text != null ? <Text className="font-rregular text-xl">{text}</Text>: null}
        {image != null ? <Image source={image} className={`${imageStyle}`}/> : null}
      </Pressable>
    </View>
  )
}

export default CustomButton