import { HEADER } from '../helpers/index';

const urlApi = 'http://localhost:8080/api';

export const studentService = {
  validateRegistration
};

function validateRegistration(newStudent) {
  const errors = new Array(5);

  if (!newStudent.firstName) {
    errors[0] = 'required field';
  } else if (newStudent.firstName.length < 2) {
    errors[0] = 'too short';
  }

  if (!newStudent.lastName) {
    errors[1] = 'required field';
  } else if (newStudent.lastName.length < 2) {
    errors[1] = 'too short';
  }

  if (!newStudent.userName) {
    errors[2] = 'required field';
  } else if (newStudent.userName.length < 2) {
    errors[2] = 'too short';
  } else if (true) {
    errors[2] = 'user name already exists';
  }

  if (!newStudent.mail) {
    errors[3] = 'required field';
  } else if (newStudent.mail.length < 2) {
    errors[3] = 'too short';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newStudent.mail)
  ) {
    errors[3] = 'invalid email address';
  } else if (true) {
    errors[3] = 'email address already exists';
  }

  if (!newStudent.password1) {
    errors[4] = 'required field';
  } else if (newStudent.password1.length < 8) {
    errors[4] = 'password too short min length 8 sings';
  } else if (newStudent.password1 !== newStudent.password2) {
    errors[4] = 'password does not match';
  }

  return errors;
}
