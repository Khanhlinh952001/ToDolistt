import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  input,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const From = (pops) => {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Hãy nhập công việc của bạn");
      return false;
    } else {
      pops.onAddTask(task);
      setTask("");
      Keyboard.dismiss();
    }
  };

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
        style={styles.bottom}
      >
        <TextInput
          value={task}
          style={styles.input}
          placeholder="Nhập công việc của bạn "
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.create} onPress={handleAddTask}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default From;
