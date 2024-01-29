import React from 'react';
import Slot from './slot/slot';
import styles from './slots.module.scss';

const MOCK_SLOTS = [
    {
        name: 'Midas',
        img: '/slots/slot1.webp',
        href: '',
    },
    {
        name: 'Rocket Man',
        img: '/slots/slot2.webp',
        href: '',
    },
    {
        name: 'Dragon Tiger',
        img: '/slots/slot3.webp',
        href: '',
    },
    {
        name: 'Sakura',
        img: '/slots/slot4.webp',
        href: '',
    },
    {
        name: 'Tthe Wild Chase',
        img: '/slots/slot5.webp',
        href: '',
    },
    {
        name: 'BloodMoon WILDS',
        img: '/slots/slot6.webp',
        href: '',
    },
    {
        name: 'Razor Shark',
        img: '/slots/slot7.webp',
        href: '',
    },
    {
        name: 'Football Studio',
        img: '/slots/slot8.webp',
        href: '',
    },
    {
        name: 'Pink Elephant',
        img: '/slots/slot9.webp',
        href: '',
    },
    {
        name: 'Deal or Alive 2',
        img: '/slots/slot10.webp',
        href: '',
    },
    {
        name: 'SpaceWars',
        img: '/slots/slot11.webp',
        href: '',
    },
    {
        name: 'Koi Princess',
        img: '/slots/slot12.webp',
        href: '',
    },
];

const Slots = () => {
    return (
        <div className={styles.rootWrapper}>
            <div className={`container ${styles.containerWrapper}`}>
                <div className={styles.slotsWrapper}>
                    {MOCK_SLOTS.map((item) => (
                        <Slot name={item.name} img={item.img} href={item.href} key={item.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slots;
