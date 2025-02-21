import React from 'react'
import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import {SIZES} from "../../../constants";

import styles, {btn, btnText} from './tabs.style'

function TabButton({ name, activeTab, onHandleSearchType }) {
    return (
        <TouchableOpacity
            style={btn(name, activeTab)}
            onPress={onHandleSearchType}
        >
            <Text style={btnText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={tabs}
      renderItem={({ item }) => (
          <TabButton
              name={item}
              activeTab={activeTab}
              onHandleSearchType={() => setActiveTab(item)}
          />
      )}
      contentContainerStyle={{ columnGap: SIZES.small /2 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      horizontal={true}
      >

      </FlatList>
    </View>
  )
}

export default Tabs