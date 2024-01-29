import React from 'react';
import styles from './faq.module.scss';

const MOCK_FAQ = [
    {
        question: '🔒 Безопасность игры на Casino X',
        answer: 'Насколько безопасно играть на Casino X? Игра на Casino X абсолютно безопасна. Эта платформа является высоконадежной, применяя 256-битное SSL-шифрование и строго соблюдая Политику конфиденциальности. Кроме того, она соответствует законодательству Кюрасао, Кипра и Евросоюза.',
    },
    {
        question: '💰 Ограничения на вывод выигрышей',
        answer: 'Существуют ли ограничения на вывод средств из Casino X? Да, в Casino X существует месячное ограничение в размере 100 000 долларов, что является значительной суммой. При необходимости увеличения этого лимита, вы можете обратиться к администрации. Минимальная сумма для вывода составляет от 300 до 500 рублей.',
    },
    {
        question: '⏳ Скорость проведения финансовых операций',
        answer: 'Как быстро обрабатываются финансовые транзакции на Casino X? В большинстве случаев финансовые транзакции на Casino X выполняются мгновенно. Однако согласно правилам казино, при суммах вывода свыше 50 000 рублей администраторы могут провести дополнительную проверку, которая может занять до 2 суток.',
    },
];

const Item = ({ question, answer }) => {
    return (
        <div className={styles.itemWrapper} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h5 className={styles.titleWrapper} itemProp="name">
                {question}
            </h5>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{answer}</p>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <section>
            <div className={`container ${styles.faqWrapper}`} itemScope itemType="https://schema.org/FAQPage">
                <h4 className={styles.faqTitleWrapper}>FAQ</h4>
                <p className="mb-6">Часто задаваемые вопросы (FAQ)</p>
                {MOCK_FAQ.map((item) => (
                    <Item key={item.question} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    );
};

export default Faq;
