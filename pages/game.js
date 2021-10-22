import Head from 'next/head';
import Link from 'next/link';
import { generalThemes, schoolThemes, jobThemes } from '../data/themedata';
import store from 'store';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Rule() {
  const memberList = Number(store.get("memberList"));
  const checkList = store.get("checkList");
  const categoryList = store.get("categoryList");
  const customThemesList = store.get("customThemesList");
  const arryMemberList = Array.from({ length: memberList }, (_, i) => i + 1);
  const checkDisplayIndex = checkList && checkList.displayIndex;

  let themes;
  if (categoryList == "general") {
    themes = generalThemes;
  } else if (categoryList == "school") {
    themes = schoolThemes;
  } else if (categoryList == "job-hunting") {
    themes = jobThemes;
  } else if (categoryList == "custom-theme" && customThemesList) {
    themes = customThemesList;
  } else {
    themes = generalThemes;
  }

  const themesNum = themes.length;
  const themesIndex = Math.floor(Math.random() * themesNum);
  const selectedTheme = themes[themesIndex];

  let [theme, changeTheme] = useState(selectedTheme);
  let [member, changeMember] = useState(null);
  let [memberActive, setMemberActive] = useState(true);
  let [messageActive, setMessageActive] = useState(false);
  let [randomData, changeRandom] = useState(arryMemberList);
  
  useEffect(() => {
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
      handleTheme();
    } else {
      redirect();
    }
  }

  function redirect () {
    const host = location.host;
    const protocal = location.protocol;
    location.replace(`${protocal}//${host}`);
  }

  function handleTheme(event, val) {
    if (val == "onlyTheme") {
      setMemberActive(false);
    } else {
      setMemberActive(true);
    }

    changeTheme(selectedTheme);
    if (theme == selectedTheme) {
      const themesreIndex = Math.floor(Math.random() * themesNum);
      changeTheme(themes[themesreIndex]);
    }
  }

  const ShowNumber = () => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: memberActive ? 0 : 1 },
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

  const ShowTheme = () => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 1500 }
    });
    return (
    <div>
        <animated.p className="message-theme" style={props}><span className="message-highlight">{theme}</span></animated.p>
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

  const ShowMessage = () => {
    if (randomData.length == 0) {
      setMessageActive(true);
    }

    return (
      <p className={`theme-message ${messageActive ? "is-active" : ""}`}>
        ＊これが最後のお題です。

        <style jsx>{`
          .theme-message {
            font-size: 1.4rem;
            color: #0070f3;
            display: none;
          }
          .is-active {
            display: block;
          }
       `}</style>
      </p>
    );
  }

  const ShowCategory = () => {
    let categoryName;
    if (categoryList == "general") {
      categoryName = "一般的なテーマ";
    } else if (categoryList == "school") {
      categoryName = "学校向けテーマ";
    } else if (categoryList == "job-hunting") {
      categoryName = "就活対策テーマ";
    } else if (categoryList == "custom-theme") {
      categoryName = "カスタムテーマ";
    } else {
      categoryName = "一般的なテーマ";
    }

    return (
      <span className="category-name">
        {categoryName}

        <style jsx>{`
          .category-name {
            font-size: 1.8rem;
            font-weight: normal;
            color: #333;
            position: relative;
            display: inline-block;
            padding: 0 5.5rem;
            text-align: center;
            font-size: 2.4rem;
          }

          .category-name::before, :after {
            content: '';
            position: absolute;
            top: 50%;
            display: inline-block;
            width: 4.5rem;
            height: 2px;
            background-color: #0070f3;
          }

          .category-name::before {
            left: 0;
          }

          .category-name::after {
            right: 0;
          }
       `}</style>
      </span>
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
            <span className="title-accent">Let's</span> Talk!!<br />
            <ShowCategory />
          </h1>

          <div className="message-conainer">
            {!checkDisplayIndex && 
              <ShowNumber />
            }
            <ShowTheme />
            <p className="text">について話す</p>
            <ShowMessage />
          </div>

          <div className="btn-nav u-mb20">
            <Link href="/">
              <a className="sub-btn u-mr20">トップへ戻る</a>
            </Link>
            <button type="button" className="btn" onClick={(e) => handleGame(e.preventDefault())}>次のテーマへ</button>
          </div>

          <div className="btn-nav">
            <button type="button" className="skip-btn" onClick={(e) => handleTheme(e.preventDefault(), "onlyTheme")}>テーマだけ変える</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Let's have fun together!!</p>
      </footer>

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
          line-height: 1;
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

        .skip-btn {
          position: relative;
          display: inline-block;
          font-size: 1.6rem;
          background: transparent;
          border: none;
          color: #0070f3;
          text-decoration: underline;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          cursor: pointer;

          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            top: .6em;
            right: -2%;
            width: .5em;
            height: .5em;
            border: 1px solid;
            border-color: #0070f3 #0070f3 transparent transparent;
            transform: rotate(45deg);
            pointer-events: none;
          }

          &:hover {
            text-decoration: none;
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