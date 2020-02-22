const CONTENT = () => {
  const header = new Headers();
  header.append('Content-Type', 'application/json');
  return header;
};

const AUTHORIZATION = (user, password) => {
  const header = new Headers();
  header.append('Content-Type', 'application/json');
  header.append('Authorization', 'Basic ' + btoa(user + ':' + password));
  return header;
};

export const HEADER = {
  CONTENT,
  AUTHORIZATION
};
