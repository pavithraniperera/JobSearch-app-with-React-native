import React from 'react'
import {useState} from "react";

import { View, Text ,TextInput,TouchableOpacity,FlatList,Image} from 'react-native'
import {useRouter} from "expo-router";
import {SIZES,icons} from "../../../constants";
import styles, {tab, tabText} from './welcome.style'
import search from "../../../styles/search";
const jobTypes=["Full-time","Part-time","Contractor"]

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello Pavithrani</Text>
          <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
     <View style={styles.searchContainer}>
         <View style={styles.searchWrapper}>
             <TextInput
             style={styles.searchInput}
             value={searchTerm}
             onChangeText={(text) => setSearchTerm(text)}
             placeholder={"What are you looking for..."}

             />

         </View>
         <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
             <Image
                 source={icons.search}
                 resizeMode="contain"
                 style={styles.searchBtnImage}
             />
         </TouchableOpacity>

     </View>

      <View style={styles.tabsContainer}>
          <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
              <TouchableOpacity
                  style={tab(activeJobType,item)}
                  onPress={()=>{
                      setActiveJobType(item)
                      router.push(`/search/${item}`)
                  }
              }

              >
                  <Text style={tabText(activeJobType,item)}>{item}</Text>
              </TouchableOpacity>
          )}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal={true}
          />


      </View>

    </View>
  )
}

export default Welcome