import { HEADER } from '../helpers/index';

const urlApi = 'http://localhost:8080/api';

export const userService = {
  authorization,
  validateAuthorization,
  register,
  validateRegistration
};

async function authorization(form) {
  const body = {
    userName: form.userName
  };

  const requestOptions = {
    method: 'POST',
    headers: HEADER.AUTHORIZATION(form.userName, form.password),
    body: JSON.stringify(body)
  };

  const response = await fetch(`${urlApi}/login`, requestOptions);
  return response;
}

async function register(form) {
  const body = {
    userName: form.userName,
    firstName: form.firstName,
    lastName: form.lastName,
    password: form.password1,
    mail: form.email
  };

  const requestOptions = {
    method: 'POST',
    headers: HEADER.CONTENT(),
    body: JSON.stringify(body)
  };

  const response = await fetch(`${urlApi}/register`, requestOptions);
  return response;
}

function validateRegistration(form) {
  // musisz tutaj stworzyć tablicę
  if (!form.userName) {
    return 'Missing Username'; // zamiast zwracać wrzucaj to, jako ten obiekt o którym wspominałem, do tablicy
  } else if (form.userName.length < 2) {
    return 'Username too short';
  }

  if (!form.firstName) {
    return 'Missing first name';
  } else if (form.firstName.length < 2) {
    return 'First Name too short';
  }

  if (!form.lastName) {
    return 'Missing last name';
  } else if (form.lastName.length < 2) {
    return 'Last Name too short';
  }

  if (!form.password1) {
    return 'Missing password';
  } else if (form.password1.length < 3) {
    return 'password too short (min. length = 3)';
  } else if (form.password1 !== form.password2) {
    return 'passwords does not match';
  }

  if (!form.email) {
    return 'Missing email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
    return 'invalid email address';
  }

  return null; // tutaj zwracasz tą tablicę błędów
}

function validateAuthorization(form) {
  if (!form.userName) {
    return 'Missing Username';
  }

  if (!form.password) {
    return 'Missing password';
  }
}
