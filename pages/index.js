import Head from 'next/head';
import Link from 'next/link';
import store from 'store';
import React, { useState, useEffect } from 'react';

export default function Home() {
  let [category, changeCategory] = useState("general");
  let [member, changeMember] = useState(6);
  let [indexChecked, changeIndex] = useState(true);
  let [themeChecked, changeTheme] = useState(true);

  useEffect(() => {
    let memberList = store.get("memberList");
    let checkList = store.get("checkList");
    let categoryList = store.get("categoryList");
    if (memberList) {
      changeMember(memberList);
    }
    if (checkList) {
      changeIndex(checkList.duplicateIndex);
      // changeTheme(checkList.duplicateTheme);
    }
    if (categoryList) {
      changeCategory(categoryList);
    }
  }, []);

  function setSetting() {
    let checkList = {
      duplicateIndex: indexChecked,
      // duplicateTheme: themeChecked
    };
    if (member < 1) {
      alert("入力は1~30までとなります");
    } else {
      store.set("memberList", member);
      store.set("checkList", checkList);
      store.set("categoryList", category);
      const host = location.host;
      const protocal = location.protocol;
      location.href = `${protocal}//${host}/game`;
    }
  };

  function validateInput (val) {
    if (30 < val) {
      alert("入力は30までとなります");
      changeMember(30);
    } else {
      changeMember(val);
    }
  }

  function handleIndex () {
    if (indexChecked) {
      changeIndex(false);
    } else {
      changeIndex(true);
    }
  }

  function share() {
    if (navigator.share) {
      navigator.share({
        title: document.querySelector("title").textContent,
        text: document.querySelector("meta[name='description']").getAttribute('content'),
        url: location.href
      });
    }
    else {
      alert("申し訳ありません。このブラウザはシェア機能に対応していません。");
    }
  }

  const ThemeCategory = () => {
    let categoryName;
    if (category == "general") {
      categoryName = "一般的なテーマ";
    } else if (category == "school") {
      categoryName = "学校向けテーマ";
    } else if (category == "job-hunting") {
      categoryName = "就活対策テーマ";
    } else {
      categoryName = "一般的なテーマ";
    }
    return (
      <div>
      <p className="form-select-label">
        {categoryName}
      </p>  
      <style jsx>{`
          .form-select-label {
            width: 100%;
            font-size: 1.8rem;
            z-index: 0;
            padding: 1rem 1.5rem;
            border: 2px solid #ddd;
            border-radius: 3px;
            background: #fff;
            margin: 0;
          }
       `}</style>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Theme Talk テーマトーク</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="description" content="Theme Talk（テーマトーク）はオンライン飲み会やパーティーで話すお題を指定し、場を盛りあげます。"/>
        <meta property="og:title" content="Theme Talk テーマトーク" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theme-talk.vercel.app/ogp.png" />
        <meta property="og:url" content="https://theme-talk.vercel.app/" />
        <meta property="og:description" content="Theme Talk（テーマトーク）はオンライン飲み会やパーティーで話すお題を指定し、場を盛りあげます。" />
        <meta property="og:site_name" content="Theme Talk テーマトーク" />
        <meta property="og:locale" content="ja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SiteAccount" />
      </Head>

      <main>
        <div className="inner-container">
          <h1 className="title">
            <span className="title-accent">Theme</span> Talk
          </h1>

          <div className="kv">
            <img src="/main.svg" alt="Theme Talk" />
          </div>

          <p className="description u-mb10">
            オンライン飲み会や学校現場、就職活動など<br className="sp-br-none" />
            様々なシーンに合わせたお題をアプリが指定してくれます。<br className="sp-br-none" />
            テーマジャンルと参加人数を入力すると直ぐにゲームを始められます！
          </p>

          <p className="description u-mb10">
            <Link href="/rule">
              <a className="link">初めての方・ご利用方法はこちら</a>
            </Link>
          </p>

          <p className="description u-mb20">
            <Link href="/list">
              <a className="link">出題されるお題を確認する</a>
            </Link>
          </p>

          <div className="form-container">
            <div className="form-group arrow-bottom u-mb20">
              <label for="form-select" className="form-label u-mb5">
                テーマのジャンルを選択
              </label>
              <ThemeCategory />
              <select id="form-select" className="form-select" value={category} onChange={(e) => changeCategory(e.target.value)}>
                <option value="general">一般的なテーマ</option>
                <option value="school">学校向けテーマ</option>
                <option value="job-hunting">就活対策テーマ</option>
              </select>
            </div>

            <div className="form-group u-mb20">
              <label for="form-input" className="form-label u-mb5">
                参加人数を入力（1~30）
              </label>
              <input id="form-input" className="form-input" type="number" min="1" max="30" value={member} onChange={(e) => validateInput(e.target.value)} />
            </div>

            <div className="form-group u-mb20">
              <label className="form-label">
                <input className="checkbox-input" type="checkbox" value="preventIndex" checked={indexChecked} onChange={(e) => handleIndex()} /> 
                <span className="checkbox-parts">指名番号の重複を避ける</span>
              </label>
            </div>

            {/* <div className="form-group u-mb20">
              <label className="form-label">
                <input className="u-mb20" type="checkbox" value="preventIndex" checked={themeChecked} onChange={(e) => handleTheme()} /> テーマの重複を防ぐ
              </label>
            </div> */}

            <div className="form-group u-mb20">
              <button type="button" className="btn u-mb20" onClick={() => setSetting()}>ゲームスタート</button>
            </div>

            {/* <div className="form-group u-mb20">
              <button type="button" className="share-btn sp-only" onClick={() => share()}>このアプリをシェアする</button>
            </div> */}

            <div className="form-group">
              <Link href="/share">
                <a className="share-btn">QRコードでシェアする</a>
              </Link>
            </div>
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

        .sp-only {
          display: none !important;

          @media (max-width: 1020px) {
            display: block !important;
          }
        }

        .sp-text-left {
          @media (max-width: 768px) {
            text-align: left!important;
          }
        }

        .sp-br-none {
          @media (max-width: 768px) {
            display: none !important;
          }
        }

        main {
          width: 100%;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

          @media (max-width: 768px) {
            padding: 0 1rem;
            box-sizing: border-box;
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

        .kv {
          width: 400px;
          margin: 3rem auto;

          @media (max-width: 768px) {
            width: 100%;
          }

          img {
            max-width: 100%;
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

        .link {
          color: #0070f3;

          &:hover {
            text-decoration: none;
          }
        }

        .btn {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          display: block;
          padding: 2rem 1rem;
          box-sizing: border-box;
          width: 100%;
          max-width: 380px;
          margin-right: auto;
          margin-left: auto;
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
        }

        .share-btn {
          display: inline-block;
          padding: 1.5rem 1rem;
          box-sizing: border-box;
          max-width: 380px;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
          letter-spacing: 2px;
          font-size: 1.6rem;
          border: 1px solid #0070f3;
          border-radius: 1rem;
          color: #0070f3;
          background: #fff;
          text-decoration: none;
          cursor: pointer;

          @media (max-width: 768px) {
            font-size: 3.2vw;
          }
        }

        .title-accent {
          color: #0070f3;
        }

        .form-group {
          max-width: 380px;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.5rem;
          font-size: 2rem;
          text-align: center;
          border-radius: 3px;
          border: 2px solid #ddd;
          box-sizing: border-box;
          -webkit-appearance: none;
        }

        .form-select {
          display: block;
          width: 100%;
          padding: 1rem 1.5rem;
          position: absolute;
          bottom: 3%;
          padding: 1rem 1.5rem;
          border: 2px solid #ddd;
          border-radius: 3px;
          font-size: 1.8rem;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          opacity: 0;
          z-index: 2;
          cursor: pointer;
        }

        .form-label {
          display: inline-block;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .form-text {
          font-size: 2.4rem;
        }

        .arrow-bottom {
          position: relative;

          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 28%;
            right: 2%;
            width: 1.2rem;
            height: 1.2rem;
            border-top: 2px solid #ccc;
            border-right: 2px solid #ccc;
            transform: translateX(-50%) rotate(135deg);
            pointer-events: none;
          }
        }

        .checkbox-input{
          display: none;
        }

        .checkbox-parts{
          font-size: 1.6rem;
          padding-left: 2.6rem;
          position:relative;
          margin-right: 2.6rem;
        }

        .checkbox-parts::before{
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 1.8rem;
          height: 1.8rem;
          border: 1px solid #999;
          border-radius: 5px;
        }

        .checkbox-input:checked + .checkbox-parts{
          color: $main-color;
        }

        .checkbox-input:checked + .checkbox-parts::after{
          content: "";
          display: block;
          position: absolute;
          top: -.2rem;
          left: .6rem;
          width: .7rem;
          height: 1.4rem;
          transform: rotate(40deg);
          border-bottom: 3px solid $main-color;
          border-right: 3px solid $main-color;
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
