import React from 'react';
import { Container, SearchBar } from '../components';
import styled from 'styled-components/native';
import { Filter, DirectionVertical, Heart } from '../assets/icons';
import theme from '../theme/theme';

export default function CatalogView({ navigation }) {
  return (
    <Container>
      <SearchBar />
      <Nav>
        <Button>
          <BtnText>Sort</BtnText>
          <DirectionVertical />
        </Button>
        <Button style={{ marginLeft: 15 }}>
          <BtnText>Filter</BtnText>
          <Filter />
        </Button>
      </Nav>
      <List
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Product
              index={index}
              onPress={() => navigation.navigate('ProductDetail')}
            >
              {item.label ? <Plabel>{item.label}</Plabel> : null}
              <Pimg source={item.img} />

              <Pnav>
                <Price>{`$${item.price} `}</Price>
                <SaveBtn>
                  <Heart fill="black" />
                </SaveBtn>
              </Pnav>
              <Caption>{item.caption}</Caption>
            </Product>
          );
        }}
      />
    </Container>
  );
}

const Nav = styled.View`
  margin: 8px 0;
  flex-direction: row;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.granita100};
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  padding: 7.5px 0;
`;
const BtnText = styled.Text`
  ${theme.text.b2.medium}
  margin-right:4px;
`;

const List = styled.FlatList`
  margin-top: 16px;
`;

const Product = styled.TouchableOpacity`
  width: 48%;
  position: relative;
  margin-bottom: 24px;
  margin-left: ${(props) => (props.index % 2 !== 0 ? '4%' : '0')};
`;
const Pimg = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;
const Pnav = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;
const Plabel = styled.Text`
  ${theme.text.b2.medium}
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
  padding: 2px 8px;
  background-color: ${theme.colors.charizard400};
  border-radius: 4px;
`;
const Price = styled.Text`
  ${theme.text.b1.medium}
`;
const SaveBtn = styled.TouchableOpacity``;
const Caption = styled.Text`
  ${theme.text.b3.regular}
  color:${theme.colors.granita500};
`;

const products = [
  {
    label: 'new',
    img: require('../assets/images/product1.png'),
    price: '150.00',
    caption: 'Wooden bedside table featuring a raised desi...',
  },
  {
    label: '',
    price: '149.99',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product2.png'),
  },
  {
    label: '-40%',
    price: '29.00',
    img: require('../assets/images/product3.png'),
    caption: 'lovely lorem ipsum',
  },
  {
    label: '',
    price: '432.00',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product4.png'),
  },
  {
    label: '-40%',
    price: '29.00',
    img: require('../assets/images/product3.png'),
    caption: 'lovely lorem ipsum',
  },
  {
    label: '',
    price: '432.00',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product4.png'),
  },
  {
    label: '-40%',
    price: '29.00',
    img: require('../assets/images/product3.png'),
    caption: 'lovely lorem ipsum',
  },
  {
    label: '',
    price: '432.00',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product4.png'),
  },
];
