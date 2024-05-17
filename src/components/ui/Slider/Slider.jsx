import { View, Text, ScrollView, Animated } from "react-native";
import ColoredScrollBar from "react-native-colored-scrollbar";
import styles from "./sliderStyles";
import { useRef, useState } from "react";

const Slider = ({ data, width, height }) => {
    const sliderStyle = {
        width: width,
        height: height,
    };

    const [completeScrollBarWidth, setCompleteScrollBarWidth] = useState(1);
    const [visibleScrollBarWidth, setVisibleScrollBarWidth] = useState(0);
    const [indicatorOpacity, setOpacity] = useState(new Animated.Value(0));
    const scrollIndicator = useRef(new Animated.Value(0)).current;

    const scrollIndicatorSize =
        completeScrollBarWidth > visibleScrollBarWidth
            ? (visibleScrollBarWidth * visibleScrollBarWidth) / completeScrollBarWidth - 40
            : visibleScrollBarWidth - 40;

    const difference = visibleScrollBarWidth > scrollIndicatorSize ? visibleScrollBarWidth - scrollIndicatorSize : 1;

    const scrollIndicatorPosition = Animated.multiply(scrollIndicator, visibleScrollBarWidth / completeScrollBarWidth).interpolate({
        inputRange: [0, difference],
        outputRange: [0, difference],
        extrapolate: "clamp",
    });

    const fade = (value) => {
        Animated.timing(indicatorOpacity, {
            toValue: value,
            duration: 400,
            useNativeDriver: true,
        }).start();
    };

    const Indicator = () => (
        <Animated.View
            style={{
                opacity: 1,
                // width: '100%',
                height: 2,
                backgroundColor: "#D6D7E0",
                borderRadius: 8,
                marginLeft: 20,
                marginRight: 20,
                justifyContent: "center",
            }}
        >
            <Animated.View
                style={{
                    height: 4,
                    borderRadius: 8,
                    backgroundColor: "#333863",
                    width: scrollIndicatorSize,
                    transform: [{ translateX: scrollIndicatorPosition }],
                }}
            />
        </Animated.View>
    );

    return (
        <View style={{ flexDirection: "column" }}>
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 20 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(width, height) => {
                    setCompleteScrollBarWidth(width);
                }}
                onLayout={({
                    nativeEvent: {
                        layout: { width },
                    },
                }) => {
                    setVisibleScrollBarWidth(width);
                }}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollIndicator } } }], { useNativeDriver: false })}
                onMomentumScrollEnd={() => fade(0)}
                onScrollBeginDrag={() => fade(1)}
                scrollEventThrottle={16}
            >
                <View style={styles.container}>
                    {data.map((item, index) => (
                        <View key={index} style={[styles.slide, sliderStyle]}>
                            <Text style={styles.title}>{item.title}</Text>
                            {item.text && <Text style={styles.text}>{item.text}</Text>}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Indicator />
        </View>
    );
};

export default Slider;
