import { View, Text, Button, Image } from "react-native"
import { useAudioPlayer } from "expo-audio"
function Meme(props) {
	const player = useAudioPlayer(props.sound);
	return (
		<View>
			<Text> World! {props.name} </Text>
			<Button title="Play" onPress={() => player.play()} />
			<Image source={props.thumbnail} />
		</ View>)
}

export default Meme
