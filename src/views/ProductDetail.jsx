import { Button, ProductCarousel } from '../components';
import styled from 'styled-components/native';
import theme from '../theme/theme';
import SvgBag from '../assets/icons/Bag';

export default function ProductDetailView() {
  return (
    <Container>
      {/* <Image source={require('../assets/images/productDetail.png')} /> */}
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
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
const Image = styled.Image`
  width: 100%;
`;

const Detail = styled.View`
  padding: 24px 16px;
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
const data = [
  {
    title: 'Aenean leo',
    body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    imgUrl: 'https://picsum.photos/id/11/200/300',
  },
  {
    title: 'In turpis',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl: 'https://picsum.photos/id/10/200/300',
  },
  {
    title: 'Lorem Ipsum',
    body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
  {
    title: 'In turpis',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl: 'https://picsum.photos/id/10/200/300',
  },
  {
    title: 'Lorem Ipsum',
    body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
];
