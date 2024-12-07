import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { removeItem, loadItems, saveItems } from "../redux/itemSlice";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/ItemList.styles";

const ItemList: React.FC = () => {
  const items = useSelector((state: RootState) => state.data.items);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0) {
      dispatch(saveItems());
    }
  }, [items, dispatch]);

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
