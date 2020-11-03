import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Share App!! | Theme Talk</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="description" content="Theme Talk（テーマトーク）をQRコードで友達や知り合いに共有しよう!" />
        <meta property="og:title" content="Share App!! | Theme Talk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theme-talk.vercel.app/ogp.png" />
        <meta property="og:url" content="https://theme-talk.vercel.app/" />
        <meta property="og:description" content="Theme Talk（テーマトーク）をQRコードで友達や知り合いに共有しよう!" />
        <meta property="og:site_name" content="Share App!! | Theme Talk" />
        <meta property="og:locale" content="ja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SiteAccount" />
      </Head>

      <main>
        <div className="inner-container">
          <h1 className="title">
            <span className="title-accent">Share</span> App!!
          </h1>

          <p className="description u-mb10">
            QRコードを使うとアプリの共有をその場で行うことができます。<br className="sp-br-none"/>
            カメラを開いて以下QRコードを読み取ってください。
          </p>

          <div className="img-qrcode">
            <img src="/qrcode.png" alt="アプリ共有QRコード" />
          </div>

          <Link href="/">
            <a className="btn u-mb20">トップページへ戻る</a>
          </Link>

          <p className="description u-mb10">
            <Link href="/rule">
              <a className="link">初めての方・ご利用方法はこちら</a>
            </Link>
          </p>

          <p className="description">
            <Link href="/list">
              <a className="link">出題されるお題を確認する</a>
            </Link>
          </p>

        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Let's have fun together!!</p>
      </footer>

      <style jsx>{`
        $main-color: #0070f3;
        
        .img-qrcode {
          width: 380px;
          text-align: center;
          margin: 3rem auto;
          border: 5px solid $main-color;

          @media (max-width: 768px) {
            width: 100%;
          }

          img {
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
          font-size: 1.6rem;
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
