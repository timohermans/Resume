import React from 'react';
import styles from './SectionHeader.module.scss';

type Props = {
    children: React.ReactNode;
};

const SectionHeader: React.FC<Props> = (props) => {
    return <h2 className={styles.sectionHeading}>{props.children}</h2>;
};

export default SectionHeader;
