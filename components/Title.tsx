import React, { FC } from "react";
import { StyleSheet, Text, TextProps, Dimensions } from "react-native";
interface Props extends TextProps {}
const Title: FC<Props> = ({ style: textStyle, ...rest }) => (
  <Text style={[styles.title, textStyle]} {...rest} />
);
export default Title;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: deviceWidth < 380 ? 8 : 12,
    borderRadius: 12,
  },
});
