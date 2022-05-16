import React from 'react';
import { Container, Checkbox, Button } from '../components';
import theme from '../theme/theme';
import styled from 'styled-components/native';

export default function FilterOptionsView() {
  const [value, setValue] = React.useState(false);
  return (
    <Container>
      <Options>
        <Option onPress={() => setValue(!value)}>
          <OptionTitle>Furniture</OptionTitle>
          <Checkbox value={value} setValue={setValue} />
        </Option>
        <Option onPress={() => setValue(!value)}>
          <OptionTitle>Furniture</OptionTitle>
          <Checkbox value={value} setValue={setValue} />
        </Option>
        <Option onPress={() => setValue(!value)}>
          <OptionTitle>Furniture</OptionTitle>
          <Checkbox value={value} setValue={setValue} />
        </Option>
        <Option onPress={() => setValue(!value)}>
          <OptionTitle>Furniture</OptionTitle>
          <Checkbox value={value} setValue={setValue} />
        </Option>
      </Options>
      <Button title="Show 25 items" />
    </Container>
  );
}
const Options = styled.ScrollView``;
const Option = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;
const OptionTitle = styled.Text`
  ${theme.text.b1.regular}
`;
