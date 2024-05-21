import React from "react";
import { View, Text, Image } from "react-native";

import CircleButton from "../CircleButton/CircleButton";

import styles from "./propertyCardStyles";

const PropertyCard = ({ image, title, subtitle, width, height, amount, btnType, isButton = true, isTwoButton }) => {
    return (
        <View style={[styles.imageContent, { width }]}>
            <Image source={image} style={{ width, height, borderRadius: 16 }} />
            {isButton && <CircleButton type={btnType} />}
            {isTwoButton && <CircleButton type={btnType} position={{ top: 12, right: 68 }} />}
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
    );
};

export default PropertyCard;
