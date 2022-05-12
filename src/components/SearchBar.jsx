import React from 'react';
import styled from 'styled-components/native';
import theme from './../theme/theme';
import SvgSearch from './../assets/icons/Search';

export default function SearchBar({ placeholder = 'Search', onChange, value }) {
  return (
    <Search>
      <SearchIcon fill={theme.colors.granita500} />
      <SearchInput
        placeholder={placeholder}
        style={{ ...theme.text.b1.regular }}
      />
    </Search>
  );
}

const Search = styled.View`
  background-color: ${theme.colors.granita100};
  height: 64px;
  position: relative;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 0;
`;
const SearchIcon = styled(SvgSearch)`
  position: absolute;
  z-index: 1;
  user-select: none;
  left: 16px;
  top: 20px;
`;
const SearchInput = styled.TextInput`
  flex: 1;
  height: 100%;
  padding-left: 56px;
  padding-top: 6px;
`;
