import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader: React.FC = (props) => {
    return <h2 className={styles.sectionHeading}>{props.children}</h2>;
};

export default SectionHeader;
