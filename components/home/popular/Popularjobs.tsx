import {useState} from "react";
import { View, Text ,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native'
import {useRouter} from "expo-router";
import {COLORS,SIZES} from "../../../constants";
import styles from './popularjobs.style'
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import {useFetch} from '../../../hook/useFetch'

const Popularjobs = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "developer jobs in chicago",
        num_pages: "1",
    });
    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Popular Jobs</Text>
            <TouchableOpacity >
                <Text style={styles.headerBtn}>Show All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
            {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                 data={data}
                 keyExtractor={(item) => item.job_id}
                 renderItem={({item})=>(
                     <PopularJobCard
                         item={item}
                         selectedJob={selectedJob}
                         handleCardPress={handleCardPress}
                     />
                 )}

                 contentContainerStyle={{columnGap:SIZES.medium}}
                 horizontal={true}/>
            )}
        </View>

    </View>
  )
}

export default Popularjobs