import React from 'react';
import styled from 'styled-components/native';

import theme from '../theme/theme';
import { SearchBar, Container } from '../components';
import { Text, FlatList } from 'react-native';

export default function CategoriesView({ navigation }) {
  return (
    <Container>
      <SearchBar />
      <Title>categories</Title>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => (
          <Cell
            onPress={() =>
              navigation.navigate('Catalog', { title: item.title })
            }
          >
            <CellImg source={item.img} />
            <Text style={theme.text.b1.regular}>{item.title}</Text>
          </Cell>
        )}
      />
    </Container>
  );
}

const Title = styled.Text`
  ${theme.text.h2.semiBold}
  padding:16px 0;
`;

const Cell = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const CellImg = styled.Image`
  margin: 14px 16px;
  margin-left: 0;
`;
const categoryList = [
  {
    title: 'Furniture',
    img: require('../assets/images/avatar-1.png'),
  },
  {
    title: 'Lighting',
    img: require('../assets/images/avatar-2.png'),
  },
  {
    title: 'Rugs',
    img: require('../assets/images/avatar-3.png'),
  },
  {
    title: 'Mirrors',
    img: require('../assets/images/avatar-4.png'),
  },
  {
    title: 'Blankets',
    img: require('../assets/images/avatar-5.png'),
  },
  {
    title: 'Cushions',
    img: require('../assets/images/avatar-6.png'),
  },
  {
    title: 'Rugs',
    img: require('../assets/images/avatar-3.png'),
  },
  {
    title: 'Mirrors',
    img: require('../assets/images/avatar-4.png'),
  },
  {
    title: 'Blankets',
    img: require('../assets/images/avatar-5.png'),
  },
  {
    title: 'Cushions',
    img: require('../assets/images/avatar-6.png'),
  },
];
