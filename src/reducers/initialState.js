export default {
  signUp: {
    loading: false,
    success: false,
  },

  login: {
    onPending: false,
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
  article: {
    article: {},
    loading: false,
    success: false,
  },
  allArticles: {
    articles: {
      results: [],
      banner: [],
      recent: [],
    },
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

  bookmark: {
    bookmarked: false,
    success: false,
    failure: false,
  },
  comments: {
    data: {},
    loading: false,
    success: false,
    failed: false,
    errors: {},
  },

  likeDislike: {
    pending: false,
    rejected: false,
    resolved: false,
  },
};
