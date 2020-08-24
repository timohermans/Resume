import { NextPage } from 'next';
import Head from 'next/head';
import i18n from '../i18n';
import styles from '../styles/Resume.module.scss';
import InfoList from '../components/InfoList/InfoList';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Skills from '../components/Skills/Skills';
import Jobs from '../components/Jobs/Jobs';
import HobbyProjects from '../components/HobbyProjects/HobbyProjects';
import Languages from '../components/Languages/Languages';

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

            <Header />
            <Intro />
            <Skills />
            <Jobs />
            <HobbyProjects />
            <Languages />
        </article>
    );
};

Resume.getInitialProps = async () => {
    return {
        namespacesRequired: ['common', 'resume'],
    };
};

export default Resume;
