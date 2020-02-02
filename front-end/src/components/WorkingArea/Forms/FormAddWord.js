import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 1rem 3rem 0;
  padding: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  height: 63%;
`;

const FormHeader = styled.div`
  display: flex;
`;

const FormHeaderIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  background: linear-gradient(
    60deg,
    ${props => props.colorStart || 'lightgray'},
    ${props => props.colorEnd || 'gray'}
  );
  margin-right: 1rem;
  transform: translateY(-2rem);
`;

const FormHeaderIconArea = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0.75rem auto;
`;

const FormHeaderTitle = styled.h3`
  color: #3c4858;
  font-weight: 300;
  text-transform: capitalize;
  transform: translateY(-0.2rem);
`;

const WordInput = styled.div``;

export default class FormAddWord extends Component {
  render() {
    return (
      <FormContainer>
        <FormHeader>
          <FormHeaderIcon
            colorStart={this.props.colorStart}
            colorEnd={this.props.colorEnd}
          >
            <FormHeaderIconArea>{this.props.icon}</FormHeaderIconArea>
          </FormHeaderIcon>
          <FormHeaderTitle>{this.props.title}</FormHeaderTitle>
        </FormHeader>
        <WordInput>pol</WordInput>
        <WordInput>eng</WordInput>
      </FormContainer>
    );
  }
}
