import React, { useEffect } from 'react';
import styled from 'styled-components/native';

import BottomSheet from 'react-native-gesture-bottom-sheet';
import { Checkbox, Button, Container } from '../../../components';
import { Pin } from '../../../assets/icons';
import theme from '../../../theme/theme';
import { Option } from '.';
export default function AddressSheet({ visible, setVisible }) {
  const bottomSheet = React.useRef(null);
  useEffect(() => {
    visible ? bottomSheet.current.show() : bottomSheet.current.close();
  }, [visible]);
  return (
    <>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={400}>
        <Container>
          <Title>Delivery address</Title>
          <Options>
            <Option
              title="London, 221B Baker Street"
              caption="Hanna Gouse, +7 932 123-43-23"
              left={<Pin />}
              right={<Checkbox value={true} />}
            />
            <Option
              title="Moscow, Udaltsova 65a"
              caption="Jane Smith, +7 912 343-12-54"
              left={<Pin />}
              right={<Checkbox value={false} />}
            />
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
const Title = styled.Text`
  ${theme.text.h2.semiBold}
  margin-bottom:8px;
  margin-top: 16px;
`;

const Options = styled.ScrollView`
  margin-bottom: 16px;
`;
