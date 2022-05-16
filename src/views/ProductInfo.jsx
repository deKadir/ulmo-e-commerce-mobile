import styled from 'styled-components/native';
import theme from '../theme/theme';
export default function ProductInfo() {
  return (
    <Container>
      <InfoHeader>measurements</InfoHeader>
      <Infos>
        <Info>
          <InfoTitle>Height:</InfoTitle>
          <InfoValue>50cm</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Width:</InfoTitle>
          <InfoValue>40cm</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Depth:</InfoTitle>
          <InfoValue>35 cm</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Weight:</InfoTitle>
          <InfoValue>11.7 kg</InfoValue>
        </Info>
      </Infos>
      <InfoHeader>composition</InfoHeader>
      <Infos>
        <Info>
          <InfoTitle>Height:</InfoTitle>
          <InfoValue>50cm</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Width:</InfoTitle>
          <InfoValue>40cm</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Depth:</InfoTitle>
          <InfoValue>35 cm</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Weight:</InfoTitle>
          <InfoValue>11.7 kg</InfoValue>
        </Info>
      </Infos>
    </Container>
  );
}
const Container = styled.ScrollView`
  padding: 16px;
  background-color: white;
`;
const Infos = styled.ScrollView`
  margin-bottom: 16px;
`;
const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;
const InfoHeader = styled.Text`
  ${theme.text.h2.semiBold}
`;
const InfoTitle = styled.Text`
  ${theme.text.b1.regular}
`;

const InfoValue = styled.Text`
  ${theme.text.b1.regular}
  color:${theme.colors.granita500}
`;
