const RESPONSES = {
  SUCCESSFUL_EMAIL_RESPONSE: {
    user: {
      message: "We've sent a password reset link to your email",
    },
  },
  ERROR_RESET_EMAIL_RESPONSE: {
    user: {
      message: 'The email provided is not registered',
    },
  },
  ERROR_INVALID_TOKEN: {
    user: {
      message: 'invalid token',
    },
  },
  ERROR_RESETTING_PASSWORD: {
    errors: {
      password: ['Password must have a number and a letter'],
    },
    SUCCESS_RESET_MESSAGE: {
      user: {
        message: 'password successfully changed',
      },
    },
  },

};

export default RESPONSES;
