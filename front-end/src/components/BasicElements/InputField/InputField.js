import React from 'react';
import styled from 'styled-components';

const getPosition = error => {
  return error ? '12px' : '1px';
};

const InputArea = styled.div`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding: 1rem 1rem 0 1rem;
  margin-top: 1rem;
  position: relative;
`;

const InputLabel = styled.label.attrs(props => ({
  className: 'form-label'
}))`
  font-weight: 300;
  text-transform: capitalize;

  position: absolute;
  top: 5px;
  display: block;
  transition: 0.2s;
  font-size: 0.8rem;
  color: #aaa;
`;

const InputText = styled.input.attrs(props => ({
  type: props.type || 'text',
  required: 'required',
  placeholder: props.placeholder || 'stub'
}))`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 1.3rem;
  font-weight: 700;
  color: #495057;
  padding: 0.375rem 0;
  background: transparent;
  transition: all 0.2s;
  letter-spacing: 1px;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form-label {
    font-size: 1rem;
    cursor: text;
    top: 2rem;
  }

  &:focus {
    ~ .form-label {
      top: 5px;
      font-size: 0.8rem;
    }
    ~ span {
      width: calc(100% - 2rem);
      left: 1rem;
      bottom: ${props => getPosition(props.error)};
    }
    padding-bottom: 6px;
  }
`;

const InputUnderline = styled.span`
  content: ' ';
  display: block;
  width: 0;
  height: 2px;
  background: ${props => props.background};
  position: absolute;
  bottom: ${props => getPosition(props.error)};
  left: 50%;
  transition: all 200ms ease-out;
`;

const InputErrorMessage = styled.div`
  color: red;
  font-size: 11px;
  text-transform: capitalize;
  padding-top: 2px;
`;

const InputField = ({
  containerWidth,
  error,
  id,
  label,
  type,
  underLineColor,
  value,
  handleStudentValues
}) => {
  return (
    <InputArea width={containerWidth}>
      <InputText
        id={id}
        type={type}
        value={value}
        onChange={handleStudentValues}
        error={error}
      ></InputText>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputUnderline
        background={underLineColor}
        error={error}
      ></InputUnderline>
      {error ? <InputErrorMessage children={error} /> : <InputErrorMessage />}
    </InputArea>
  );
};

export default InputField;
