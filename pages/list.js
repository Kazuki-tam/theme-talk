import Head from 'next/head';
import Link from 'next/link';
import { generalThemes, schoolThemes, jobThemes } from '../data/themedata';
import React, { useState } from 'react';

export default function ThemeList() {
  let [accordionActive, setAccordionActive] = useState([false, false, false]);

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

  const ShowUrl = () => {
    const url = "https://theme-talk.vercel.app/";
    return(
      <p className="codeWrap">
        <pre>
          <code className="code">
            {url}
          </code>
        </pre>
        <style jsx>{`
        .codeWrap {
          background: #EAF1FE;
          color: #0070f3;
          display: inline-block;
          padding: 0 1rem;
        }
       `}</style>
      </p>
    );
  }

  function handleAccordion (index) {
    if (index == 0 && accordionActive[index] == false) {
      setAccordionActive([true, false, false]);
    } else if (index == 1 && accordionActive[index] == false) {
      setAccordionActive([false, true, false]);
    } else if (index == 2 && accordionActive[index] == false) {
      setAccordionActive([false, false, true]);
    } else {
      setAccordionActive([false, false, false]);
    }
  }

  const ShowThemes = () => {

    return(
      <dl className="p-accordion">
        <dt className="p-accordion__ttl"><button className={`p-accordion__btn ${accordionActive[0] ? "is-accordion-active" : ""}`} onClick={(e) => {e.preventDefault(); handleAccordion(0);}}>一般的なテーマ</button></dt>
        <dd className={`p-accordion__body ${accordionActive[0] ? "is-accordion-open" : ""}`}>
          <ol className="order-list">
            {generalThemes.map(val => <li className="order-list__item"><span className="message-bold">{val}</span> について話す</li>)}
          </ol>
        </dd>

        <dt className="p-accordion__ttl"><button className={`p-accordion__btn ${accordionActive[1] ? "is-accordion-active" : ""}`} onClick={(e) => { e.preventDefault(); handleAccordion(1); }}>学校向けテーマ</button></dt>
        <dd className={`p-accordion__body ${accordionActive[1] ? "is-accordion-open" : ""}`}>
          <ol className="order-list">
            {schoolThemes.map(val => <li className="order-list__item"><span className="message-bold">{val}</span> について話す</li>)}
          </ol>
        </dd>

        <dt className="p-accordion__ttl"><button className={`p-accordion__btn ${accordionActive[2] ? "is-accordion-active" : ""}`} onClick={(e) => { e.preventDefault(); handleAccordion(2); }}>就活対策テーマ</button></dt>
        <dd className={`p-accordion__body ${accordionActive[2] ? "is-accordion-open" : ""}`}>
          <ol className="order-list">
            {jobThemes.map(val => <li className="order-list__item"><span className="message-bold">{val}</span> について話す</li>)}
          </ol>
        </dd>

        <style jsx>{`
        .p-accordion {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }
        .p-accordion__btn {
          background-color: #fff;
          border: none;
          border-bottom: 1px solid #0070f3;
          color: #0070f3;
          cursor: pointer;
          display: block;
          font-size: 1.6rem;
          margin: 0;
          outline: 0;
          padding: 1rem 4rem 1rem 1.5rem;
          position: relative;
          text-align: left;
          width: 100%;
        }
        .p-accordion__btn::before {
          background-color: currentColor;
          content: "";
          display: block;
          height: 2px;
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
        }
        .p-accordion__btn::after {
          background-color: currentColor;
          content: "";
          display: block;
          height: 20px;
          position: absolute;
          right: 2.4rem;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
        }
        .p-accordion__btn:focus,
        .p-accordion__btn:hover {
          background-color: #0070f3;
          color: #fff;
        }
        .p-accordion__body {
          height: 0;
          line-height: 0;
          opacity: 0;
          overflow: hidden;
          padding: 0 1.5rem;
          transition: padding .25s,opacity .25s;
        }
        .p-accordion__body > :last-child {
          margin-bottom: 0;
        }
        .p-accordion__txt {
          margin-bottom: 2rem;
        }
        .is-accordion-active {
          border-bottom: none;
          background-color: #0070f3;
          color: #fff;
        }
        .is-accordion-active::after {
          content: none;
        }
        .is-accordion-open {
          height: auto;
          line-height: normal;
          opacity: 1;
          padding: 1.5rem;
          margin-left: 0;
        }
        .message-bold {
          font-weight: bold;
          color: #0070f3;
        }
        .order-list {
          font-size: 1.6rem;
          text-align: left;
          counter-reset: order-list;
          list-style: none;
          margin-bottom: 30px;
          padding-left: 0;
        }
        .order-list__item {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 2em;
          line-height: 1.4;

          &::before {
            content: counter(order-list) ". ";
            position: absolute;
            top: 0;
            left: 0;
            font-weight: bold;
            color: #0070f3;
            counter-increment: order-list;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
       `}</style>
      </dl>
    );
  };

  return (
    <div className="container">
      <Head>
        <title>Theme List | Theme Talk</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="description" content="Theme Talk（テーマトーク）で出題されるお題をまとめたページです。" />
        <meta property="og:title" content="Theme List | Theme Talk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theme-talk.vercel.app/ogp.png" />
        <meta property="og:url" content="https://theme-talk.vercel.app/list" />
        <meta property="og:description" content="Theme Talk（テーマトーク）で出題されるお題をまとめたページです。" />
        <meta property="og:site_name" content="Theme List | Theme Talk" />
        <meta property="og:locale" content="ja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SiteAccount" />
      </Head>

      <main>
        <div className="inner-container">
          <h1 className="title">
            <span className="title-accent">Theme</span> List
          </h1>

          <div className="kv">
            <img src="/main-list.svg" width="300" height="256" alt="Theme Talk" />
          </div>

          <p className="description u-mb10">
            このアプリで出題されるお題をまとめたページです。<br className="sp-br-none" />
            事前に以下URLをゲーム参加者へ共有いただくとお題について話しやすくなります。<br className="sp-br-none"/>
            会話のネタ探しにもご活用ください。
          </p>

          <div className="description u-mb20">
            <ShowUrl />
            <button type="button" className="share-btn sp-only" onClick={() => share()}>このページをシェアする</button>
          </div>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">お題リスト集</h2>

              <p className="description u-mb10">
                ゲームで使用されているお題を以下で確認することができます。
              </p>

              <div className="theme-list u-mb40">
                <ShowThemes />
              </div>

              <Link href="/">
                <a className="btn">トップページへ戻る</a>
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
          padding: 2rem 1rem;
          box-sizing: border-box;
          max-width: 380px;
          margin: 0 auto;
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
          -webkit-appearance: none;
        }

        .form-text {
          font-size: 2.4rem;
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
