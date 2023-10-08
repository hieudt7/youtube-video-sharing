import '@/styles/styles.scss';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import LeftSideBar from '@/components/shared/LeftSideBar';
import RightSideBar from '@/components/shared/RightSideBar';
import ThemeRegistry from '@/contexts/ThemeRegister';
import { CommonDataContextProvider } from '@/contexts';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Youtube sharing app',
    description: 'Welcome to Youtube video sharing Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    console.log('run layout');
    return (
        <html lang="en">
            <body className={mulish.className}>
                <CommonDataContextProvider>
                    <ThemeRegistry options={{ key: 'mui' }}>
                        <Header />
                        <main className="min-h-screen px-6">
                            <div className="flex flex-row justify-between bg-[#f0f2f5]">
                                <LeftSideBar />
                                <div className="max-w-[600px]">{children}</div>
                                <RightSideBar />
                            </div>
                        </main>
                        <Footer />
                    </ThemeRegistry>
                </CommonDataContextProvider>
            </body>
        </html>
    );
}