import React from 'react';
import styles from './header.module.scss';
import clsx from 'clsx';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <a href="/" className={styles.titleHeader}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-1 md:ml-3 md:text-xl text-md text-white">CASINO</span>
                </a>
                <nav className={styles.nav}>
                    <a href="https://safedefendernow.com/click?key=371338b8c8678fd53588" className={styles.link}>
                        Слоты
                    </a>
                    <a href="https://safedefendernow.com/click?key=371338b8c8678fd53588" className={styles.link}>
                        Live игры
                    </a>
                    <a href="https://safedefendernow.com/click?key=371338b8c8678fd53588" className={styles.link}>
                        Играть на деньги
                    </a>
                    <a href="https://safedefendernow.com/click?key=371338b8c8678fd53588" className={styles.link}>
                        Бонусы
                    </a>
                </nav>
                <a href="https://safedefendernow.com/click?key=371338b8c8678fd53588" className={styles.buttonSignUp}>
                    Войти
                </a>
                <a href="https://safedefendernow.com/click?key=371338b8c8678fd53588" className={styles.buttonSignIn}>
                    Регистрация
                </a>
            </div>
        </header>
    );
};

export default Header;
