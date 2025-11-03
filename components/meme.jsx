import { View, Text, Button, Image, TouchableHighlight } from "react-native"
import { useAudioPlayer } from "expo-audio"

const style = {
	height: 200,
	width: 200,
	borderRadius: 5
}

function Meme(props) {
	const player = useAudioPlayer(props.sound);
	return (
		<TouchableHighlight onPress={() => { player.play() }}  >
			<Image source={props.thumbnail} style={style} />
		</ TouchableHighlight>)
}

export default Meme
