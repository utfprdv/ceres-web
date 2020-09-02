import styled from 'styled-components';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  background: #fff;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props: { checked: boolean }) => (props.checked ? 'salmon' : 'white')};
  border-radius: 3px;
  border: 1px solid;
  transition: all 150ms;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px
`;
