import { Metadata } from 'next';
import SiteFooter from '../components/SiteFooter';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdnf__IdtVS9dXU-r6UbK4ljk2CBUD6YYw8XeSCyNY3roE2zw/viewform';

export const metadata: Metadata = {
  title: 'Your Corner of YouTube, All GIF\'d Up - YTgify',
  description: 'GIFs you won\'t find anywhere else. Made by the YouTube-obsessed.',
};

export default function SharePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] grid-pattern flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-8 relative">YTgify</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-[1.1] relative">
            Your corner of YouTube.<br/><span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">All GIF&apos;d up.</span>
          </h1>
          <p className="text-gray-400 text-xl mb-12 max-w-md mx-auto relative">
            GIFs you won&apos;t find anywhere else. Made by the YouTube-obsessed.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
            className="relative inline-block px-12 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full text-lg hover:from-red-400 hover:to-orange-400 transition-all shadow-lg shadow-orange-500/25">
            Join the Waitlist
          </a>
          <p className="text-gray-600 text-sm mt-6 relative">
            No spam. We&apos;ll only email you when sharing launches.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
