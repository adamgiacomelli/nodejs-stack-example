const SUCCESS = 'SUCCESS';
const EXAMPLE_SUCCESS_TEXT = 'Successfully acquired example data';

async function getRoot(req, res, next) {
  try {
    res.data = ['this', 'is', 'example', 'data'];

    res.message = {
      text: EXAMPLE_SUCCESS_TEXT,
      status: SUCCESS,
    };

    return next();
  } catch (err) {
    return next(new Error(err));
  }
}

async function getError(req, res, next) {
  return next(new Error());
}

module.exports = {
  getRoot,
  getError,
};
