import { ImageBackground, Text, View } from "react-native";

import styles from "./patternStyles";

const Pattern = ({ data }) => {
    return (
        <View style={{ gap: 12 }}>
            <View style={styles.block}>
                <ImageBackground source={data[0].image} imageStyle={{ borderRadius: 10 }} style={[styles.vertical, styles.image]}>
                    <View style={styles.text}>
                        <Text style={styles.title}>{data[0].title}</Text>
                        <Text style={styles.price}>from $ {data[0].price}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.vertical}>
                    <ImageBackground source={data[1].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                        <View style={styles.text}>
                            <Text style={styles.title}>{data[1].title}</Text>
                            <Text style={styles.price}>from $ {data[1].price}</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={data[2].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                        <View style={styles.text}>
                            <Text style={styles.title}>{data[2].title}</Text>
                            <Text style={styles.price}>from $ {data[2].price}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={styles.horizontal}>
                <ImageBackground source={data[3].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                    <View style={styles.text}>
                        <Text style={styles.title}>{data[3].title}</Text>
                        <Text style={styles.price}>from $ {data[3].price}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.block}>
                <View style={styles.vertical}>
                    <ImageBackground source={data[4].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                        <View style={styles.text}>
                            <Text style={styles.title}>{data[4].title}</Text>
                            <Text style={styles.price}>from $ {data[4].price}</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={data[5].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                        <View style={styles.text}>
                            <Text style={styles.title}>{data[5].title}</Text>
                            <Text style={styles.price}>from $ {data[5].price}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <ImageBackground source={data[6].image} imageStyle={{ borderRadius: 10 }} style={[styles.vertical, styles.image]}>
                    <View style={styles.text}>
                        <Text style={styles.title}>{data[6].title}</Text>
                        <Text style={styles.price}>from $ {data[6].price}</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

export default Pattern;
