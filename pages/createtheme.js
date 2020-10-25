import Head from 'next/head';
import Link from 'next/link';
import store from 'store';
import React, { useState, useEffect } from 'react';

export default function CreateTheme() {
  const [themes, setThemes] = useState([]);
  const [tmpThemes, setTmpThemes] = useState("");

  useEffect(() => {
    let customThemesList = store.get("customThemesList");
    if (customThemesList) {
      setThemes(customThemesList);
    }
  }, []);

  const addThemes = () => {
    const filteredTheme = themes.filter((theme) => {
      return theme == tmpThemes;
    });

    if (tmpThemes === "") {
      alert("テーマを入力してください👀");
      return false;
    } else if (filteredTheme.length > 0) {
      alert("入力したテーマは既に登録済みです😇");
      return false;
    } else if (tmpThemes.length > 30) {
      alert("文字数は30文字以内にしてください🙏");
      return false;
    }
    setThemes([...themes, tmpThemes]);
    setTmpThemes("");
  }

  const validateInput = (value) => {
    if (value.length > 30) {
      alert("文字数は30文字以内にしてください🙏");
      return false;
    }
    setTmpThemes(value);
  }

  const deleteThemes = (index) => {
    const newThemes = themes.filter((theme, themeIndex) => {
      return index !== themeIndex;
    });
    setThemes(newThemes);    
  }

  const submitThemes = () => {
    store.set("customThemesList", themes);
    store.set("categoryList", "custom-theme");
    const host = location.host;
    const protocal = location.protocol;
    location.href = `${protocal}//${host}/`;
  }  

  return (
    <div className="container">
      <Head>
        <title>Theme List | Theme Talk</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="description" content="Theme Talk（テーマトーク）で出題されるお題をカスタマイズできるページです。" />
        <meta property="og:title" content="Custom Theme | Theme Talk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theme-talk.vercel.app/ogp.png" />
        <meta property="og:url" content="https://theme-talk.vercel.app/list" />
        <meta property="og:description" content="Theme Talk（テーマトーク）で出題されるお題をカスタマイズできるページです。" />
        <meta property="og:site_name" content="Custom Theme | Theme Talk" />
        <meta property="og:locale" content="ja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SiteAccount" />
      </Head>

      <main>
        <div className="inner-container">
          <h1 className="title">
            <span className="title-accent">Custom</span> Theme
          </h1>

          <div className="kv">
            <img src="/main-create-theme.svg" width="300" height="236" alt="Theme Talk" />
          </div>

          <p className="description u-mb40">
            カスタムテーマではアプリで出題されるお題を自由に作成することができます。
            <br className="sp-br-none" />
            オリジナルなトークテーマを利用したい時にご利用ください。
          </p>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">カスタムテーマを作成する</h2>

              <p className="description u-mb20">
                思いついたトークテーマを入力してください！<br className="sp-br-none" />
                入力したテーマはランダムに出題されます。
              </p>

              <div className="input-theme u-mb30">
                <input className="form-input" type="text" name="theme" onChange={e => validateInput(e.target.value)} value={tmpThemes}/>
                <button className="add-btn" type="button" onClick={addThemes}>追加</button>
              </div>

              <div className="theme-wrapper u-mb40">
                <ol className="order-list">
                  {themes.map(
                    (theme, index) => { 
                      return <li key={index} className="order-list__item">
                      <span className="message-bold">{theme}</span>について話す
                      <button className="delete-btn" type="button" onClick={() => deleteThemes(index)}>削除</button>
                      </li>
                    })
                  }
                </ol>
              </div>

              <div className="theme-submit u-mb30">
                <button type="button" className="btn" onClick={() => submitThemes()}>登録する</button>
              </div>

              <Link href="/">
                <a className="sub-btn">トップページへ戻る</a>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Let's have fun together!!</p>
      </footer>

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

        .sec-content {
          width: 600px;
          margin-right: auto;
          margin-left: auto;
          text-align: center;

          @media (max-width: 768px) {
            width: 100%;
            padding: 0 1rem;
            box-sizing: border-box;
          }
        }

        .input-theme {
          display: flex;
        }

        .order-list {
          font-size: 1.4rem;
          line-height: 1.4;
          text-align: left;
          counter-reset: order-list;
          list-style: none;
          padding: 0;

          @media (max-width: 768px) {
            font-size: 1.5rem;
          }
        }

        .order-list__item {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 1.4em;
          padding-bottom: 1rem;
          line-height: 1;
          border-bottom: 1px solid $main-color;
          display: flex;
          align-items: center;

          &::before {
            font-size: 1.6rem;
            content: counter(order-list) ". ";
            position: absolute;
            top: .5em;
            left: 0;
            font-weight: bold;
            color: $main-color;
            counter-increment: order-list;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        .sub-headding {
          position: relative;
          display: inline-block;
          padding: 0 5.5rem;
          text-align: center;
          font-size: 2.4rem;
          margin: 0;

          &::before, &::after {
            content: '';
            position: absolute;
            top: 50%;
            display: inline-block;
            width: 4.5rem;
            height: 2px;
            background-color: $main-color;
          }

          &::before {
            left: 0;
          }

          &::after {
            right: 0;
          }

          @media (max-width: 768px) {
            font-size: 4.8vw;
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
          width: 300px;
          margin: 3rem auto;

          @media (max-width: 768px) {
            width: 60%;
          }

          img {
            max-width: 100%;
            margin: 0 auto;
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
          font-size: 1.6rem;
        }

        .img-des {
          border: 3px solid $main-color;
        }

        .link {
          color: #0070f3;

          &:hover {
            text-decoration: none;
          }
        }

        .btn {
          display: block;
          padding: 1rem;
          box-sizing: border-box;
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          text-align: center;
          letter-spacing: 2px;
          font-size: 1.8rem;
          border: 1px solid #0070f3;
          border-radius: 1rem;
          color: #fff;
          background: #0070f3;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            opacity: .7;
          }
        }

        .sub-btn {
          padding: 1rem;
          box-sizing: border-box;
          margin-left: auto;
          text-align: center;
          letter-spacing: 2px;
          font-size: 1.4rem;
          border: 1px solid #0070f3;
          border-radius: 1rem;
          color: #0070f3;
          background: #fff;
          text-decoration: none;
          cursor: pointer;
        }

        .add-btn {
          width: 20%;
          padding: .5rem;
          box-sizing: border-box;
          margin: 0 auto;
          text-align: center;
          letter-spacing: 2px;
          font-size: 1.6rem;
          margin-left: 2rem;
          border: 1px solid #0070f3;
          border-radius: 1rem;
          color: #fff;
          background: #0070f3;
          text-decoration: none;
          cursor: pointer;
        }

        .delete-btn {
          display: inline-block;
          margin-left: auto;
          padding: .5rem;
          box-sizing: border-box;
          margin-left: auto;
          text-align: center;
          letter-spacing: 2px;
          font-size: 1.4rem;
          border: 1px solid #0070f3;
          border-radius: 1rem;
          color: #0070f3;
          background: #fff;
          text-decoration: none;
          cursor: pointer;
          word-break: keep-all;
        }

        .message-bold {
          display: inline-block;
          font-weight: bold;
          color: #0070f3;

          @media (max-width: 768px) {
            max-width: 55%;
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
          text-align: left;
          border-radius: 3px;
          border: 2px solid #ddd;
          box-sizing: border-box;
          -webkit-appearance: none;
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
