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

  rating: {
    averageRating: 0,
    rating: 0,
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

  verify: {
    loading: false,
    success: false,
    failed: false,
  },

  userProfile: {
    profile: {},
    loading: false,
    success: false,
  },

  updateProfile: {
    userProfile: {},
    errors: {},
    loading: false,
    success: false,
  },

  userArticles: {
    articles: [],
    loading: false,
  },

  favouriteArticles: {
    articles: [],
    loading: false,
  },
};
