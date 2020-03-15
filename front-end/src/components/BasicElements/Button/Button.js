import React from 'react';
import styled from 'styled-components';

import * as colors from '../../../modules/Colors';

const getBoxShadow = (isHover, background) => {
  if (isHover === false) {
    switch (background) {
      case colors.DEFAULT:
        return colors.DEFAULT_BOX_SHADOW;
      case colors.PRIMARY:
        return colors.PRIMARY_BOX_SHADOW;
      case colors.INFO:
        return colors.INFO_BOX_SHADOW;
      case colors.SUCCESS:
        return colors.SUCCESS_BOX_SHADOW;
      case colors.WARNING:
        return colors.WARNING_BOX_SHADOW;
      case colors.DANGER:
        return colors.DANGER_BOX_SHADOW;
      case colors.ROSE:
        return colors.ROSE_BOX_SHADOW;
      default:
        return colors.DEFAULT_BOX_SHADOW;
    }
  } else {
    switch (background) {
      case colors.DEFAULT:
        return colors.DEFAULT_HOVER_BOX_SHADOW;
      case colors.PRIMARY:
        return colors.PRIMARY_HOVER_BOX_SHADOW;
      case colors.INFO:
        return colors.INFO_HOVER_BOX_SHADOW;
      case colors.SUCCESS:
        return colors.SUCCESS_HOVER_BOX_SHADOW;
      case colors.WARNING:
        return colors.WARNING_HOVER_BOX_SHADOW;
      case colors.DANGER:
        return colors.DANGER_HOVER_BOX_SHADOW;
      case colors.ROSE:
        return colors.ROSE_HOVER_BOX_SHADOW;
      default:
        return colors.DEFAULT_HOVER_BOX_SHADOW;
    }
  }
};

const ButtonBox = styled.button.attrs(props => ({
  type: props.type || 'button'
}))`
  background: ${props => props.background || colors.DEFAULT};
  color: ${props => props.color || colors.WHITE};

  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.42857143;

  margin: 0 1rem;
  padding: 0.8rem 2rem;
  width: ${props => props.width};

  border: none;
  border-radius: 3px;

  transition: 0.2s;
  box-shadow: ${props => getBoxShadow(false, props.background)};

  &:hover {
    box-shadow: ${props => getBoxShadow(true, props.background)};
  }
`;

const Button = ({ background, color, width, children, type, onClick }) => {
  return (
    <ButtonBox
      background={background}
      color={color}
      type={type}
      width={width}
      onClick={onClick}
    >
      {children}
    </ButtonBox>
  );
};

export default Button;
