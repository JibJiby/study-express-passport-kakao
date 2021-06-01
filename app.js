const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const app = express();

const authRouter = require('./routes/auth');

const passportConfig = require('./passport');
const cookieParser = require('cookie-parser');

dotenv.config();
// const db =
passportConfig();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser('abc'));
// 이건 해줘야 브라우저가 기억할 수 있도록 해주는구나
app.use(
    session({
        secret: 'abc',
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/home', (req, res, next) => {
    // if (req.user) {
    //     res.send('로그인 성공\n' + req.user);
    // } else {
    //     res.send('그냥 홈');
    // }
    res.send('hello home');
});

// http://localhost:3000/auth/kakao/callback
app.use('/auth', authRouter);

// const authenticateUser = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         next();
//     } else {
//         res.status(301).redirect('/login');
//     }
// };

// app.get('/', authenticateUser, (req, res, next) => {
//     if (req.user) {
//         return res.send('홈페이지 +' + req.user);
//     } else {
//         return res.send('홈페이지');
//     }
// });

app.listen('3000', () => {
    console.log('서버 실행 중');
});
