import '@/styles/styles.scss';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import LeftSideBar from '@/components/shared/LeftSideBar';
import RightSideBar from '@/components/shared/RightSideBar';
import ThemeRegistry from '@/context/ThemeRegister';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Youtube sharing app',
    description: 'Welcome to Youtube video sharing Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={mulish.className}>
            <ThemeRegistry options={{ key: 'mui' }}>
                    <Header />
                    <main className="h-screen">
                        <div className="flex flex-row justify-between">
                            <LeftSideBar />
                            <div className="max-w-[600px]">{children}</div>
                            <RightSideBar />
                        </div>
                    </main>
                    <Footer />
                </ThemeRegistry>
            </body>
        </html>
    );
}
