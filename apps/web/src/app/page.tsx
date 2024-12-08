import { ExampleSection } from './_sections/ExampleSection';
import { ExplanationSection } from './_sections/ExplanationSection';
import { MotivationSection } from './_sections/MotivationSection';
import { PromoSection } from './_sections/PromoSection';

export default function Home() {
	return (
		<>
			<PromoSection />
			<MotivationSection />
			<ExplanationSection />
			<ExampleSection />
		</>
	);
}
