import {  StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import { Redirect,router } from 'expo-router'
import '../global.css'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '@/components/CustomButton'
import { useGlobalContext } from '@/context/GlobalProvider'
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
const index = () => {
  const{isloading,isLoggedin}=useGlobalContext()
  if(isLoggedin && !isloading){
    return <Redirect href='/home'/>
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
          <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />
          <View className='relative mt-5'>
            <Text className='font-bol text-center text-3xl text-white'>
              Increase  Aura with
              <Text className='text-secondary-200'> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[90px] mt-8 h-[15px] absolute -bottom-2 -right-4'
              resizeMode='contain' />
          </View>
          <Text className='text-sm  font-pregular text-gray-100 mt-7 text-center'>
            Where Creativity Meets Innovation: embark on a Journey of
            limitless exploration
          </Text>
          <CustomButton title={"Continue with Email"} handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7" textStyles='' isloading={false}/>

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})