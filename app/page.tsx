import Logo from './components/Logo';
import HeroDescription from './components/HeroDescription';
import FeatureChecklist from './components/FeatureChecklist';
import DemoVideo from './components/DemoVideo';
import ChromeStoreBadge from './components/ChromeStoreBadge';
import FirefoxStoreBadge from './components/FirefoxStoreBadge';
import ExampleGifsGallery from './components/ExampleGifsGallery';
import WaitlistSection from './components/WaitlistSection';
import SiteFooter from './components/SiteFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] grid-pattern">
      <main>
        {/* Ultra Narrow Blog Style - Max 800px */}
        <article className="max-w-[800px] mx-auto px-12 sm:px-6 pt-12 pb-16">
          {/* Logo and Chrome Store Badge - Side by Side */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mt-2 mb-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <Logo />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">YTgify</h2>
            </div>
            <div className="flex-shrink-0">
              <ChromeStoreBadge />
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium">
              ⭐ 5-star rated
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
              Featured in Chrome Web Store
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
              2,000+ weekly users
            </span>
          </div>

          {/* Large headline */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight text-white tracking-tight">
            YouTube to GIF Converter - Free, No Watermark
          </h1>

          {/* Description and Example GIFs - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
            {/* Left: Description */}
            <div>
              <HeroDescription />
            </div>

            {/* Right: GIF Gallery */}
            <div className="flex items-center">
              <ExampleGifsGallery />
            </div>
          </div>

          {/* Benefit Callout */}
          <div className="text-center mb-16 py-6 px-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <p className="text-lg text-white font-semibold mb-1">Your first GIF in under 30 seconds.</p>
            <p className="text-gray-400">No account needed. No software to download. Works right inside YouTube.</p>
          </div>

          {/* Features and Video - Single Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">See it in action</h2>
            {/* Features above video */}
            <div className="mb-6">
              <FeatureChecklist />
            </div>
            {/* Video */}
            <DemoVideo />

            {/* CTA after video */}
            <div className="mt-12 text-center">
              <p className="text-xl text-white mb-6 font-semibold">Ready to create your first GIF?</p>
              <div className="flex flex-col sm:flex-row items-start justify-center gap-6">
                <ChromeStoreBadge />
                <FirefoxStoreBadge />
              </div>
              <p className="text-gray-400 text-sm mt-4">100% free. No watermark. No tracking. Ever.</p>
            </div>

            {/* Waitlist Section */}
            <WaitlistSection />
          </div>
        </article>

        <SiteFooter />
      </main>
    </div>
  );
}
