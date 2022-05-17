import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeArea, Container, Checkbox } from '../components';
import styled from 'styled-components';
import theme from '../theme/theme';
import { ArrowLeft, Car, Cart, ChevronRight, Pin } from '../assets/icons';

export default function DeliveryMethod({ navigation }) {
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
        <Title>delivery method</Title>
        <Option
          title="By courier"
          caption="Tomorrow, any time"
          left={<Car />}
          right={<Checkbox value={true} />}
        />
        <Option
          title="I'll take it myself"
          caption="Any day from tomorrow"
          left={<Cart />}
          right={<Checkbox value={true} />}
        />
        <Title>delivery address</Title>
        <Option
          title="I'll take it myself"
          caption="Any day from tomorrow"
          left={<Pin />}
          right={<ChevronRight />}
        />
        <Title>delivery time</Title>
        <Times>
          <Time>Tomorrow</Time>
          <Time>Jun 25</Time>
          <Time>Jun 26</Time>
          <Time>12:00 pm</Time>
          <Time>Jun 26</Time>
          <Time>12:00 pm</Time>
          <Time>Jun 26</Time>
          <Time>12:00 pm</Time>
        </Times>
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
const Times = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;
const Time = styled.Text`
  padding: 7.5px 16px;
  margin-bottom: 8px;
  border: 1px solid ${theme.colors.granita300};
  border-radius: 8px;
  margin-right: 12px;
`;

const Option = ({ left, title, caption, right }) => {
  return (
    <OptionContainer>
      {left}
      <OptionBody>
        <OptionTitle>{title}</OptionTitle>
        <OptionCaption>{caption}</OptionCaption>
      </OptionBody>
      {right}
    </OptionContainer>
  );
};

const OptionContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 19px;
`;
const OptionBody = styled.View`
  margin-right: auto;
  margin-left: 16px;
`;

const OptionTitle = styled.Text`
  ${theme.text.b1.regular}
`;
const OptionCaption = styled.Text`
  ${theme.text.b2.regular}
  color:${theme.colors.granita500}
`;
const OptionRight = styled.TouchableOpacity``;
