import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import {icons} from "../../../constants";
import styles from './footer.style'

const LikeButton = ({ jobId, likedJobs, setLikedJobs }) => {
    // Check if the job is already liked
    const isLiked = likedJobs.includes(jobId);

    const toggleLike = () => {
        if (isLiked) {
            // Remove from liked jobs
            setLikedJobs(likedJobs.filter((id) => id !== jobId));
        } else {
            // Add to liked jobs
            setLikedJobs([...likedJobs, jobId]);
        }
    };

    return (
        <TouchableOpacity style={styles.likeBtn} onPress={toggleLike}>
            <Image
                source={isLiked ? icons.heart : icons.heartOutline}
                resizeMode="contain"
                style={styles.likeBtnImage}
            />
        </TouchableOpacity>
    );
};

export default LikeButton;
