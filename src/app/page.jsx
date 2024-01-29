import Banner from '@/components/banner/banner';
import Content from '@/components/content/content';
import Faq from '@/components/faq/faq';
import Partners from '@/components/partners/partners';
import Payments from '@/components/payments/payments';
import Slots from '@/components/slots/slots';

export const metadata = {
    title: 'Уникальное зеркало Казино Х – твой путь к выигрышу!',
    description:
        'Играя в слоты на официальном сайте Казино Х, каждый пользователь имеет возможность получить бонусы и легко пополнять счет или выводить выигранные деньги.',
    openGraph: {
        title: 'Уникальное зеркало Казино Х – твой путь к выигрышу!',
        description:
            'Играя в слоты на официальном сайте Казино Х, каждый пользователь имеет возможность получить бонусы и легко пополнять счет или выводить выигранные деньги.',
    },
    robots: {
        index: false,
        follow: false,

        googleBot: {
            index: false,
            follow: false,
        },
    },
    other: {
        googlebot: 'noarchive',
        // 'google-site-verification': 'jav-288zHqV7K6UwFoxKJi_IxJCIXS6kvB1wsauK-wM',
    },
};

export default function Home() {
    return (
        <main className="app">
            <Banner />
            <Slots />
            <Content />
            <Faq />
            <Payments />
            <Partners />
        </main>
    );
}
