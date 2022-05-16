import React, { useEffect } from 'react';
import { Button, Container } from './index';
import styled from 'styled-components/native';
import theme from './../theme/theme';
import Checkbox from './Checkbox';
import BottomSheet from 'react-native-gesture-bottom-sheet';
export default function SortSheet({ visible, setVisible }) {
  const bottomSheet = React.useRef(null);
  useEffect(() => {
    visible ? bottomSheet.current.show() : bottomSheet.current.close();
  }, [visible]);
  return (
    <>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={600}>
        <Container>
          <Options>
            <Option>
              <OptionTitle>Price: high to low</OptionTitle>
              <Checkbox value={true} />
            </Option>
            <Option>
              <OptionTitle>Price: low to high</OptionTitle>
              <Checkbox value={true} />
            </Option>
            <Option>
              <OptionTitle>New first</OptionTitle>
              <Checkbox value={true} />
            </Option>
            <Option>
              <OptionTitle>Popular first</OptionTitle>
              <Checkbox value={true} />
            </Option>
          </Options>
          <Button
            variant="secondary"
            title="Cancel"
            onPress={() => setVisible(false)}
          />
        </Container>
      </BottomSheet>
    </>
  );
}

const Options = styled.ScrollView`
  margin-bottom: 16px;
`;
const Option = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;
const OptionTitle = styled.Text`
  ${theme.text.b1.regular}
`;
