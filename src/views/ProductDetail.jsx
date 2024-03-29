import { Button, ProductCarousel } from '../components';
import styled from 'styled-components/native';
import theme from '../theme/theme';
import SvgBag from '../assets/icons/Bag';
import { ChevronRight } from '../assets/icons';

export default function ProductDetailView({ navigation }) {
  return (
    <Container>
      <ProductCarousel data={data} />
      <Detail>
        <Price>$150.00</Price>
        <Caption>
          Wooden bedside table featuring a raised design on the door
        </Caption>
        <Colors>
          <Color
            name="Brown"
            color="#A56506"
            background="#212121"
            textColor="white"
          />
          <Color
            name="Black"
            color="#212121"
            background="white"
            textColor="black"
          />
        </Colors>
        <Button title="Add to bag" icon={<SvgBag fill="#212121" />} />
      </Detail>
      <Infos>
        <ExtraInfo onPress={() => navigation.navigate('Reviews')}>
          <InfoText>Reviews</InfoText>
          <ReviewCount>32</ReviewCount>
        </ExtraInfo>
        <ExtraInfo onPress={() => navigation.navigate('ProductInfo')}>
          <InfoText>Product information</InfoText>
          <ChevronRight />
        </ExtraInfo>
      </Infos>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
`;

const Detail = styled.View`
  padding: 24px 16px;
  flex: auto;
`;
const Price = styled.Text`
  ${theme.text.h2.semiBold}
`;
const Caption = styled.Text`
  ${theme.text.b1.regular}
  color:${theme.colors.granita500}
`;
const Colors = styled.View`
  flex-direction: row;
  margin: 24px 0;
`;

const Color = ({ background, color, name, textColor }) => {
  return (
    <ColorContainer background={background}>
      <ColorAvatar color={color} />
      <ColorText textColor={textColor}>{name}</ColorText>
    </ColorContainer>
  );
};

const ColorContainer = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 9px 16px;
  background-color: ${(props) => props.background};
  flex-direction: row;
  border: 2px solid ${theme.colors.granita300};
  margin-left: 12px;
`;
const ColorAvatar = styled.View`
  background-color: ${(props) => props.color};
  width: 18px;
  aspect-ratio: 1;
  border-radius: 9999px;
  margin-top: 1px;
`;

const ColorText = styled.Text`
  ${theme.text.b2.medium}
  color: ${(props) => props.textColor};
  margin-left: 8px;
`;

const Infos = styled.View`
  flex: none;
`;
const ExtraInfo = styled.TouchableOpacity`
  padding: 20px 16px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;
const InfoText = styled.Text`
  ${theme.text.b1.regular}
`;
const ReviewCount = styled.Text`
  ${theme.text.b1.regular}
  color:${theme.colors.granita500}
`;
const data = [
  {
    title: 'Aenean leo',
    body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    imgUrl: require('../assets/images/carousel_1.png'),
  },
  {
    title: 'In turpis',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl: require('../assets/images/carousel_2.png'),
  },

  {
    title: 'In turpis',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl: require('../assets/images/carousel_2.png'),
  },
];
