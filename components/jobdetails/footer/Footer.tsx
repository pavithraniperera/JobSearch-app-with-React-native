import React, {useState} from 'react'
import { View, Text ,TouchableOpacity,Image,Linking} from 'react-native'
import {icons} from "../../../constants";

import styles from './footer.style'
import {useNavigation} from "expo-router";


const Footer = ({url}) => {
    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };


    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.likeBtn} onPress={toggleLike}>
            <Image
                source={isLiked ? icons.heart : icons.heartOutline} // Change icon dynamically
                resizeMode="contain"
                style={styles.likeBtnImage}
            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.applyBtn} onPress={() => {Linking.openURL(url)}}>
            <Text style={styles.applyBtnText}>Apply For Job</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Footer;