import Head from "next/head";
import styles from "../styles/Home.module.css";
import TemplateStyles from "../styles/Template.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={TemplateStyles.header}>
        <div className={TemplateStyles.companyName}>Company Name</div>
        <ul className={TemplateStyles.listGroup}>
          <li className={TemplateStyles.listItem}>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className={TemplateStyles.listItem}>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </header>

      <main className={styles.main}>
        {/* Plan is to have the text and call to action button to be on top of the image. The image is a background image */}
        <div>
          <Image
            src="/Cat03.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <h1>Introduction Here</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link href="/">
            <button>CALL TO ACTION</button>
          </Link>
        </div>

        {/* Some company content */}
        <div>
          Company content
        </div>

        {/* 3 Testimonials */}
        <div>
          Should have 3 testimonial cards next to each other
        </div>
      </main>

      <footer className={styles.footer}>
        Contact information
        Socials
      </footer>
    </>
  );
}
