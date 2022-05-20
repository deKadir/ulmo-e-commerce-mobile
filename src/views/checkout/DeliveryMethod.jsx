import { View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeArea, Checkbox, Button } from '../../components';

import styled from 'styled-components';
import theme from '../../theme/theme';
import { Car, Cart, ChevronRight, Pin } from '../../assets/icons';
import AddressSheet from './components/AddressSheet';
import { useState } from 'react';
import { Header, Option } from './components';
export default function DeliveryMethod({ navigation }) {
  const [sheet, setSheet] = useState(false);
  return (
    <SafeArea>
      <Container>
        <Header title="Checkout" content="2 of 3" />
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
          onPress={() => setSheet(true)}
        />
        <Title>delivery time</Title>
        <View>
          <FlatList
            data={times.day}
            renderItem={({ item }) => (
              <TimeBtn>
                <Time>{item}</Time>
              </TimeBtn>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <FlatList
            data={times.clock}
            renderItem={({ item }) => (
              <TimeBtn>
                <Time>{item}</Time>
              </TimeBtn>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Button
          title="Continue"
          style={{ marginTop: 40, marginBottom: 16 }}
          onPress={() => navigation.navigate('Payment')}
        />
        <AddressSheet visible={sheet} setVisible={setSheet} />
      </Container>
    </SafeArea>
  );
}

const Container = styled.ScrollView`
  padding: 0 16px;
  padding-bottom: 16px;
`;

const Title = styled.Text`
  ${theme.text.h2.semiBold}
  margin-bottom:8px;
  margin-top: 16px;
`;

const Time = styled.Text`
  padding: 7.5px 16px;
  margin-bottom: 8px;
  border: 1px solid ${theme.colors.granita300};
  border-radius: 8px;
  margin-right: 12px;
  flex: none;
  height: 40px;
  background-color: ${({ select }) =>
    select ? theme.colors.granita100 : 'white'};
`;
const TimeBtn = styled.TouchableOpacity``;

const times = {
  day: ['Tomorrow', 'Jun 15', 'Jun 26', 'Jun 25', 'Jun 30'],
  clock: ['12:00 pm', '2:00 pm', '4:00 pm', '6:00 pm', '7:00 pm'],
};
