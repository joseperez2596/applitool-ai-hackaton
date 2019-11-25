//Constant Elements
const ApplicationLogo = {
  Selector: 'body > div > div > div.logo-w > a > img',
}
const LoginTitle = {
  Selector: 'body > div > div > h4',
  Text: 'Login Form',
};
const UsernameLable = {
  Selector: 'body > div > div > form > div:nth-child(1) > label',
  Text: 'Username',
};
const UsernameImage = {
  Selector: 'body > div > div > form > div:nth-child(1) > div',
};
const UsernameField = {
  Selector: '#username',
};
const PassowrdLable = {
  Selector: 'body > div > div > form > div:nth-child(2) > label',
  Text: 'Password',
};
const PasswordImage = {
  Selector: 'body > div > div > form > div:nth-child(2) > div',
};
const PasswordField = {
  Selector: '#password',
};
const LoginButton = {
  Selector: '#log-in',
  Text: 'Log In',
};
const RememberMeCheckbox = {
  Selector: 'body > div > div > form > div.buttons-w > div.form-check-inline > label > input',
  Text: 'Remember Me',
};
const TwitterImage = {
  Selector: 'body > div > div > form > div.buttons-w > div:nth-child(3) > span:nth-child(1) > img',
};
const FacebookImage = {
  Selector: 'body > div > div > form > div.buttons-w > div:nth-child(3) > span:nth-child(2) > img',
};
const LinkedinImage = {
  Selector: 'body > div > div > form > div.buttons-w > div:nth-child(3) > span:nth-child(3) > img',
};

const AllLoginPageElements = {
  ApplicationLogo,
  LoginTitle,
  UsernameLable,
  UsernameImage,
  UsernameField,
  PassowrdLable,
  PasswordImage,
  PasswordField,
  LoginButton,
  RememberMeCheckbox,
  TwitterImage,
  FacebookImage,
  LinkedinImage,
};

const LoginPageElementsWithText = {
  LoginTitle,
  UsernameLable,
  PassowrdLable,
  LoginButton,
  RememberMeCheckbox,
};

export const ErrorMessageSelector = 'body > div > div > div.alert.alert-warning';

export const LoginPageElements = {
  AllLoginPageElements,
  LoginPageElementsWithText,
}