import { FlatList, Text, View } from "react-native";
import Meme from "../components/meme.jsx"

const data = [
  {
    name: "bald dance",
    thumbnail: "../assets/data/bald dance/thumbnail.jpeg",
    sound: "../assets/data/bald dance/sound.mp3"
  },
  {
    name: "bing chilling",
    thumbnail: "../assets/data/bing chilling/thumbnail.jpeg",
    sound: "../assets/data/bing chilling/sound.mp3"
  },
  {
    name: "ching cheng",
    thumbnail: "../assets/data/ching cheng/thumbnail.jpeg",
    sound: "../assets/data/ching cheng/sound.mp3"
  },
  {
    name: "eggman",
    thumbnail: "../assets/data/eggman/thumbnail.jpeg",
    sound: "../assets/data/eggman/sound.mp3"
  },
  {
    name: "monkey singing",
    thumbnail: "../assets/data/monkey singing/monkey_singing.png",
    sound: "../assets/data/monkey singing/Chinese monkeys singing (English Translation).mp3"
  },
  {
    name: "oohooh",
    thumbnail: "../assets/data/oohooh/thumbnail.jpeg",
    sound: "../assets/data/oohooh/audio.mp3"
  },
  {
    name: "rising sun",
    thumbnail: "../assets/data/rising sun/thumbnail.jpeg",
    sound: "../assets/data/rising sun/sound.mp3"
  },
  {
    name: "superidol",
    thumbnail: "../assets/data/superidol/thumbnail.jpeg",
    sound: "../assets/data/superidol/sound.mp3"
  }
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList data={data} renderItem={({ item }) => <Meme name={item.name} />} />
    </View>
  );
}
