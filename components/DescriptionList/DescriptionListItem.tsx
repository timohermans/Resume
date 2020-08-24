import React from 'react';
import styles from './DescriptionList.module.scss';

const DescriptionListItem: React.FC = (props) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.listItemBullet}></div>
            <p className={styles.listItemContent}>{props.children}</p>
        </li>
    );
};

export default DescriptionListItem;
