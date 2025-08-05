import { FC, ReactNode } from "react";
import {
  View,
  Text,
  ViewProps,
  TextProps,
  Pressable,
  PressableProps,
  StyleSheet,
} from "react-native";

interface Props {
  children: ReactNode;
  viewProps?: ViewProps;
  textProps?: TextProps;
  pressableProps?: PressableProps;
}

const PrimaryButton: FC<Props> = ({
  children,
  viewProps,
  textProps,
  pressableProps,
}) => {
  return (
    <View style={styles.buttonOuterContainer} {...viewProps}>
      <Pressable
        android_ripple={{
          color: "#ddd",
        }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        {...pressableProps}
      >
        <Text children={children} style={styles.buttonText} {...textProps} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
