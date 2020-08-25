import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import i18n from '../i18n';

const Home: NextPage = () => {
    const { t } = i18n.useTranslation();
    return (
        <div className={styles.container}>
            <Head>
                <title>Timo Hermans</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <img src="/images/timo-pres.jpg" className={styles.headerImage} />
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>{t('home.welcome')}</h1>

                <p className={styles.description}>
                    Select a language to view a resume. They are printer
                    friendly.
                </p>

                <div className={styles.grid}>
                    <a href="/nl/resume" className={styles.card}>
                        <h3>Nederlands</h3>
                        <p>CV in het Nederlands</p>
                    </a>

                    <a href="/en/resume" className={styles.card}>
                        <h3>English</h3>
                        <p>My resume in English</p>
                    </a>
                </div>
            </main>
        </div>
    );
};

Home.getInitialProps = async () => {
    return { namespacesRequired: ['common', 'home'] };
};

export default Home;
