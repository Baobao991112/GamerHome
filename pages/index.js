import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { clsx } from "clsx";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p
          className={clsx({
            [utilStyles.shelfSheep1]: true,
            // [styles.error]: type === "error",
            [utilStyles.shelfSheep2]: false,
          })}
        >
          这是一个不太聪明,但是愿意相信自己的男人
        </p>
        <p className={utilStyles.shelfSheep2}>
          他坚信,也许有一天,理想主义的花朵会在全世界盛开
        </p>
      </section>
    </Layout>
  );
}
