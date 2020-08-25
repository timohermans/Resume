import React from 'react';
import i18n from '../../i18n';
import InfoListItem from './InfoListItem';
import styles from './InfoList.module.scss';

const infoListFacets = [
    { text: 'resume.email', icon: '/icons/email.svg' },
    { text: 'resume.phoneNumber', icon: '/icons/phone.svg' },
    { text: 'resume.location', icon: '/icons/location.svg' },
    { text: 'resume.linkedin', icon: '/icons/linkedin.svg' },
    { text: 'resume.github', icon: '/icons/github.svg' },
];

const InfoList: React.FC = () => {
    return (
        <ul className={styles.infoList}>
            {infoListFacets.map((info, index) => (
                <InfoListItem key={index} {...info} />
            ))}
        </ul>
    );
};

export default InfoList;
