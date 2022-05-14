import React from 'react';
import styled from 'styled-components/native';
import theme from './../theme/theme';
import { Story, SearchBar } from '../components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesView from './Categories';
import CatalogView from './Catalog';
import ProductDetailView from './ProductDetail';
import SvgArrowLeft from './../assets/icons/ArrowLeft';
import HeaderButton from '../components/HeaderButton';
import SvgHeart from '../assets/icons/Heart';

function HomeView({ navigation }) {
  return (
    <HomeContainer>
      <Logo>ulmo</Logo>
      <SearchBar />
      <Stories
        showsHorizontalScrollIndicator={false}
        horizontal
        data={stories}
        renderItem={({ item }) => (
          <Story {...item} onPress={() => navigation.navigate('Category')} />
        )}
      />
      <Categories showsVerticalScrollIndicator={false}>
        {categories.map((category, index) => (
          <Category
            {...category}
            key={index}
            onPress={() =>
              navigation.navigate('Category', { title: category.title })
            }
          />
        ))}
      </Categories>
    </HomeContainer>
  );
}
const Logo = styled.Text`
  ${theme.text.h1.semiBold}
  text-align: center;
  padding: 16px;
  padding-top: 0;
`;
const HomeContainer = styled.View`
  padding: 0 16px;
  background-color: white;
  flex: 1;
`;

const Stories = styled.FlatList`
  margin-right: -16px;
  flex: none;
  padding: 8px 0;
`;
const Categories = styled.ScrollView``;
const Category = ({ title, img, onPress }) => {
  return (
    <CategoryContainer onPress={onPress}>
      <CTitle>{title}</CTitle>
      <CImg source={img} />
    </CategoryContainer>
  );
};

const CategoryContainer = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${theme.colors.granita100};
  flex-direction: row;
  margin: 8px 0;
  height: 100px;
  overflow: hidden;
`;
const CTitle = styled.Text`
  ${theme.text.h2.semiBold}
  margin:16px;
`;
const CImg = styled.Image`
  background-color: ${theme.colors.granita100};
  margin-left: auto;
  height: 100%;
`;
const stories = [
  {
    title: 'best of 2020',
    img: require('../assets/images/product1.png'),
  },
  {
    title: 'the golden hour',
    img: require('../assets/images/product2.png'),
  },
  {
    title: 'lovely kitchen',
    img: require('../assets/images/product3.png'),
  },
  {
    title: 'summer choice',
    img: require('../assets/images/product4.png'),
  },
  {
    title: 'the golden hour',
    img: require('../assets/images/product2.png'),
  },
  {
    title: 'lovely kitchen',
    img: require('../assets/images/product3.png'),
  },
  {
    title: 'summer choice',
    img: require('../assets/images/product4.png'),
  },
];
const categories = [
  {
    title: 'bedroom',
    img: require('../assets/images/category1.png'),
  },
  {
    title: 'living room',
    img: require('../assets/images/category2.png'),
  },
  {
    title: 'kitchen',
    img: require('../assets/images/category3.png'),
  },
];

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeView}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoriesView}
        options={stackOptions}
      />
      <Stack.Screen
        name="Catalog"
        component={CatalogView}
        options={stackOptions}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailView}
        options={productDetailStyle}
      />
    </Stack.Navigator>
  );
}

const stackOptions = ({ route, navigation }) => {
  return {
    title: route.params.title,
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
      ...theme.text.b1.medium,
    },
  };
};
const productDetailStyle = ({ route, navigation }) => {
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
          icon={<SvgArrowLeft />}
          onPress={() => navigation.goBack()}
        />
      );
    },
    headerRight: () => {
      return <HeaderButton icon={<SvgHeart fill="black" />} />;
    },
  };
};
export default HomeStack;
