import Image from 'next/image';
import React from 'react';
import styles from './slot.module.scss';

const Slot = ({ name, img, href }) => {
    return (
        <a href={href} className={styles.rootWrapper}>
            <div className={styles.containerWrapper}>
                <Image width={298} height={170} alt={`${name} game`} className={styles.imageWrapper} src={img} />
                <div className={styles.backWrapper}>
                    <h5 className={styles.titleWrapper}>{name}</h5>
                    <div className={styles.descWrapper}>Играть</div>
                </div>
            </div>
        </a>
    );
};

export default Slot;
