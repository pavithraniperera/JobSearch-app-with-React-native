import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.small,
  },

});
export const btnImg = (dimension) => ({
  width: dimension,
  height: dimension,
  borderRadius: SIZES.small / 1.25,
  marginRight: 20
});

export default styles;
