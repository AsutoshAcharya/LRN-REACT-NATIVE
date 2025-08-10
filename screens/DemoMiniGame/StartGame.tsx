import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

const StartGame = () => {
  const [value, setValue] = useState("");

  function confirmInput() {
    const num = Number(value);
    if (isNaN(num) || num <= 0 || num > 99)
      return Alert.alert(
        "Invalid number",
        "Number has to be between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: () => setValue("") }]
      );
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(val) => setValue(val)}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton viewProps={{ style: { width: "50%" } }}>
          Reset
        </PrimaryButton>
        <PrimaryButton
          viewProps={{ style: { width: "50%" } }}
          pressableProps={{ onPress: confirmInput }}
        >
          Confirm
        </PrimaryButton>
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
    backgroundColor: "#3b021f",
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
