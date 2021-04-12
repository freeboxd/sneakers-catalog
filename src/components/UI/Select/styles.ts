import styled from 'styled-components';

type SelectProps = {
  error?: boolean,
  disabled?: boolean,
};

export const Container = styled.div`
  display: flex;
  border: 0.900966px solid #e8e8e8;
  border-radius: 25px;
`;

export const SelectElement = styled.select<SelectProps>`
  background: transparent;
  border: transparent;
  width: 6rem;
  height: 2.9rem;
  font-size: 1.6rem;
  font-weight: 300;
  padding-left: 1rem;
  margin-right: 1rem;
  color: #808080;

  box-shadow: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);
  background-repeat: no-repeat;
  background-position-x: 42px;
  background-position-y: 2px;
`;
