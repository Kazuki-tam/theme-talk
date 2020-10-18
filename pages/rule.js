import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
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
        <title>How to use | Theme Talk</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="description" content="Theme Talk（テーマトーク）の利用方法、注意事項が記載されているページです。" />
        <meta property="og:title" content="How to use | Theme Talk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theme-talk.vercel.app/ogp.png" />
        <meta property="og:url" content="https://theme-talk.vercel.app/" />
        <meta property="og:description" content="Theme Talk（テーマトーク）の利用方法、注意事項が記載されているページです。" />
        <meta property="og:site_name" content="How to use | Theme Talk" />
        <meta property="og:locale" content="ja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SiteAccount" />
      </Head>

      <main>
        <div className="inner-container">
          <h1 className="title">
            <span className="title-accent">H</span>ow to <span className="title-accent">U</span>se
          </h1>

          <div className="kv">
            <img src="/main-rule.svg" alt="Theme Talk" />
          </div>

          <p className="description u-mb10">
            アプリを開いていただきありがとうございます。<br className="sp-br-none"/>
            利用方法は様々ですが、一例としてサンプルの遊び方を以下に記載しています。<br className="sp-br-none"/>
            このアプリを使って楽しい時間をさらに盛り上げてください🎉
          </p>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">遊び方（サンプル）</h2>
              <ol className="order-list u-mb20">
                <li className="order-list__item">まずは乾杯しましょう🍻</li>
                <li className="order-list__item">テーマのジャンルを選択します。</li>
                <li className="order-list__item">進行役はゲーム参加者へ1から順に番号を割り振ります。<br />(Zoomなどで利用する場合は名前の前に番号を記載すると分かり易いです)</li>
                <li className="order-list__item">参加人数をフォームに入力します。</li>
                <li className="order-list__item">「指名番号の重複を避ける」にチェックをつけると全員に必ず割り振るよう設定されます。（任意）</li>
                <li className="order-list__item">準備ができたら「ゲームスタート」のボタンを押します。</li>
                <li className="order-list__item">進行役がアプリの操作を行います。オンラインで行う場合は進行役が画面共有をして操作を行ってください。</li>
                <li className="order-list__item">話し手とお題をアプリが選定して指示を出します。</li>
                <li className="order-list__item">指示を受けた人はお題に沿った内容を話します。</li>
                <li className="order-list__item">5分ほど話をして落ち着いたら、次のテーマへ移行します。</li>
              </ol>

              <p className="description u-mb10">
                ＊事前にお題を確認しておくとよりスムーズに会話を進めることができます。<br />
                事前にオリジナルなテーマを作成することもできます。
              </p>

              <p className="description u-mb10">
                <Link href="/list">
                  <a className="link">出題されるお題を確認する</a>
                </Link>
              </p>

              <p className="description u-mb30">
                <Link href="/createtheme">
                  <a className="link">テーマを作成する</a>
                </Link>
              </p>

              <Link href="/">
                <a className="btn">トップページへ戻る</a>
              </Link>
            </div>
          </section>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">アプリのインストール方法</h2>
              <p className="description u-mb10">当アプリはブラウザ上からお使いのデバイスにインストールすることができます。<br className="sp-br-none"/>インストールすることで素早くアプリを立ち上げることができます。</p>
              <p className="description u-mb10">PC, Androidユーザーは以下のガイドを参照してみてください。</p>

              <ol className="order-list u-mb30">
                <li className="order-list__item">PCでブラウザ(Chrome)を開き、アプリにアクセスします。</li>
                <li className="order-list__item">アドレスバーの右にある「インストール追加」をクリックします。</li>
                <li className="order-list__item">ガイドに従ってアプリをインストールします。</li>
              </ol>

              <ol className="order-list u-mb30">
                <li className="order-list__item">Android端末でブラウザ(Chrome)を開き、アプリにアクセスします。</li>
                <li className="order-list__item">「ホーム画面に追加」をタップします。</li>
                <li className="order-list__item">ガイドに従ってアプリをインストールします。</li>
              </ol>

              <p className="description u-mb40">
                <a href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=ja&oco=1" className="link" target="_blank" rel="noopener">Google Chromeでのインストール手順</a>        
              </p>

              <p className="description u-mb10">iPhone、iPadユーザーはSafariを立ち上げて以下手順にしたがってください。</p>

              <ol className="order-list u-mb30">
                <li className="order-list__item">iPhone、iPadでブラウザ(Safari)を開き、アプリにアクセスします。</li>
                <li className="order-list__item">共有メニューを開き、「ホーム画面に追加」 をタップします。</li>
                <li className="order-list__item">ガイドに従ってアプリをインストールします。</li>
              </ol>

              <p className="description img-des u-mb10">
                <img src="/ios-howto.gif" alt="ホームスクリーン画面" />
              </p>

              <p className="description u-mb20">赤枠の「ホーム画面に追加」からインストールします。</p>

              <p className="description img-des u-mb10">
                <img src="/ios-howto02.gif" alt="共有メニュー画面" />
              </p>
            </div>
          </section>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">アプリの共有方法</h2>
              {/* <p className="description u-mb20">
                このアプリはURLベースで共有することができます。<br className="sp-br-none"/>
                スマホ端末及び、一部特定のブラウザをお使いの方は「このアプリをシェアする」から共有機能をご利用いただけます。
              </p> */}
              {/* <div className="form-group u-mb20">
                <button type="button" className="share-btn" onClick={() => share()}>このアプリをシェアする</button>
              </div> */}
              <p className="description u-mb20">
                その場でアプリを共有したい場合はQRコードをご利用いただけます。
              </p>
              <div className="form-group">
                <Link href="/share">
                  <a className="share-btn">QRコードでシェアする</a>
                </Link>
              </div>
            </div>
          </section>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">利用上の注意事項</h2>
              <p className="description u-mb10">以下の項目を遵守してご利用ください。</p>
              <ul className="bullet-list u-mb10">
                <li className="bullet-list__item">参加者の気分を害する発言を禁止します。</li>
                <li className="bullet-list__item">ゲーム内では先輩、後輩、上司、部下といったポジションの優劣関係なく発言することを許容してください。</li>
                <li className="bullet-list__item">ゲーム内で話した内容は原則ゲーム内に留めるようにしてください。</li>
              </ul>
              <p className="description">当サービスの利用によって生じた損害や被害について<br className="sp-br-none"/>管理人は一切責任を負いません。</p>
            </div>
          </section>

          <Link href="/">
            <a className="btn">トップページへ戻る</a>
          </Link>

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
