
import {View,Text,SafeAreaView,ScrollView,ActivityIndicator,RefreshControl} from "react-native";
import {Stack,useRouter,useGlobalSearchParams} from "expo-router";
import {useCallback, useState} from "react";
import { Share } from "react-native";
import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn,
    Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import {useFetch} from "../../hook/useFetch";
import styles from "../../styles/search";
import React from "react";
const tabs = ["About", "Qualifications", "Responsibilities"];
const JobDetails = () => {
    const router = useRouter();
    const params = useGlobalSearchParams()
    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: params.id,
    });

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
        setRefreshing(false)
    }, []);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTabContent = () => {
        switch (activeTab) {
            case "Qualifications":
                return (
                    <Specifics
                        title='Qualifications'
                        points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                    />
                );

            case "About":
                return (
                    <JobAbout info={data[0].job_description ?? "No data provided"} />
                );

            case "Responsibilities":
                return (
                    <Specifics
                        title='Responsibilities'
                        points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                    />
                );

            default:
                return null;
        }
    };
    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: "Check out this  app! ",
                url: "", // Replace with your actual URL
                title: "Share this App",
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log("Shared via", result.activityType);
                } else {
                    console.log("Shared");
                }
            } else if (result.action === Share.dismissedAction) {
                console.log("Share dismissed");
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    return (
       <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
           <Stack.Screen
               options={{
                   headerStyle: { backgroundColor: COLORS.lightWhite },
                   headerShadowVisible: false,
                   headerBackVisible: false,
                   headerLeft: () => (
                       <ScreenHeaderBtn
                           iconUrl={icons.left}
                           dimension='60%'
                           handlePress={() => router.back()}
                       />
                   ),
                   headerRight: () => (
                       <ScreenHeaderBtn iconUrl={icons.share} dimension='60%'
                                        handlePress={handleShare}
                       />
                   ),
                   headerTitle: "",
               }}
           />

           <>
               <ScrollView showsVerticalScrollIndicator={false}
                           refreshControl={
                               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
               >
                   {isLoading ? (
                       <ActivityIndicator size='large' color={COLORS.primary} />
                   ) : error ? (
                       <Text>Something went wrong</Text>
                   ) : data.length === 0 ? (
                       <Text>No data available</Text>
                   ) : (
                       <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                           <Company
                               companyLogo={data[0].employer_logo}
                               jobTitle={data[0].job_title}
                               companyName={data[0].employer_name}
                               location={data[0].job_country}
                           />

                           <JobTabs
                               tabs={tabs}
                               activeTab={activeTab}
                               setActiveTab={setActiveTab}
                           />

                           {displayTabContent()}
                       </View>
                   )}


            </ScrollView>

               <JobFooter url={data[0]?.job_apply_link ?? 'https://careers.google.com/jobs/results/'} />
           </>

       </SafeAreaView>
    )
}
export default JobDetails;