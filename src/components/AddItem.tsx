import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { addItem } from "../redux/itemSlice";
import { RootState } from "../redux/store";
import styles from "../styles/AddItem,styles";

const AddItem: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log("text", text);
    dispatch(addItem(text.trim()));
    setText("");
  };

  const isDisabled = text.trim() === "";

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar item"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        style={[styles.button, isDisabled && styles.buttonDisabled]}
        onPress={handleAdd}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
