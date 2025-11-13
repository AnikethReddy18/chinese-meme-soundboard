import { Image, TouchableHighlight } from "react-native"

const style = {
	height: 200,
	width: 200,
	borderRadius: 5
}

function Meme(props) {
	const player = props.player;

	function playCurrentAudio(){
		player.replace(props.sound)
		player.play()
	}
	return (
		<TouchableHighlight onPress={playCurrentAudio}  >
			<Image source={props.thumbnail} style={style} />
		</ TouchableHighlight>)
}

export default Meme
