import React, { Component } from 'react';
import styled from 'styled-components';

import ModalConfirmAdding from '../../Modals/ModalConfirmAdding';
import ModalAdded from '../../../components/Modals/ModalAdded';
import ModalError from '../../../components/Modals/ModalError';

const FormContainer = styled.form`
  padding: 1rem 1.25rem;
  width: 80%;
  margin: 0.5rem auto 0;
`;

const InputArea = styled.div`
  padding-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
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
  type: 'text',
  placeholder: props.placeholder
}))`
  box-sizing: border-box;
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
      width: 100%;
      left: 0;
    }
    padding-bottom: 6px;
    /* border-bottom: 2px solid ${props => props.color}; */
  }
`;

const InputUnderline = styled.span`
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: ${props => props.color};
  position: absolute;
  bottom: -1px;
  left: 50%;
  transition: all 200ms ease-out;
`;

const SubmitButton = styled.button.attrs(props => ({
  type: 'submit'
}))`
  background: linear-gradient(
    60deg,
    ${props => props.colorStart || 'lightgray'},
    ${props => props.colorEnd || 'gray'}
  );
  padding: 0.8rem 1.5rem;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 0.875rem;
  border-radius: 3px;
  margin-top: 5rem;
  width: 50%;
  transform: translateX(100%);
  letter-spacing: 1px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0px 10px 3px rgba(0, 0, 0, 0.14);
  }
`;

export default class FormAddWord extends Component {
  state = {
    polish: '',
    english: '',
    showConfirmation: false,
    successMessage: false,
    errorMessage: false
  };

  handleChange = e => {
    if (e.target.id === 'polish') {
      this.setState({ polish: e.target.value });
    } else if (e.target.id === 'english') {
      this.setState({ english: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.polish.length < 1 || this.state.english.length < 1) {
      this.setState({ errorMessage: true });
    } else {
      this.setState({ showConfirmation: true });
    }
  };

  handleAddToDb = e => {
    if (e === false) {
      this.setState({ showConfirmation: false });
    } else {
      //api add to db
      this.setState({
        showConfirmation: false,
        polish: '',
        english: '',
        successMessage: true
      });

      setTimeout(() => this.setState({ successMessage: false }), 3000);
    }
  };

  handleErrorMessageClose = () => {
    this.setState({ errorMessage: false });
  };

  render() {
    return (
      <FormContainer>
        <InputArea>
          <InputText
            id='polish'
            required
            placeholder='enter polish '
            color={this.props.colorStart}
            value={this.state.polish}
            onChange={this.handleChange}
          />
          <InputLabel htmlFor='polish'>enter polish word</InputLabel>
          <InputUnderline color={this.props.colorStart} />
        </InputArea>

        <InputArea>
          <InputText
            id='english'
            required
            placeholder='enter english '
            color={this.props.colorStart}
            value={this.state.english}
            onChange={this.handleChange}
          />
          <InputLabel htmlFor='english'>enter english word</InputLabel>
          <InputUnderline color={this.props.colorStart} />
        </InputArea>

        <SubmitButton
          colorStart={this.props.colorStart}
          colorEnd={this.props.colorEnd}
          onClick={this.handleSubmit}
        >
          submit
        </SubmitButton>
        {this.state.showConfirmation ? (
          <ModalConfirmAdding
            polishWord={this.state.polish}
            englishWord={this.state.english}
            handleAddToDb={this.handleAddToDb}
          />
        ) : null}
        {this.state.successMessage ? <ModalAdded /> : null}
        {this.state.errorMessage ? (
          <ModalError handleErrorMessageClose={this.handleErrorMessageClose} />
        ) : null}
      </FormContainer>
    );
  }
}
