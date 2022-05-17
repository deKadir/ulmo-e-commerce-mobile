import React from 'react';
import { SafeArea, Container, Input, Button } from '../components';
import styled from 'styled-components/native';
import { ArrowLeft } from '../assets/icons';
import { TouchableOpacity, ScrollView } from 'react-native';
import theme from './../theme/theme';
export default function ContactInfo({ navigation }) {
  return (
    <SafeArea>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
          <HeaderContent>
            <HeaderTitle>Checkout</HeaderTitle>
            <HeaderLabel>1 of 3</HeaderLabel>
          </HeaderContent>
        </Header>
        <Title>contact info</Title>
        <ScrollView style={{ marginBottom: 16 }}>
          <Input
            title="Full name"
            value="Hanna gouse"
            style={{ marginTop: 16 }}
          />
          <Input
            title="Phone"
            value="+7 932 123-43-23"
            style={{ marginTop: 16 }}
          />
          <Input
            title="Email"
            value="Hanna-g0@gmail.com"
            style={{ marginTop: 16 }}
          />
        </ScrollView>
        <Button
          title="Continue"
          style={{ marginTop: 'auto' }}
          onPress={() => navigation.navigate('DeliveryMethod')}
        />
      </Container>
    </SafeArea>
  );
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 56px;
`;
const HeaderContent = styled.View`
  margin: 0 auto;
`;
const HeaderTitle = styled.Text`
  ${theme.text.b1.medium}
  text-align:center;
`;
const HeaderLabel = styled.Text`
  ${theme.text.b3.medium}
  color:${theme.colors.granita500}
  text-align:center;
`;
const Title = styled.Text`
  ${theme.text.h2.semiBold}
  margin-bottom:8px;
  margin-top: 16px;
`;
