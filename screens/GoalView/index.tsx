import React, { useRef, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
  Modal,
  Image,
} from "react-native";

export type GoalItem = { text: string; id: string };
const GoalView = () => {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState<Array<GoalItem>>([]);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setOpen(true)}
      />

      <Modal visible={open} animationType="fade" backdropColor={"#311b6b"}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/goal.png")}
            style={styles.imageStyle}
          />
          <TextInput
            placeholder="Course goals"
            placeholderTextColor="#FFF"
            style={styles.textInput}
            value={input}
            onChangeText={(val) => setInput(val)}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Add goals"
              disabled={input.length === 0}
              onPress={() => {
                setGoals((prev) => [
                  ...prev,
                  { text: input, id: Math.random().toString() },
                ]);
                setInput("");
                Keyboard.dismiss();
                setOpen(false);
              }}
              color="#934eecff"
            />
            <Button
              title="Cancel"
              color="#f31282"
              onPress={() => setOpen(false)}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={() => {
                  setGoals((prev) => prev.filter((i) => i.id !== item.id));
                }}
                //for ios
                style={({ pressed }) => pressed && styles.pressedItem}
              >
                <Text children={item.text} style={styles.goalText} />
              </Pressable>
            </View>
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
};

const flexStyle = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  inputContainer: {
    ...flexStyle.center,
    gap: 10,
    flex: 1,
    padding: 16,
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    gap: 10,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    width: "100%",
    color: "#FFF",
  },
  goalsContainer: {
    flex: 10,
  },
  goalItem: {
    margin: 8,

    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.8,
  },
  goalText: {
    color: "#FFF",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },

  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalView;
