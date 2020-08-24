import React from 'react';
import styles from './DescriptionList.module.scss';
import DescriptionListItem from './DescriptionListItem';

type Props = {
    descriptions: string[];
};

const DescriptionList: React.FC<Props> = ({ descriptions }) => {
    return (
        <ul className={styles.infoList}>
            {descriptions?.map((description: string, index: number) => (
                <DescriptionListItem key={index}>
                    {description}
                </DescriptionListItem>
            ))}
        </ul>
    );
};

export default DescriptionList;
