import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles, {btnImg} from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}:{iconUrl:any,dimension:any,handlePress?: () => void;}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}  onPress={handlePress ? handlePress : undefined}>
      <Image
      source={iconUrl}
      resizeMode='cover'
      style={btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn