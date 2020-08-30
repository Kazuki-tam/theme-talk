import Head from 'next/head';
import Link from 'next/link';
import { themes } from '../data/themedata';

export default function ThemeList() {
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

  const ShowThemes = () => {
    return(
      <ol className="order-list">
        {themes.map(val => <li className="order-list__item"><span className="message-bold">{val}</span> について話す</li>)}

        <style jsx>{`
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
      </ol>
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
            <img src="/main-list.svg" alt="Theme Talk" />
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
              <ShowThemes />

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

        .order-list {
          font-size: 1.6rem;
          text-align: left;
          counter-reset: order-list;
          list-style: none;
        }

        .order-list__item {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 1.4em;
          line-height: 1.4;

          &::before {
            content: counter(order-list) ". ";
            position: absolute;
            top: 0;
            left: 0;
            font-weight: bold;
            color: $main-color;
            counter-increment: order-list;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        .bullet-list {
          font-size: 1.6rem;
          text-align: left;
          list-style: none;
        }
        
        .bullet-list__item {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 1em;
        
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0.5em;
            left: 0;
            width: 0.4em;
            height: 0.4em;
            border-radius: 50%;
            background-color: $main-color;
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
