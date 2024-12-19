import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton';
import { router } from 'expo-router';
interface EmptyStateProps {
    title: string;
    subTitle: string;
}

const EmptyState = ({ title, subTitle }: EmptyStateProps) => {
    return (
        <View className='justify-center items-center px-4 '>
            <Image source={images.empty} className='w-[270px] h-[215px]' resizeMode='contain' />
            <Text className='font-pmedium text-sm text-gray-100'>
                {title}
            </Text>
            <Text className='text-xl text-center font-psemibold text-white'>
                {subTitle}
            </Text>
            <CustomButton
                title='Create'
                handlePress={() => { router.push('/create') }}
                containerStyles='mt-4 w-full'
                textStyles='text-white'
                isloading={false}
            />
        </View>
    )
}

export default EmptyState