import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}
