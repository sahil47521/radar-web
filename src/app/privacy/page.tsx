"use client";

import StaticLayout from "@/components/StaticLayout";

export default function PrivacyPage() {
  return (
    <StaticLayout title="Privacy Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">1. Data Collection</h2>
          <p>
            We collect minimal data necessary to provide our services, such as your email address for newsletter delivery and waitlist notifications.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">2. Cookies</h2>
          <p>
            We use essential cookies to maintain your session and preferences. We do not use tracking cookies for third-party advertising.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">3. Data Sharing</h2>
          <p>
            We do not sell your personal information to third parties. Data may be shared with service providers (like email delivery services) only as necessary to provide RADAR.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">4. Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <p className="text-sm italic">Last Updated: April 15, 2024</p>
      </div>
    </StaticLayout>
  );
}
