import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SignInPage from './SignInPage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* หน้าแรก */}
				<Route path="/" element={<HomePage />} />

				{/* หน้ารับ code จาก Google */}
				<Route path="signin" element={<SignInPage />} />
			</Routes>
		</BrowserRouter>
	);
}
