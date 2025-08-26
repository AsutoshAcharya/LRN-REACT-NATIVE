import React, { FC } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface Props extends PressableProps {}
const IconButton: FC<Props> = ({ style, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        [styles.pressed, pressed ? styles.pressed : null, style].filter(
          Boolean
        ) as StyleProp<ViewStyle>
      }
      {...rest}
    >
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 1,
  },
});
