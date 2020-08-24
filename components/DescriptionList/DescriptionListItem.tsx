import React from 'react';
import styles from './DescriptionList.module.scss';

const DescriptionListItem: React.FC = (props) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.listItemBullet}></div>
            <span className={styles.listItemContent}>{props.children}</span>
        </li>
    );
};

export default DescriptionListItem;
