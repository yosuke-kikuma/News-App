import FavoriteScreen from "../screens/FavoriteScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}
