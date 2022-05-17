import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, EmptyBag, SafeArea } from '../../components';
import styled from 'styled-components/native';
import { Clear } from '../../assets/icons';
import theme from '../../theme/theme';
import Product from './Product';
import { ContactInfoView, DeliveryMethodView } from '..';
function BagView({ navigation }) {
  const [bag, setBag] = React.useState(true);
  if (!bag) return <EmptyBag />;

  return (
    <SafeArea>
      <Container showsVerticalScrollIndicator={false}>
        <Title>bag</Title>
        <ProductList
          data={Products}
          renderItem={({ item }) => <Product {...item} />}
        />
        <InputTitle>promocode</InputTitle>
        <InputContainer>
          <Input placeholder="enter promocode" />
          <ClearBtn>
            <Clear />
          </ClearBtn>
        </InputContainer>
        <Row>
          <Total>Total</Total>
          <Total>$420,50</Total>
        </Row>

        <Row>
          <Discount>Promocode</Discount>
          <Discount>-$25,00</Discount>
        </Row>
        <Button
          title="Continue"
          style={{ marginBottom: 32 }}
          onPress={() => navigation.navigate('ContactInfo')}
        />
      </Container>
    </SafeArea>
  );
}

const Container = styled.ScrollView`
  padding: 16px;
`;
const Title = styled.Text`
  margin-top: 56px;
  ${theme.text.h1.semiBold}
`;
const ProductList = styled.FlatList`
  margin-top: 24px;
`;
const InputTitle = styled.Text`
  ${theme.text.h2.semiBold}
  margin:16px 0;
`;

const InputContainer = styled.View`
  flex-direction: row;
  margin: 8px 0;
  background-color: ${theme.colors.granita100};
  border-radius: 8px;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
`;
const Input = styled.TextInput`
  flex: 1;
  padding: 20px 0;
`;
const ClearBtn = styled.TouchableOpacity`
  padding: 8px;
`;
const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const Total = styled.Text`
  ${theme.text.h2.semiBold}
  margin-top:24px;
  margin-bottom: 12px;
`;
const Discount = styled.Text`
  ${theme.text.b1.regular}
  margin-bottom:36px;
  color: ${theme.colors.granita500};
`;
const Products = [
  {
    img: require('../../assets/images/product1.png'),
    price: '150.00',
    caption: 'Wooden bedside table featuring a raised design',
    count: 1,
  },
  {
    img: require('../../assets/images/product2.png'),
    price: '280.50',
    caption: 'Square bedside table with legs, a rattan shelf and a...',
    count: 2,
  },
  {
    img: require('../../assets/images/product2.png'),
    price: '280.50',
    caption: 'Square bedside table with legs, a rattan shelf and a...',
    count: 2,
  },
  {
    img: require('../../assets/images/product2.png'),
    price: '280.50',
    caption: 'Square bedside table with legs, a rattan shelf and a...',
    count: 2,
  },
];

const Stack = createNativeStackNavigator();
function BagStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bag"
        component={BagView}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ContactInfo"
        component={ContactInfoView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DeliveryMethod"
        component={DeliveryMethodView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default BagStack;
