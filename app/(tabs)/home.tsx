import { View, Text, FlatList, Image, TouchableOpacity, RefreshControl, RefreshControlComponent } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, icons } from '../../constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'
const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  return (
    <SafeAreaView className='bg-primary h-full'>

      <FlatList
        data={[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.id}</Text>
        )}
        ListHeaderComponent={() => {
          return (
            <View className='my-6 px-4 space-y-6'>
              <View className='justify-between items-center flex-row mb-6'>
                <View>
                  <Text className='font-pmedium text-sm text-gray-100'>
                    Welcome Back
                  </Text>
                  <Text className='text-2xl font-psemibold text-white'>
                    Haard Solanki
                  </Text>
                </View>
                <View className='mt-5'>
                  <Image source={images.logoSmall}
                    className='w-9 h-10'
                    resizeMode='contain' />
                </View>
                {/* <View> */}
                {/* </View> */}
              </View>
              <SearchInput
                // title='Search'
                placeholder='Search for anything'
                value=''
                handleChangeText={() => { }}
                keyBoardType='default'
                otherStyles=''

              />
              <View className='w-full flex-1 pt-5 pb-8'>
                <Text className='text-gray-100 text-lg font-pregular mb-3'>
                  Latest Videos
                </Text>
                <Trending posts={[]} />
              </View>
            </View>
          );

        }}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos Found" subTitle="No videos found for the search term" />
          refreshControl={<RefreshControl />}
        )}
      />

    </SafeAreaView>
  )
}

export default Home