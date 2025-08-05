import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

const StartGame = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton viewProps={{ style: { width: "50%" } }}>
          Reset
        </PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#52032aff",
    //for androind boxShadow elevation
    elevation: 8,
    //below are for ios boxShadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    width: 100,
    height: 50,
    fontSize: 24,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
});
