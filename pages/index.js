import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Home() {
  let [member, changeMember] = useState(6);

  useEffect(() => {
    let strageData = localStorage.getItem("gameData");
    if (strageData) {
      changeMember(strageData);
    }
  }, []);

  function setMember() {
    if (member < 1) {
      alert("入力は1~30までとなります");
    } else {
      localStorage.setItem("gameData", member);
      const host = location.host;
      location.href = `https://${host}/game`;
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
            オンライン飲み会やパーティーで話すお題をアプリが指定してくれます。<br />まずゲームを始めるには参加人数を入力してください！
          </p>

          <p className="description u-mb20">
            <Link href="/rule">
              <a className="link">初めての方・利用方法はこちら</a>
            </Link>
          </p>

          <div className="form-container">
            <div className="form-group u-mb20">
              <input id="form-input" className="form-input u-mb20" type="number" min="1" max="30" value={member} onChange={(e) => validateInput(e.target.value)} />
              <label for="form-input" className="form-label">
                参加人数を1~30の値で入力してください。
              </label>
            </div>

            <a className="btn u-mb20" onClick={() => setMember()}>ゲームスタート</a>

            <button className="share-btn" onClick={() => share()}>このアプリをシェアする</button>
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
          display: block;
          padding: 2rem 1rem;
          box-sizing: border-box;
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
          display: none;
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
          cursor: pointer;

          @media (max-width: 1020px) {
            display: block;
          }

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

        .form-label {
          font-size: 1.4rem;
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
