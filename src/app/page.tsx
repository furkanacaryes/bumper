import { Hero, FeatureSection, Toolbar } from './components'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toolbar />
      <Hero />
      <FeatureSection />
    </div>
  );
}
