import express from 'express';
import cors from 'cors';
import { users, projects, userProjects, countProjects } from './mongo.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import { middleAuth } from './middleWare/middleAuth.mjs';

const port = 5000;
const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//일반 로그인 부분
app.post('/login', async (req, res) => {
  try {
    // 서버의 userMail과 클라이언트의 userMail을 비교하는 부분
    const userFind = await users
      .findOne({ userMail: req.body.userMail })
      .exec();

    if (!userFind) {
      return res.json({
        loginSuccess: false,
        // 차후 보안을 위해 문구를 이메일 또는 비밀번호가 틀렸습니다. 라고 교체
        message: '해당되는 이메일이 없습니다.',
      });
    }
    // 이메일이 DB에 있을 경우 비밀번호 확인하는 부분
    // bcrypt를 사용해 bcrypt.compare로 비교
    const checkUserPwd = await bcrypt.compare(
      req.body.userPassword,
      userFind.userPassword
    );
    if (checkUserPwd) {
      await userFind.generateToken((err, data) => {
        if (err) return res.status(400).send(err);
        // token을 클라이언트로 보냄
        res.status(200).json({
          loginSuccess: true,
          message: '로그인 성공',
          token: userFind.token,
          userName: userFind.userName,
          _id: userFind._id,
        });
      });
    } else {
      res.status(200).json({
        loginSuccess: false,
        message: '비밀번호가 틀렸습니다.',
      });
    }
  } catch (e) {
    res.status(500).json({ loginSuccess: false, message: '서버 에러' });
  }
});

// 카카오 로그인 부분
app.post('/login/kakao', async (req, res) => {
  try {
    //req.body.userMail : 카카오아이디, req.body.token : 카카오토큰
    const userFind = await users
      .findOne({ userMail: req.body.userMail })
      .exec();
    if (!userFind) {
      const sendData = new users(req.body);
      sendData.save();
      const userFindKakao = await users
        .findOne({ userMail: req.body.userMail }) //findOne은 일치하는 하나의 값만 가져옴
        .exec();
      await userFindKakao.generateToken((err, data) => {
        if (err) return res.status(400).send(err);
        // token을 클라이언트로 보냄
        return res.status(200).json({
          kakaoLoginSuccess: true,
          message: '로그인 성공',
          token: userFindKakao.token,
          userName: userFindKakao.userName,
          _id: userFindKakao._id,
        });
      });
    }
    if (userFind) {
      await userFind.generateToken((err, data) => {
        if (err) return res.status(400).send(err);
        // token을 클라이언트로 보냄
        return res.status(200).json({
          kakaoLoginSuccess: true,
          message: '로그인 성공',
          token: userFind.token,
          userName: userFind.userName,
          _id: userFind._id,
        });
      });
      const userTokenUpdate = await users.findOneAndUpdate(
        { userMail: req.body.userMail },
        { token: req.body.token }
      );
      if (!userTokenUpdate) {
        return res.json({ kakaoLoginSuccess: false });
      }
      return res.status(200).json({ kakaoLoginSuccess: true });
    }
  } catch (err) {
    console.log(err);
  }
});

// 네이버 로그인 부분

// 회원가입 부분
app.post('/signup', async (req, res) => {
  try {
    const { userName, userMail, userPassword, userPhoneNum, userAddr } =
      req.body;
    const hashedPwd = await bcrypt.hash(userPassword, 10);
    const data = {
      userName: userName,
      userMail: userMail,
      userPassword: hashedPwd,
      userPhoneNum: userPhoneNum,
      userAddr: userAddr,
    };
    await users.insertMany([data]);
    return res.status(200).json({ signupSuccess: true });
  } catch (err) {
    console.log(err);
  }
});

//이메일 중복확인
app.post('/signup/userMailCheck', async (req, res) => {
  try {
    const userFindMail = await users
      .findOne({ userMail: req.body.userMail })
      .exec();
    if (!userFindMail) {
      // 중복확인이기때문에 사용자가 존재하지않을때 true
      return res.status(200).json({ userMailCheck: true });
    }
    if (userFindMail) {
      //중복확인이기때문에 사용자가 존재하면 false
      return res.status(200).json({ userMailCheck: false });
    }
  } catch (err) {
    console.log(err);
  }
});

// 사용자 인증에 필요한 src\redux\reducer\authAction.js 에서 get 요청
app.get('/auth', middleAuth, (req, res) => {
  try {
    res.status(200).json({
      _id: req.users._id, // 몽고DB _id
      isAdmin: req.users.role === 0 ? false : true, // role이 0이면 일반사용자, 0이아니면 운영자
      isLogin: true,
    });
  } catch (err) {
    console.log('server.mjs', err);
  }
});

//홈에서 유저네임불러오는 테스트용
app.get('/projName', async (req, res) => {
  try {
    const projName = await projects.find({}, 'projName');
    res.status(200).json({ projName });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`${port}번 포트`);
});
