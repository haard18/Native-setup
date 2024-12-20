import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';

type Video = {
    title: string;
    thumbnail: string;
    video: string;
    creator: {
        username: string;
        avatar: string;
    };
};

type VideoCardProps = {
    video: Video;
};

const VideoCard: React.FC<VideoCardProps> = ({ video: { title, thumbnail, video, creator: { username, avatar } } }) => {
    const[play, setPlay] = useState(false)
    return (
        <View className='flex-col items-center px-4 mb-14'>
            <View className='flex-row gap-3 items-start'>
                <View className='justify-center items-center flex-1 flex-row'>
                    <View className='w-[46px] h-[46px] rounded-lg border-secondary-200 border-2 justify-center items-center p-0.5'>
                        <Image source={{ uri: avatar }} className='w-full h-full rounded-lg' resizeMode='contain' />
                    </View>
                    <View className='justiyf-center flex-1 ml-3 gap-y-1'>
                        <Text className='text-sm  font-psemibold text-white' numberOfLines={1}>{title}</Text>
                        <Text className='text-xs font-pregular text-gray-100'>{username}</Text>

                    </View>
                    <View className='pt-2'>
                        <Image source={icons.menu} className='w-5 h-5' resizeMode='contain' />
                    </View>
                </View>

            </View>
            {play?(<Text className='text-white'>PLaying</Text>):(
                <TouchableOpacity activeOpacity={0.7} onPress={()=>{setPlay(true)}} className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'>
                    <Image source={{uri: thumbnail}} className='w-full h-full rounded-xl' resizeMode='cover' />
                    <Image source={icons.play} className='w-12 h-12 absolute' resizeMode='contain' />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default VideoCard