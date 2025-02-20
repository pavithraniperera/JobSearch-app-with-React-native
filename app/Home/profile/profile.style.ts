import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        flexGrow: 1,
        backgroundColor: COLORS.lightWhite,
        padding: SIZES.medium,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: SIZES.large,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: SIZES.small,
    },
    username: {
        fontFamily: FONT.bold,
        fontSize: 24,
        color: COLORS.primary,
    },
    email: {
        fontFamily: FONT.medium,
        fontSize: 16,
        color: COLORS.secondary,
    },
    section: {
        marginBottom: SIZES.medium,
    },
    sectionTitle: {
        fontFamily: FONT.bold,
        fontSize: 18,
        color: COLORS.primary,
        marginBottom: SIZES.small,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.small,
    },
    label: {
        fontFamily: FONT.medium,
        fontSize: 16,
        color: COLORS.gray2,
    },
    value: {
        fontFamily: FONT.regular,
        fontSize: 16,
        color: COLORS.primary,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.small,
        borderRadius: SIZES.medium,
        marginBottom: SIZES.small,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: FONT.medium,
        fontSize: 16,
        color: COLORS.lightWhite,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: SIZES.large,
    },
    iconButton: {
        padding: SIZES.small,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        shadowColor: COLORS.gray2,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    icon: {
        width: 30,
        height: 30,
    },
});
export default styles;