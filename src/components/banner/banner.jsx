import { Amatic_SC } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import styles from './banner.module.scss';

const amatic = Amatic_SC({ subsets: ['latin'], weight: '400' });

const Banner = () => {
    return (
        <section className={styles.bannerWrapper}>
            <Image
                width={2560}
                height={796}
                priority={true}
                src="/slider1.webp"
                className={styles.imageBannerWrapper}
                alt="Bonus up to $2000 + 200 freescpins"
            />

            <div className={`container ${styles.bannerContainerWrapper}`}>
                <div className={styles.bannerContentWrapper}>
                    <h2 className={`${amatic.className} ${styles.bannerTitleWrapper}`}>
                        Откройте для себя мир игр со <br /> стартовым пакетом бонусов!
                    </h2>
                    <a
                        href="https://safedefendernow.com/click?key=371338b8c8678fd53588"
                        className={styles.bannerButtonWrapper}
                    >
                        Регистрация
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
