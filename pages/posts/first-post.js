import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import indexCss from "./index.module.scss";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js"
        strategy="lazyOnload" //加载时机   在浏览器空闲时间延迟加载这个特定的脚本
        onLoad={() => console.log(`成功加载脚本`)}
      />
      <h1 className={indexCss.test}>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
