import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSpring } from "react-native-redash";

import { Button, StyleGuide, cards } from "../../components";

import { AnimatedCard } from "./AnimatedCard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: "flex-end",
  },
});

export const Transitions = () => {
  const [toggled, setToggle] = useState(false);
  const transition = useSpring(toggled);
  const toggleExpansion = () => setToggle((prev) => !prev);
  return (
    <View style={styles.container}>
      {cards.slice(0, 5).map((card, index) => (
        <AnimatedCard
          key={card}
          {...{ index, card, transition, toggleExpansion }}
        />
      ))}
      <Button
        label={toggled ? "Reset" : "Start"}
        primary
        onPress={() => setToggle((prev) => !prev)}
      />
    </View>
  );
};
