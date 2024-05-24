import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import CircleButton from "../CircleButton/CircleButton";

import Hide from "../../../../assets/svg/myProjectsMenu/Hide";
import Edit from "../../../../assets/svg/myProjectsMenu/Edit";
import Delete from "../../../../assets/svg/myProjectsMenu/Delete";
import Share from "../../../../assets/svg/myProjectsMenu/Share";
import MakePrivate from "../../../../assets/svg/myProjectsMenu/MakePrivate";

import styles from "./propertyCardProjectsStyles";

const PropertyCardProjects = ({ image, title, subtitle, width, height, amount }) => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const handleOpen = () => {
        setIsMoreOpen(!isMoreOpen);
    };

    return (
        <>
            <View style={[styles.imageContent, { width }]}>
                <Image source={image} style={{ width, height, borderRadius: 16 }} />
                <CircleButton type={isMoreOpen ? "close" : "more"} onClick={handleOpen} />
                <View style={styles.imageInfo}>
                    <Text style={styles.title}>{title}</Text>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

                        <Text style={styles.subtitle}>from ${amount}</Text>
                    </View>
                </View>
            </View>
            {isMoreOpen && (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.point}>
                        <Text style={styles.text}>Hide</Text>
                        <Hide />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.point}>
                        <Text style={styles.text}>Edit</Text>
                        <Edit />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.point}>
                        <Text style={styles.text}>Delete</Text>
                        <Delete />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.point}>
                        <Text style={styles.text}>Share</Text>
                        <Share />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.point, { borderBottomWidth: 0 }]}>
                        <Text style={styles.text}>Make private</Text>
                        <MakePrivate />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default PropertyCardProjects;
