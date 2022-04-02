import { Settings } from './Settings';

export default function HomePage() {
	return (
		<div>
			<a href={Settings.signIn()}>Sign-in Google</a>
		</div>
	);
}
