import React  from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from "../From/styles.js";
import Styles from "./Styles.js";


const Task= (props) =>{
    const {number} = props;
    const numberText = number < 10 ? `0${number}`:number;
    const itemBg     = number % 2 === 0 ? Styles.even : Styles.odd;
    return(
        <TouchableOpacity
        onPress={props.onDeleteTask}
        >
           <View style={Styles.item}>
            <View>
                <Text style={[Styles.number,itemBg]}>{props.number}</Text>
            </View>
              <Text style={Styles.text}>{props.title}</Text>
           </View>
            
        </TouchableOpacity>

    );
}

export default Task;