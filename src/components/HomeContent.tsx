import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { setItems } from "../redux/itemSlice";
import { store } from "../redux/store";
import { Header } from "react-native/Libraries/NewAppScreen";
import styles from "../styles/HomeContent.styles";
import AddItem from "./addItem";
import ItemList from "./ItemList";

const HomeContent: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadItems = async () => {
      const items = await AsyncStorage.getItem("items");
      if (items) dispatch(setItems(JSON.parse(items)));
    };
    loadItems();
  }, [dispatch]);

  useEffect(() => {
    const saveItems = async () => {
      const state = store.getState();
      await AsyncStorage.setItem("items", JSON.stringify(state.data.items));
    };
    store.subscribe(saveItems);
  }, []);

  const headerHeight = Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: headerHeight }]}>
        <Text style={styles.headerText}>IPAM</Text>
      </View>
      <View>
        <AddItem />
        <ItemList />
      </View>
    </SafeAreaView>
  );
};

export default HomeContent;
