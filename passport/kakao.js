const dotenv = require('dotenv');
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

dotenv.config();

module.exports = () => {
    passport.use(
        'kakao',
        new KakaoStrategy(
            {
                clientID: process.env.KAKAO_CLIENT_ID,
                callbackURL: 'http://localhost:3000/auth/kakao/callback', // 위에서 설정한 Redirect URI
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    //console.log(profile);
                    console.log(accessToken);
                    console.log(refreshToken);
                    console.log(profile);
                    done(null, profile); //이게 왜 브라우저 콘텐트로 나오지?
                } catch (err) {
                    done(err);
                }
            }
        )
    );
};
