import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONT, SIZES, images, icons } from '../../../constants'; // Import constants and images
import styles from './profile.style'
import {Stack} from "expo-router";
import {ScreenHeaderBtn} from "../../../components";
import {router} from "expo-router";

const Profile = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen  options={{
                headerTitle:"",
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.menu}
                        dimension="60%"
                        handlePress={() => router.push("Home/HomeScreen")}
                    />
                ),
            }} />
            <View style={styles.headerContainer}>
                <Image source={images.profile} style={styles.profileImage} />
                <Text style={styles.username}>Pavithrani Perera</Text>
                <Text style={styles.email}>pererapavithrani@gmail.com</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Personal Info</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Full Name:</Text>
                    <Text style={styles.value}>Pavithrani Perera</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.value}>Sri Lanka, Negombo</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Settings</Text>
                <TouchableOpacity style={styles.button} onPress={() => alert('Change Password')}>
                    <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    );
};



export default Profile;
