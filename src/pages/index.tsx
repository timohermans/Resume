import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css';
import TimoImage from '../assets/images/timo-pres.jpg';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <img
                    src={TimoImage}
                    className={styles.headerImage}
                />
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>{t('home.welcome')}</h1>

                <p className={styles.description}>{t('home.explanation')}</p>

                <div className={styles.grid}>
                    <a href="/resume/nl" className={styles.card}>
                        <h3>Nederlands</h3>
                        <p>CV in het Nederlands</p>
                    </a>

                    <a href="/resume/en" className={styles.card}>
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
