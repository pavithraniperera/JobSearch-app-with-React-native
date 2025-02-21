import { StyleSheet } from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },

});

export const btnText = (name, activeTab) => ({
  fontFamily: "DMMedium",
  fontSize: SIZES.small,
  color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
})

export const btn = (name, activeTab) => ({
  paddingVertical: SIZES.medium,
  paddingHorizontal: SIZES.xLarge,
  backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
  borderRadius: SIZES.medium,
  marginLeft: 2,
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
})

export default styles;
