import Head from 'next/head'
import Link from 'next/link'
import store from 'store';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Rule() {
  const memberList = Number(store.get("memberList"));
  const checkList = store.get("checkList");
  const arryMemberList = Array.from({ length: memberList }, (_, i) => i + 1);
  let [member, changeMember] = useState(null);
  let [randomData, changeRandom] = useState(arryMemberList);
  
  useEffect(() => {
    // changeRandom([...Array(memberList).keys()].map(i => ++i));
    handleGame();
  }, []);

  function handleGame() {
    if (memberList) {
      if (randomData && randomData.length > 0 && checkList.duplicateIndex) {
        let index = Math.floor(Math.random() * randomData.length);
        changeMember(randomData[index]);

        if (index >= 0) {
          randomData.splice(index, 1);
        }
      } else if (randomData.length == 0 && checkList.duplicateIndex) {
        alert("全員にお題が割り振られました！");
        redirect();
      } else {
        let randomNum = Math.floor(Math.random() * memberList) + 1;
        if (member == randomNum) {
          handleGame();
        } else {
          changeMember(randomNum);
        }
      }
    } else {
      redirect();
    }
  }

  function redirect () {
    const host = location.host;
    const protocal = location.protocol;
    location.replace(`${protocal}//${host}`);
  }

  const ShowNumber = () => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 1000 }
    });
    return (
      <div>
        <animated.p className="message-text" style={props}><span className="message-bold">{member}番</span>の人が</animated.p>
        <style jsx>{`
          .message-bold {
            font-size: 2.8rem;
            font-weight: bold;
            color: #0070f3;
          }
       `}</style>
      </div>
    );
  }

  const themes = [
    "最近ハマっていること",
    "最近落ち込んだこと",
    "最近面白かったこと",
    "最近買った高いもの",
    "最近困っていること",
    "最近の気になるニュース",
    "最近緊張したこと",
    "もし100万円もらったら何をする？",
    "もし1000万円もらったら何をする？",
    "もし1億円もらったら何をする？",
    "もし引っ越せるならどこに住みたい？",
    "無人島に行くならまず何を持っていくか",
    "生まれ変われるとしたら何になりたいか",
    "参加メンバーを〇〇に例えるなら？",
    "こんな恋愛してみたい",
    "普段言えないこと",
    "言われて嬉しかった言葉",
    "一生に一度は訪れてみたい場所",
    "得意料理",
    "異性に言われたいセリフ",
    "初恋",
    "趣味",
    "他の人にオススメしたいこと",
    "最後に怒ったのはいつ？どんな時？",
    "最近テンションが上がったこと",
    "今欲しいもの",
    "自分が苦手なこと",
    "自分のささやかな幸せ",
    "春の思い出",
    "夏の思い出",
    "秋の思い出",
    "冬の思い出",
    "学生時代で一番思い出に残っていること",
    "理想とする休日の過ごし方",
    "理想のデートプラン",
    "好きな異性の仕草",
    "好きな言葉",
    "好きな歴史上の人物",
    "好きな食べ物",
    "好きな映画",
    "好きなアーティスト",
    "好きな音楽",
    "好きなテレビ番組",
    "好きなYouTuber",
    "好きな本",
    "好きなファッション",
    "好きな動物",
    "好きだった給食（学食）のメニュー",
    "子どもの頃の夢",
    "こんなアプリ使ってます",
    "自分を動物に例えるなら？",
    "次の番号の人の印象",
    "実は私〇〇なんです",
    "今だから言える過去の失敗談",
    "ストレス解消方法",
    "人生で一番頑張ったこと",
    "初めて〇〇した話",
    "本当にあった怖い話",
    "本当にあった恥ずかしい話",
    "お世話になったこと",
    "自分をほめてあげたいこと",
    "将来やりたいこと",
    "子どもの頃得意だったこと",
    "これだけは辞めれないこと"
  ];

  const ShowTheme = () => {
    const themesNum = themes.length;
    const index = Math.floor(Math.random() * themesNum);
    const selectedTheme = themes[index];

    // if (index >= 0 && checkList && checkList.duplicateTheme) {
    //   themes.splice(index, 1);
    //   console.log(index);
    //   console.log(themesNum);
    // }

    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 1500 }
    });
    return (
    <div>
        <animated.p className="message-theme" style={props}><span className="message-highlight">{selectedTheme}</span></animated.p>
        <style jsx>{`
          .message-theme {
            font-size: 2.4rem;
            z-index: 1;
           }
          .message-highlight {
            background:linear-gradient(transparent 65%, #85bdff 65%);
          }
       `}</style>
    </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Let's Talk! | Theme Talk</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="description" content="Theme Talk（テーマトーク）のゲーム画面です。気持ち良くゲームができるよう相手への気遣いを忘れずプレイしましょう。" />
        <meta property="og:title" content="Let's Talk! | Theme Talk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theme-talk.vercel.app/ogp.png" />
        <meta property="og:url" content="https://theme-talk.vercel.app/" />
        <meta property="og:description" content="Theme Talk（テーマトーク）のゲーム画面です。気持ち良くゲームができるよう相手への気遣いを忘れずプレイしましょう。" />
        <meta property="og:site_name" content="Let's Talk! | Theme Talk" />
        <meta property="og:locale" content="ja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SiteAccount" />
      </Head>

      <div className="shutter"></div>
      <main className="main">
        <div className="inner-container">
          <h1 className="title">
            <span className="title-accent">Let's</span> Talk!!
          </h1>

          <div className="message-conainer">
            <ShowNumber />
            <ShowTheme />
            <p className="text">について話す</p>
          </div>

          <div className="btn-nav">
            <Link href="/">
              <a className="sub-btn u-mr20">トップへ戻る</a>
            </Link>
            <button type="button" className="btn" onClick={(e) => handleGame(e.preventDefault())}>次のテーマへ</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Let's have fun together!!</p>
      </footer>

      <style jsx global>{`
        /* CSS Remedy */
        *,::after,::before{box-sizing:border-box}html{line-sizing:normal}body{margin:0}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h4{font-size:1rem}h5{font-size:.83rem}h6{font-size:.67rem}h1{margin:.67em 0}pre{white-space:pre-wrap}hr{border-style:solid;border-width:1px 0 0;color:inherit;height:0;overflow:visible}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle;max-width:100%}canvas,img,svg,video{height:auto}audio{width:100%}img{border-style:none}svg{overflow:hidden}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
        html,
        body {
          font-size: 62.5%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        @for $i from 0 through 60 {
          .u-mt#{$i * 5} {
            margin-top: #{$i * 5}px;
          }
        }

        @for $i from 0 through 60 {
          .u-mb#{$i * 5} {
            margin-bottom: #{$i * 5}px;
          }
        }
        @for $i from 0 through 60 {
          .u-ml#{$i * 5} {
            margin-left: #{$i * 5}px;
          }
        }
        @for $i from 0 through 60 {
          .u-mr#{$i * 5} {
            margin-right: #{$i * 5}px;
          }
        }   
      `}</style>

      <style jsx>{`
        $main-color: #0070f3;
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        .shutter{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: $main-color;
          z-index: 9999;
          -webkit-animation: byeShutter 2.6s forwards;
          animation: byeShutter 2.6s forwards;
        }

        .shutter::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          background-color: #fff;
          width: 0;
          height: 1px;
          -webkit-animation: shutterOpen 2.6s forwards;
          animation: shutterOpen 2.6s forwards;
        }

        .main, .footer {
          -webkit-animation: contentScale 2.6s forwards;
          animation: contentScale 2.6s forwards;
        }

        @keyframes byeShutter {
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            display: none;
            z-index: -1;
          }
        }

        @keyframes shutterOpen {
          0% {
            width: 0;
            height: 1px;
          }
          50% {
            width: 100%;
            height: 1px;
          }
          90% {
            width: 100%;
            height: 100%;
          }
          100% {
            width: 100%;
            height: 100%;
          }
        }

        @keyframes contentScale {
          70% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .inner-container {
          width: 100%;
          margin: 0 auto;
          text-align: center;

          @media (max-width: 768px) {
            padding: 0 1rem;
          }
        }

        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          background: $main-color;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-text {
          font-size: 1.2rem;
          color: #fff;
        }

        .message-conainer {
          width: 680px;
          padding: 4rem 2rem;
          border: 3px solid $main-color;
          margin: 4rem auto;
          font-size: 2rem;

          @media (max-width: 768px) {
            width: 100%;
          }
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 5.6rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .btn-nav {
          display: flex;
          width: 100%;
          justify-content: center;
        }

        .btn {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          display: block;
          padding: 2rem 1rem;
          box-sizing: border-box;
          max-width: 380px;
          text-align: center;
          letter-spacing: 2px;
          font-size: 2.2rem;
          border-radius: 1rem;
          color: #fff;
          background: #0070f3;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            opacity: .7;
          }

          @media (max-width: 768px) {
            font-size: 4.2vw;
          }
        }

        .sub-btn {
          display: block;
          padding: 2rem 1rem;
          box-sizing: border-box;
          max-width: 380px;
          text-align: center;
          letter-spacing: 2px;
          font-size: 2.2rem;
          border: 1px solid #0070f3;
          border-radius: 1rem;
          color: #0070f3;
          background: #fff;
          text-decoration: none;

          @media (max-width: 768px) {
            font-size: 4.2vw;
          }
        }

        .title-accent {
          color: #0070f3;
        }

        .form-group {
          max-width: 380px;
          margin-right: auto;
          margin-left: auto;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.5rem;
          font-size: 2rem;
          text-align: center;
          border-radius: 3px;
          border: 2px solid #ddd;
          box-sizing: border-box;
        }

        .form-text {
          font-size: 2.4rem;
        }

        @media (max-width: 768px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}