export const  ERROR_ORDER_PASSED = 'ERROR_ORDER_PASSED';
export const  ERROR_AUTH_SIGNUP = 'ERROR_AUTH_SIGNUP';

export const errorOrderPassed = (message) => ({
  type: ERROR_ORDER_PASSED,
  message,
});
export const errorAuthSignUp = (message, username, email) => ({
  type: ERROR_AUTH_SIGNUP,
  message,
  username,
  email,
})
