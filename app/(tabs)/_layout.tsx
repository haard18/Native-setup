import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
const TabIcon = ({ icon, color, name, focused }: any) => {
    return (
        <View className='item-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6 m-auto mt-8'
            />
            <Text
                className={`w-20 text-center ${focused ? ' font-pmedium' : 'font-pregular'} text-xs text-white`}
            >{name}</Text>
        </View>
    )
}
const TabLayout = () => {
    return (
        <>
            <Tabs

                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#cdcdE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 84
                    }
                }}
            >
                <Tabs.Screen name='home'

                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.home}
                                color={color}
                                focused={focused}
                                name='Home'
                            />
                        )
                    }}
                />
                <Tabs.Screen name='bookmark'

                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.bookmark}
                                color={color}
                                focused={focused}
                                name='Bookmark'
                            />
                        )
                    }}
                />
                <Tabs.Screen name='create'

                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.plus}
                                color={color}
                                focused={focused}
                                name='Create'
                            />
                        )
                    }}
                />
                <Tabs.Screen name='profile'

                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.profile}
                                color={color}
                                focused={focused}
                                name='Profile'
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabLayout