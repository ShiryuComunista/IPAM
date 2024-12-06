import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeItem } from "../redux/itemSlice";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/ItemList.styles";

const ItemList: React.FC = () => {
  const items = useSelector((state: RootState) => state.data.items);
  console.log("Itens no estado:", items);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => dispatch(removeItem(index))}
            >
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default ItemList;
