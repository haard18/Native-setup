import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import {createUser} from '../../lib/appwrite'
const Signup = () => {
  const [form, setForm] = useState({
    username:'',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSumbitting] = useState(false)

  const submit = async() => { 
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields')
    }
    setIsSumbitting(true)
    router.replace('/home')
    // createUser()
    try {
      const result=await createUser(form.username,form.email,form.password)
    } catch (error) {
      Alert.alert('Error', 'Failed to Create Account')
    }
    
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-fulL justify-center min-h-[85vh] px-4 my-6 '>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className='text-2xl text-white text-semibold font-psemibold my-10'>Log in to Aora</Text>
          <FormField
            title="Username"
            placeholder='Enter your username'
            value={form.username}
            // @ts-expect-error: Unreachable code error
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles='my-3'
            keyBoardType='default'
          />
          <FormField
            title="Email"
            placeholder='Enter your email'
            value={form.email}
            // @ts-expect-error: Unreachable code error
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='my-3'
            keyBoardType='email-address'
          />
          <FormField
            placeholder='Enter your password'
            title="Password"
            value={form.password}
            // @ts-expect-error: Unreachable code error
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='my-3'
            keyBoardType='default'
          />
          <CustomButton
            title='Login'
            handlePress={submit}
            containerStyles='mt-7'
            isloading={isSubmitting}
            textStyles='text-lg'
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-white text-lg font-pregular'>
              Have an account already?
            </Text>
            <Link href="/sign-in" className='font-psemibold text-secondary-100 text-lg'>SignUp</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup