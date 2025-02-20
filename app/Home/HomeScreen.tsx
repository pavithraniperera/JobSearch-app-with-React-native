import {View,Text,ScrollView,SafeAreaView} from "react-native";
import React, {useState} from 'react';

import {Stack, useRouter} from 'expo-router';
import {COLORS,SIZES,icons,images} from "../../constants";
import {Welcome, Nearbyjobs, Popularjobs, ScreenHeaderBtn} from '../../components'


const HomeScreen = () => {
    const router = useRouter();
    const[searchTerm, setSearchTerm] = useState('');
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite ,margin:10}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            dimension="60%"
                            handlePress={() => router.push("Home/HomeScreen")}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                            handlePress={() => router.push("Home/profile/Profile")}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1,padding:SIZES.medium}}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>

                </View>
            </ScrollView>



        </SafeAreaView>

    )
}
export default HomeScreen;