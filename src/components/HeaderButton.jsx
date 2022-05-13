import { TouchableOpacity } from 'react-native';
import React from 'react';

export default function HeaderButton({ icon }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 999,
        padding: 6,
      }}
    >
      {icon}
    </TouchableOpacity>
  );
}
