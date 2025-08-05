import { FC, ReactNode } from "react";
import {
  View,
  Text,
  ViewProps,
  TextProps,
  Pressable,
  PressableProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
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
  const { style: viewStyle, ...restViewProps } = viewProps || {};
  const { style: textStyle, ...restTextProps } = textProps || {};
  const { style: pressableStyle, ...restPressableProps } = pressableProps || {};

  return (
    <View style={[styles.buttonOuterContainer, viewStyle]} {...restViewProps}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) =>
          [
            styles.buttonInnerContainer,
            pressed ? styles.pressed : null,
            pressableStyle,
          ].filter(Boolean) as StyleProp<ViewStyle>
        }
        {...restPressableProps}
      >
        <Text
          children={children}
          style={[styles.buttonText, textStyle]}
          {...restTextProps}
        />
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
