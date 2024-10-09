import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'
import * as SystemUI from 'expo-system-ui';

const TabIcon = ({icon, color, name, focused}) =>{
    return(
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor= {color}
                className="w-6 h-6"
            />
        </View>
    )
}

const TabsLayout = () => {
    SystemUI.setBackgroundColorAsync("black");
  return (
    <>
        <Tabs screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: '#FFC400', tabBarInactiveTintColor: '#B1B1B1', tabBarStyle: {backgroundColor: '#181A1B', borderTopWidth: 1, borderTopColor: '#F2DE3D', height: 64}, tabBarHideOnKeyboard: true}}>

            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="food"
                options={{
                    title: 'Food',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.food}
                            color={color}
                            name="Food"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout