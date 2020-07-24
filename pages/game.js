import Head from 'next/head'
import Link from 'next/link'

export default function Rule() {
  const ShowNumber = () => {
    let strageData = localStorage.getItem("gameData");
    let randomNum = Math.floor(Math.random() * strageData) + 1;
    return (<p className="text">{randomNum}番の人が</p>);
  }

  const themes = [
    "最近ハマっていること",
    "最近落ち込んだこと",
    "こんな恋愛してみたい"
  ];

  const ShowTheme = () => {
    const themesNum = themes.length;
    const index = Math.floor(Math.random() * themesNum);
    const selectedTheme = themes[index];
    return (<p className="text">{selectedTheme}</p>);
  }

  return (
    <div className="container">
      <Head>
        <title>ゲーム | 王様ゲーム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          ゲームスタート
        </h1>
        <div className="content">
          <ShowNumber />
          <ShowTheme />
          <p className="text">について話す</p>

          <Link href="#">
            <a className="card">
              次のゲームへ
            </a>
          </Link>
          <Link href="/">
            <a className="card">
              トップへ戻る
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}