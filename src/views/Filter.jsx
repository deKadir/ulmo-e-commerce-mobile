import { View, Text } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import styled from 'styled-components';
import { Button, Container } from '../components';
import theme from './../theme/theme';
export default function FilterView({ navigation }) {
  const [sliderValue, setSliderValue] = React.useState(0);
  return (
    <Container>
      <Nav>
        <Price>${sliderValue}</Price>
        <Price>$700</Price>
      </Nav>
      <PriceSlider
        minimumValue={0}
        maximumValue={700}
        minimumTrackTintColor={theme.colors.charizard400}
        maximumTrackTintColor={theme.colors.granita200}
        value={sliderValue}
        onValueChange={(val) => setSliderValue(Math.round(val))}
        thumbTintColor={theme.colors.charizard400}
        thumbImage={require('../assets/images/knob.png')}
      />
      <Options>
        <Option
          onPress={() =>
            navigation.navigate('FilterOption', { title: 'Category' })
          }
        >
          <OptionTitle>Category</OptionTitle>
          <OptionValue>furniture</OptionValue>
        </Option>
        <Option
          onPress={() =>
            navigation.navigate('FilterOption', { title: 'Product Type' })
          }
        >
          <OptionTitle>Product type</OptionTitle>
          <OptionValue>All</OptionValue>
        </Option>
        <Option
          onPress={() =>
            navigation.navigate('FilterOption', { title: 'Color' })
          }
        >
          <OptionTitle>Color</OptionTitle>
          <OptionValue>All</OptionValue>
        </Option>
        <Option
          onPress={() => navigation.navigate('FilterOption', { title: 'Size' })}
        >
          <OptionTitle>Size</OptionTitle>
          <OptionValue>All</OptionValue>
        </Option>
      </Options>
      <Button title="Show 25 items" />
    </Container>
  );
}

const Nav = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Price = styled.Text`
  ${theme.text.b1.medium}
  margin-top:16px;
`;
const PriceSlider = styled(Slider)``;
const Options = styled.ScrollView``;
const Option = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;
const OptionTitle = styled.Text`
  ${theme.text.b1.regular}
`;
const OptionValue = styled.Text`
  ${theme.text.b1.regular}
  color:${theme.colors.granita500}
`;
