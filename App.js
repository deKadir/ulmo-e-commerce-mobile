import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AccountView from './src/views/Account';
import BagView from './src/views/Bag';
import FavoriteView from './src/views/Favorite';
import { Tabbar } from './src/components';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import HomeStack from './src/views/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
  });
  if (!fontsLoaded) return <View></View>;

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <Tabbar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: 0 }}
        />
        <Tab.Screen name="Bag" component={BagView} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
        <Tab.Screen name="Account" component={AccountView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();
