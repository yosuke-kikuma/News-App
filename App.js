import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { FavoriteProvider } from "./context/FavoriteContext";

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </FavoriteProvider>
  );
}
