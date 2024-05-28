import { Text, View, ScrollView, Image, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import CircleButton from '../../ui/CircleButton/CircleButton';

import styles from "./heroStyles";

const Hero = ({ heroData, handleGoBack }) => {
  const statusBarHeight = getStatusBarHeight();
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
        position: "absolute",
        opacity: 1,
        height: 2,
        backgroundColor: "#434248",
        borderRadius: 8,
        left: 20,
        right: 20,
        bottom: 20,
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{
          height: 4,
          borderRadius: 8,
          backgroundColor: "#89898C",
          width: scrollIndicatorSize,
          transform: [{ translateX: scrollIndicatorPosition }],
        }}
      />
    </Animated.View>
  );

  return (
    <View>
      <CircleButton
        type="goBack"
        position={{ top: statusBarHeight + 10, left: 20 }}
        onClick={handleGoBack}
      />
      <CircleButton
        position={{ top: statusBarHeight + 10, right: 20 }}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment='center'
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
        <View style={styles.sliderContainer}>
          {heroData.images.map((img, idx) => (
            <View key={idx} style={styles.slideItem}>
              <Image source={{ uri: img }} style={styles.heroImg} />
              <LinearGradient
                locations={[0.48, 1]}
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
                style={styles.gradient}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <Indicator />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{heroData.name}</Text>
        <Text style={styles.text}>{heroData.location}</Text>
        <Text style={styles.text}>Price from $ {heroData.priceFrom}</Text>
      </View>
    </View>
  )
}

export default Hero;

