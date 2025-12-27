'use client';

import EmailCaptureForm from './EmailCaptureForm';

export default function WaitlistSection() {
  return (
    <section className="mt-16 pt-12 border-t border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Coming Soon: Share Your GIFs Instantly
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          We&apos;re building a home for your YouTube GIFs. Host, share, and discover - all free.
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
      <div className="max-w-md mx-auto">
        <EmailCaptureForm
          source="waitlist"
          buttonText="Join the Waitlist"
          successMessage="You're on the list!"
          placeholder="you@example.com"
        />
        <p className="text-gray-500 text-sm mt-4 text-center">
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
