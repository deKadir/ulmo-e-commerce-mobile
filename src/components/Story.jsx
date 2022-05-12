import styled from 'styled-components/native';
import theme from '../theme/theme';

const Story = ({ title, img, onPress = () => {} }) => {
  return (
    <StoryContainer onPress={onPress}>
      <StoryTitle
        style={{ ...theme.text.b3.medium, color: theme.colors.white }}
      >
        {title}
      </StoryTitle>
      <StoryImg source={img} />
      <Gradient />
    </StoryContainer>
  );
};
const StoryContainer = styled.TouchableOpacity`
  position: relative;
  margin-right: 12px;
  width: 88px;
  height: 88px;
  border-radius: 8px;
  overflow: hidden;
`;
const StoryTitle = styled.Text`
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 8px;
`;
const Gradient = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.25;
`;
const StoryImg = styled.Image`
  position: absolute;
  left: 0;
  bottom: 0;
`;

export default Story;
