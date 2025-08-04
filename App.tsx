import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState<Array<{ text: string; id: string }>>([]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals"
          style={styles.textInput}
          value={input}
          onChangeText={(val) => setInput(val)}
        />
        <Button
          title="Add goals"
          disabled={input.length === 0}
          onPress={() => {
            setGoals((prev) => [
              ...prev,
              { text: input, id: Math.random().toString() },
            ]);
            setInput("");
          }}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text children={item.text} style={styles.goalText} />
            </View>
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}

const flexStyle = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  inputContainer: {
    ...flexStyle.center,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    gap: 10,
    flex: 1,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
  },
  goalsContainer: {
    flex: 10,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#FFF",
  },
});
