import React, { PropsWithChildren } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Section.module.scss';

type Props = {
    header: string;
};

const Section: React.FC<PropsWithChildren<Props>> = ({ header, children }) => {
    return (
        <section className={styles.section}>
            <SectionHeader>{header}</SectionHeader>
            {children}
        </section>
    );
};

export default Section;
