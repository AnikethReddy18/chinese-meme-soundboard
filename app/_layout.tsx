import { Stack } from "expo-router";
import { Image, View, Text } from "react-native";

function LogoTitle() {
  return (
    <View style={{
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
    }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/ok.png')}
      />
      <Text> 阿尼凯斯喜欢秋葵 </Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/ok.png')}
      />
    </View>
  );
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => <LogoTitle />,
        headerStyle: { backgroundColor: 'red' }
      }}
    />
  );
}
