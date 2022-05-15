import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tabbar, HeaderButton } from './src/components';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components';
import {
  AccountView,
  AddReviewView,
  BagView,
  FavoriteView,
  ProductDetailView,
  ReviewsView,
  StoryView,
} from './src/views';
import { ArrowLeft, Heart, Close } from './src/assets/icons';
import theme from './src/theme/theme';
import { NavigationContainer } from '@react-navigation/native';
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
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailView}
          options={productDetailOptions}
        />
        <Stack.Screen
          name="Reviews"
          component={ReviewsView}
          options={reviewViewOptions}
        />
        <Stack.Screen
          name="AddReview"
          component={AddReviewView}
          options={newReviewOptions}
        />
        <Stack.Screen
          name="Story"
          component={StoryView}
          options={stackStoryOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Tabs() {
  return (
    <Tab.Navigator tabBar={(props) => <Tabbar {...props} />}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bag"
        component={BagView}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteView}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountView}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const reviewViewOptions = ({ route, navigation }) => {
  return {
    headerTitleAlign: 'center',
    headerAlignItems: 'center',
    headerTitle: 'New review',
    headerShadowVisible: false,
    headerLeft: () => {
      return (
        <HeaderButton
          icon={<ArrowLeft />}
          onPress={() => navigation.goBack()}
        />
      );
    },
    headerRight: () => {
      return (
        <ReviewHeaderRight onPress={() => navigation.navigate('AddReview')}>
          <ReviewHeaderRightText>New Review</ReviewHeaderRightText>
        </ReviewHeaderRight>
      );
    },
  };
};
const newReviewOptions = ({ route, navigation }) => {
  return {
    headerTitleAlign: 'center',
    headerAlignItems: 'center',
    headerShadowVisible: false,
    headerTitle: 'New Review',
    headerLeft: () => {
      return (
        <HeaderButton icon={<Close />} onPress={() => navigation.goBack()} />
      );
    },
  };
};

const stackStoryOptions = ({ route, navigation }) => {
  return {
    headerTitle: '',
    headerShown: false,
  };
};
const productDetailOptions = ({ route, navigation }) => {
  return {
    headerShadowVisible: false,
    headerTitle: '',
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButton
          icon={<ArrowLeft />}
          onPress={() => navigation.goBack()}
        />
      );
    },
    headerRight: () => {
      return <HeaderButton icon={<Heart fill="black" />} />;
    },
  };
};
const ReviewHeaderRight = styled.TouchableOpacity`
  background-color: white;
  justify-content: flex-end;
`;
const ReviewHeaderRightText = styled.Text`
  ${theme.text.b1.medium}
  margin-top:6px;
`;
