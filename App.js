import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Task from "./Component/Task/Index.js";
import From from "./Component/From/index.js";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Thông Báo !!!", "Bạn có chắc chắn muốn xoá hay không  ", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          let taskListtmp = [...taskList];
          taskListtmp.splice(index, 1);
          setTaskList(taskListtmp);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Một ngày của bạn ^_^</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>

        <From onAddTask={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e9e9",
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#43D1EE",
  },
  items: {
    flex: 1,
  },
});
