import { View, Text, Button, Image, TouchableHighlight } from "react-native"
import { useAudioPlayer } from "expo-audio"
function Meme(props) {
	const player = useAudioPlayer(props.sound);
	return (
		<TouchableHighlight onPress={() => player.play()}>
			<Image source={props.thumbnail} />
		</ TouchableHighlight>)
}

export default Meme
