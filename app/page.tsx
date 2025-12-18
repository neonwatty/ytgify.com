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
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <a
                href="https://chromewebstore.google.com/detail/ytgify/dnljofakogbecppbkmnoffppkfdmpfje/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/15 border border-yellow-500/40 rounded-full text-yellow-300 font-semibold hover:bg-yellow-500/25 transition-colors"
              >
                <span className="text-lg">⭐⭐⭐⭐⭐</span>
                <span>5-star rated</span>
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-500/40 rounded-full text-blue-300 font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Featured
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/15 border border-green-500/40 rounded-full text-green-300 font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
                2,000+ weekly users
              </span>
            </div>
            {/* Featured Review */}
            <div className="text-center">
              <p className="text-gray-400 italic text-sm">
                &ldquo;No more searching for the perfect gif moment only to come up empty handed — now I can just make my own super easily. Love it.&rdquo;
              </p>
              <a
                href="https://chromewebstore.google.com/detail/ytgify/dnljofakogbecppbkmnoffppkfdmpfje/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-xs hover:text-gray-400 transition-colors"
              >
                — Chrome Web Store review
              </a>
            </div>
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
