const expressJwt = require('express-jwt');

const config = require('../configs/index');
const User = require('../models/User');

async function getById(_id) {
  const user = await User.findById({ _id });
  return user || null;
}
function jwtFunc() {
  const { secret } = config;
  return expressJwt(
    {
      secret,
      async function(req, payload, done) {
        const user = await getById(payload.userID);
        // revoke token if user no longer exists
        if (!user) {
          return done(null, true);
        }
        return done();
      },
    },
  ).unless({
    path: [
      '/api/register',
      '/api/login',
    ],
  });
}

module.exports = {
  jwtFunc,
};
