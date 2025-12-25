import React from 'react';
import { Header, Hero, Features, Pricing, Footer } from './components/LayoutComponents';
import AiFeature from './components/AiFeature';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AiFeature />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;