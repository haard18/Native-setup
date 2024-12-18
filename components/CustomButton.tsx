import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isloading }: { title: string, handlePress: any, containerStyles: string, textStyles: string, isloading: boolean }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isloading ? 'opacity-50' : ''}`} disabled={isloading}>
            <Text className={`text-primary font-psemibold text-lg ${textStyles}` }>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton