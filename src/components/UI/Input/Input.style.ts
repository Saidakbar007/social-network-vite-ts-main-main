import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: 10px;
`;

interface SinterfaceProps {
  $iserror: boolean;
}

export const Input = styled.input<SinterfaceProps>`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  padding: 12px 15px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  outline: 0;
  font-family: inherit;
  transition: 200ms;

  &:last-child {
    margin-bottom: 40px;
  }

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  ${(props) =>
    props.$iserror &&
    css`
      border-color: ${props.theme.colors.red};
      color: ${props.theme.colors.red}; // Можно изменить цвет текста, если нужно
    `}

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.primeColor};

    @media (max-width: 730px) {
      padding: 10px 12px;
    }
  }
`;

export default Input;
