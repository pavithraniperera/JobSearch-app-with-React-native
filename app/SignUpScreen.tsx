import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView} from "react-native";
import {Stack, useRouter} from "expo-router";
import {COLORS, icons, SIZES} from "../constants";
import axios from "axios";
import {ScreenHeaderBtn} from "../components";

const LoginScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const handleSignUp = async () => {
        try {
            //const res = await axios.post('http://192.168.110.76:3002/auth/register', {name, email, password });
            Alert.alert('Success', 'SignUp in successfully');
            router.push("LoginScreen");
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'SignUp failed');
        }
    };

    return (


        <View style={styles.container}>

            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />
    <Text style={styles.title}>Sign Up From Here</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={COLORS.gray}
                secureTextEntry
                value={name}
                onChangeText={setName}
            />

    <TextInput
    style={styles.input}
    placeholder="Email"
    placeholderTextColor={COLORS.gray}
    keyboardType="email-address"
    value={email}
    onChangeText={setEmail}
    />

    <TextInput
    style={styles.input}
    placeholder="Password"
    placeholderTextColor={COLORS.gray}
    secureTextEntry
    value={password}
    onChangeText={setPassword}
    />

    <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
    <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

    </View>


);
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: SIZES.xLarge,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: COLORS.white,
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    btnText: {
        color: COLORS.white,
        fontSize: SIZES.medium,
        fontWeight: "bold",
    },
    forgotText: {
        color: COLORS.secondary,
        fontSize: SIZES.small,
        marginTop: 10,
    },
    clickHere: {
        color: COLORS.primary,
        fontSize: SIZES.medium,
        marginTop: 20,
    },
});
