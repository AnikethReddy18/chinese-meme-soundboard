import { FlatList, Text, View } from "react-native";
import Meme from "../components/meme.jsx"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList data={[{ name: "Aniketh" }, { name: "Kodi guddu" }, { name: "Balli Guddu" }]} renderItem={({ item }) => <Meme name={item.name} />} />
    </View>
  );
}
