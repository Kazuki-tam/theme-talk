import Head from 'next/head'
import Link from 'next/link'

export default function Rule() {
  return (
    <div className="container">
      <Head>
        <title>遊び方 | 王様ゲーム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          王様ゲームの遊び方
        </h1>
        <div className="content">
          <p>遊び方説明</p>

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