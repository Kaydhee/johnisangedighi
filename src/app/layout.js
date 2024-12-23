import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '../lib/storeProvider';
// import Nav from '../components/nav/Nav';
// import Footer from '../components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'JohnIsangedighi.ng',
	description: 'excellence in service',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{/* <Nav /> */}
				<StoreProvider>{children}</StoreProvider>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
