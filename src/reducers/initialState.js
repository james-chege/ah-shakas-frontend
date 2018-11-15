export default {
  signUp: {
    loading: false,
    success: false,
  },
  login: {
    onPending: true,
    onFulfilled: false,
    onRejected: false,
  },
  resetPassword: {
    data: {},
    errors: {},
  },
  articles: {
    article: {},
    loading: false,
    success: false,
  },
  socialauth: {
    resolved: false,
    rejected: false,
    pending: false,
  },
};
