import { NextPage } from 'next';
import Head from 'next/head';
import i18n from '../i18n';
import styles from '../styles/Resume.module.css';
import InfoList from '../components/InfoList/InfoList';

const resume = {
    name: 'Timo Hermans',
    jobTitle: 'Software Engineer',
    email: 'tmhermans@gmail.com',
    phoneNumber: '+31611621075',
    location: 'Sittard, Nederland',
    linkedin: 'linkedin.com/in/timohermans',
    github: 'github.com/timohermans',
};

const Resume: NextPage = () => {
    const { t } = i18n.useTranslation();

    return (
        <article className={styles.page}>
            <Head>
                <title>{t('resume.title')} - Timo Hermans</title>
            </Head>

            <header className={styles.header}>
                <img src="/timo-pp.jpg" className={styles.headerImage} />
                <section className={styles.headerNameContainer}>
                    <h1 className={styles.headerName}>{t('resume.name')}</h1>
                    <p className={styles.headerJob}>{t('resume.jobTitle')}</p>
                </section>
                <section className={styles.headerInfo}>
                    <InfoList />
                </section>
            </header>

            <main></main>
        </article>
    );
};

Resume.getInitialProps = async () => {
    return {
        namespacesRequired: ['common', 'resume'],
    };
};

export default Resume;
