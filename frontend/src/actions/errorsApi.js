export const  ERROR_ORDER_PASSED = 'ERROR_ORDER_PASSED';

export const errorOrderPassed = (message) => ({
  type: ERROR_ORDER_PASSED,
  message,
});
