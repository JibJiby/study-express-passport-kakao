const express = require('express');
const router = express.Router();
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const dotenv = require('dotenv');

dotenv.config();

router.get('/', (req, res, next) => {
    if (req.user) {
        return res.send('로그인 성공!');
    } else {
        return res.send('로그인 안했어!');
    }
});

router.get('/kakao', passport.authenticate('kakao'));

router.get(
    '/kakao/callback',
    passport.authenticate('kakao', {
        failureRedirect: '/auth/login',
    }),
    (req, res) => {
        console.log('리다이렉트 auth');
        console.log(req.user); // kakao 전략의 profile이다. 왜냐 done(null,여기에 넣어줘서)
        res.redirect('/auth'); // 위 '/'으로 이동. 등록 필요 없음.
    }
);

router.get('/logout', (req, res, next) => {
    //
});

module.exports = router;
