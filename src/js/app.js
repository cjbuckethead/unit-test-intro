/* eslint-disable no-console */

const state = {};

const reducer = ({ action, payload }) => {
  switch (action) {
    case 'ACTION_1':
      // do reducer things
      return {
        ...state,
        // modify state here if needed
        reviews: [...state.reviews, payload],
      };
    case 'ACTION_2':
      console.log(state.someValue);
      return state;
    default:
      throw new Error('blah');
  }
};

// We can just call the reducer here so we don't have to deal with getting user input.
reducer({
  action: 'ACTION_1',
  payload: { newReview: 'this course is so good', rating: 5 },
});
reducer({ action: 'ACTION_2' });
reducer({ action: 'ACTION_3' });
reducer({ action: 'ACTION_4' });
