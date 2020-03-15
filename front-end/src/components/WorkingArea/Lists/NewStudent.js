import React from 'react';
import * as colors from '../../../modules/Colors';

import {
  Button,
  FormContainer,
  InputField,
  SimpleRow
} from '../../BasicElements';

const NewStudent = ({
  newStudent: {
    firstName,
    lastName,
    userName,
    mail,
    password1,
    password2,
    errors
  },
  handleShowAddStudentBox,
  handleStudentCreate,
  handleStudentValues
}) => {
  return (
    <FormContainer background='white' width='60%' errors={errors}>
      <SimpleRow display='flex'>
        <InputField
          id='studentFirstName'
          underLineColor={colors.ROSE}
          label='first name'
          error={errors[0]}
          value={firstName}
          handleStudentValues={handleStudentValues}
        />
        <InputField
          id='studentLastName'
          underLineColor={colors.ROSE}
          label='last name'
          error={errors[1]}
          value={lastName}
          handleStudentValues={handleStudentValues}
        />
      </SimpleRow>

      <SimpleRow>
        <InputField
          id='studentUserName'
          underLineColor={colors.ROSE}
          label='username'
          error={errors[2]}
          value={userName}
          handleStudentValues={handleStudentValues}
        />
      </SimpleRow>

      <SimpleRow>
        <InputField
          id='studentMail'
          underLineColor={colors.ROSE}
          label='email address'
          type='email'
          error={errors[3]}
          value={mail}
          handleStudentValues={handleStudentValues}
        />
      </SimpleRow>

      <SimpleRow display='flex'>
        <InputField
          id='studentPassword1'
          underLineColor={colors.ROSE}
          label='password'
          type='password'
          error={errors[4]}
          value={password1}
          handleStudentValues={handleStudentValues}
        />
        <InputField
          id='studentPassword2'
          underLineColor={colors.ROSE}
          label='retype password'
          type='password'
          error={errors[4]}
          value={password2}
          handleStudentValues={handleStudentValues}
        />
      </SimpleRow>

      <SimpleRow marginTop='2rem' display='flex' justifyContent='flex-end'>
        <Button
          background={colors.INFO}
          onClick={handleStudentCreate}
          children='create student'
        />
        <Button
          background={colors.DANGER}
          onClick={handleShowAddStudentBox}
          children='cancel'
        />
      </SimpleRow>
    </FormContainer>
  );
};

export default NewStudent;
