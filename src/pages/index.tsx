import { useTranslation } from 'react-i18next';
import styles from '../styles/Home.module.css';
import TimoImage from '../assets/images/timo-pres.jpg';
import EnglishImage from '../assets/images/english.png';
import DutchImage from '../assets/images/dutch.png';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={TimoImage} className={styles.headerImage} />
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>{t('home.welcome')}</h1>

                <div className={styles.grid}>
                    <a href="/resume/nl" className={styles.card}>
                        <img className={styles.languageLogo} src={DutchImage} alt="dutch" />
                        Nederlands
                    </a>

                    <a href="/resume/en" className={styles.card}>
                        <img className={styles.languageLogo} src={EnglishImage} alt="english" />
                        English
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
