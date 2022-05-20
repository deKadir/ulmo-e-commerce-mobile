import { TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeArea, Checkbox, Button } from '../../components';
import styled from 'styled-components/native';

import { Apple, Mastercard } from './../../assets/icons';
import SvgVisa from './../../assets/icons/Visa';
import { Header, Option } from './components';
import theme from './../../theme/theme';

export default function Payment({ navigation }) {
  return (
    <SafeArea>
      <Container>
        <Header title="Checkout" content="3 of 3" />

        <Title>payment method</Title>

        <Option
          title="Mastercard 9833"
          caption="734, Exp: 12/29"
          left={<Mastercard />}
          right={<Checkbox value={true} />}
        />
        <Option
          title="Visa 7233"
          caption="321, Exp: 11/29"
          left={<SvgVisa />}
          right={<Checkbox value={false} />}
        />
        <Option
          title="Apple pay"
          caption=""
          left={<Apple />}
          right={<Checkbox value={false} />}
        />

        <Button title="Pay $420,50" style={{ marginTop: 'auto' }} />
      </Container>
    </SafeArea>
  );
}

const Container = styled.View`
  padding: 0 16px;
  padding-bottom: 16px;
  flex: 1;
`;

const Title = styled.Text`
  ${theme.text.h2.semiBold}
  margin-bottom:8px;
  margin-top: 16px;
`;
