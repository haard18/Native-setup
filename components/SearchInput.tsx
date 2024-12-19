import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
const SearchInput = (
    { value, placeholder, handleChangeText, otherStyles, keyBoardType, ...props }:
        { value: string, placeholder: string, handleChangeText: any, otherStyles: string, keyBoardType: string }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (

        <View className={`w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row ${otherStyles}`}>
            <TextInput
                className='flex-1 text-white font-psemibol text-base'
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
            // secureTextEntry={title === 'Password' && !showPassword ? true : false}
            />
            <TouchableOpacity>
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>
        </View>

    )
}

export default SearchInput