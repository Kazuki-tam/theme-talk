import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from "react-spring";

export default function Rule() {
  let [member, changeMember] = useState(null);
  useEffect(() => {
    let strageData = localStorage.getItem("gameData");
    if (strageData) {
      let randomNum = Math.floor(Math.random() * strageData) + 1;
      changeMember(randomNum);
    } else {
      const host = location.host;
      location.replace(`https://${host}`);
    }
  });

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
    "最近の気になるニュース",
    "もし100万円もらったら何をする？",
    "もし1000万円もらったら何をする？",
    "もし1億円もらったら何をする？",
    "こんな恋愛してみたい",
    "普段言えないこと",
    "言われて嬉しかった言葉",
    "一生に一度は訪れてみたい場所",
    "得意料理",
    "異性に言われたいセリフ",
    "異性の好きな仕草",
    "初恋",
    "趣味",
    "他の人にオススメしたいこと",
    "最後に怒ったのはいつ？どんな時？",
    "生まれ変われるとしたら何になりたいか",
    "最近テンションが上がったこと",
    "自分が苦手なこと",
    "学生時代で一番思い出に残っていること",
    "理想とする休日の過ごし方",
    "理想のデートプラン",
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
    "こんなアプリ使ってます",
    "自分を動物に例えるなら？",
    "自分の次の番号の人の印象",
    "実は私〇〇なんです",
    "今だから言える過去の失敗談",
    "人生で一番頑張ったこと",
    "これだけは辞めれないこと"
  ];

  const ShowTheme = () => {
    const themesNum = themes.length;
    const index = Math.floor(Math.random() * themesNum);
    const selectedTheme = themes[index];

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
            <Link href="/game">
              <a className="btn">次のテーマへ</a>
            </Link>
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