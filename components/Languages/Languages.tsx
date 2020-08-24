import React from 'react';
import Section from '../Section/Section';
import i18n, { useTranslation } from '../../i18n';

const Languages: React.FC = () => {
    const {t} = useTranslation();


    return (
        <Section header={t('resume.languages.title')}>

        </Section>
    );
}

export default i18n.withTranslation()(Languages);