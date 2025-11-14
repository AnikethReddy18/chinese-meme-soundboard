import { useAudioPlayer } from "expo-audio";
import { Image, ScrollView, TouchableHighlight, Text, View} from "react-native";
import Meme from "../components/meme.jsx";

const stop = require("../assets/images/stop.jpeg")
const data = [
  {
    name: "bald dance",
    thumbnail: require("../assets/data/bald dance/thumbnail.jpeg"),
    sound: require("../assets/data/bald dance/sound.mp3")
  },
  {
    name: "bing chilling",
    thumbnail: require("../assets/data/bing chilling/thumbnail.jpeg"),
    sound: require("../assets/data/bing chilling/sound.mp3")
  },
  {
    name: "ching cheng",
    thumbnail: require("../assets/data/ching cheng/thumbnail.jpeg"),
    sound: require("../assets/data/ching cheng/sound.mp3")
  },
  {
    name: "eggman",
    thumbnail: require("../assets/data/eggman/thumbnail.jpeg"),
    sound: require("../assets/data/eggman/sound.mp3")
  },
  {
    name: "monkey singing",
    thumbnail: require("../assets/data/monkey singing/monkey_singing.png"),
    sound: require("../assets/data/monkey singing/Chinese monkeys singing (English Translation).mp3")
  },
  {
    name: "oohooh",
    thumbnail: require("../assets/data/oohooh/thumbnail.jpeg"),
    sound: require("../assets/data/oohooh/audio.mp3")
  },
  {
    name: "rising sun",
    thumbnail: require("../assets/data/rising sun/thumbnail.jpeg"),
    sound: require("../assets/data/rising sun/sound.mp3")
  },
  {
    name: "superidol",
    thumbnail: require("../assets/data/superidol/thumbnail.jpeg"),
    sound: require("../assets/data/superidol/sound.mp3")
  }
];


export default function Index() {
  const audioPlayer = useAudioPlayer();

  return (
    <ScrollView contentContainerStyle={{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      rowGap: 10,
      columnGap: 10,
    }}>
      <TouchableHighlight onPress={()=>audioPlayer.pause()} style={{ flexBasis: "100%", alignItems: "center" }}>
        <Image source={stop} style={{ width: 410, height: 200}} />
      </TouchableHighlight>

      {data.map((item) => <Meme sound={item.sound} thumbnail={item.thumbnail} key={item.name} player={audioPlayer}/>)}

      <View style={{
        paddingBottom: 30,
      }}>
        <Text style={{
          fontSize: 20,
          color: '#57f542',
          fontWeight: "bold"

        }}>
          亲爱的同志，记得吃你的本达卡亚
        </Text>
      </View>
    </ScrollView>
  );
}
