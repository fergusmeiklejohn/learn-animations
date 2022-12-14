import { StyleSheet, Dimensions, Pressable } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix } from "react-native-redash";

import type { Cards } from "../../components";
import { Card, StyleGuide } from "../../components";

const { width } = Dimensions.get("window");
const origin = -(width / 2 - StyleGuide.spacing * 2);
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: StyleGuide.spacing * 4,
  },
});

interface AnimatedCardProps {
  transition: Animated.SharedValue<number>;
  index: number;
  card: Cards;
  toggleExpansion: () => void;
}

export const AnimatedCard = ({
  card,
  transition,
  index,
  toggleExpansion,
}: AnimatedCardProps) => {
  const style = useAnimatedStyle(() => {
    const rotate = (index - 2) * mix(transition.value, 0, Math.PI / 7);
    return {
      transform: [
        { translateX: origin },
        { rotate: `${rotate}rad` },
        { translateX: -origin },
      ],
    };
  });
  return (
    <Animated.View key={card} style={[styles.overlay, style]}>
      <Pressable onPress={toggleExpansion}>
        <Card {...{ card }} />
      </Pressable>
    </Animated.View>
  );
};
