const passport = require('passport');
const kakao = require('./kakao');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            // const user = await User.findOne({ where: { id } });
            done(null, id); // req.user로 들어가나?
        } catch (error) {
            console.error(error);
            done(error);
        }
    });

    kakao();
};
