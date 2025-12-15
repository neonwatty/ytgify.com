'use client';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdnf__IdtVS9dXU-r6UbK4ljk2CBUD6YYw8XeSCyNY3roE2zw/viewform';

export default function WaitlistSection() {
  return (
    <section className="mt-16 pt-12 border-t border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Share Your GIFs Instantly
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          We&apos;re building a home for your YouTube GIFs. Host, share, and discover.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
        <Feature icon="🔗" text="One-click shareable links" />
        <Feature icon="💬" text="Works in Discord, Slack, X" />
        <Feature icon="🌐" text="Browse community creations" />
        <Feature icon="🎨" text="Remix and build on others' GIFs" />
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-lg"
        >
          Join the Waitlist
        </a>
        <p className="text-gray-500 text-sm mt-4">
          No spam. We&apos;ll only email you when sharing launches.
        </p>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
