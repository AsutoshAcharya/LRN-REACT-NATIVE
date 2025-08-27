import React, { FC } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

interface Props extends PressableProps {
  icon?: IoniconsName;
}
const IconButton: FC<Props> = ({ icon, style, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        [styles.pressed, pressed ? styles.pressed : null, style].filter(
          Boolean
        ) as StyleProp<ViewStyle>
      }
      {...rest}
    >
      <Ionicons name={icon} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 1,
  },
});
