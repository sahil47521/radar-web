"use client";

import StaticLayout from "@/components/StaticLayout";

export default function TermsPage() {
  return (
    <StaticLayout title="Terms of Use">
      <div className="space-y-8">
        <p className="text-sm italic">Last Updated: April 23, 2026</p>
        
        <p>
          Welcome to Radar. These Terms of Use ("Terms") govern your access to and use of the Radar mobile application and website (the "Service"), operated by Applied Data, Inc. By using the Service, you agree to be bound by these Terms.
        </p>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">1. Description of Service</h2>
          <p>
            Radar is a content aggregation platform that provides curated news, videos, and articles ("Content"). We provide tools to discover, read, and save content through our "Read Mode" and "Scan Mode" interfaces.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">2. User Accounts</h2>
          <p>
            To access certain features, such as bookmarking and personalizing your feed, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">3. Intellectual Property</h2>
          <div className="space-y-4">
            <p>
              <span className="font-bold">Our Content:</span> The Radar name, logo, and the design and functionality of the Service are the exclusive property of Applied Data, Inc.
            </p>
            <p>
              <span className="font-bold">Third-Party Content:</span> Radar aggregates content from various sources (e.g., YouTube). All rights to such third-party content belong to their respective owners. Radar does not claim ownership over aggregated content.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">4. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Use the Service for any illegal purpose.</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts.</li>
            <li>Use automated scripts to scrape or "crawl" the Service without our express permission.</li>
            <li>Modify, adapt, or hack the Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">5. Limitation of Liability</h2>
          <p>
            Radar provides the Service "as is." We do not guarantee the accuracy, completeness, or timeliness of the Content aggregated from third-party sources. We are not liable for any damages resulting from your use of the Service or reliance on any Content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account or access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:support@tryradar.app" className="text-blue-600 hover:underline">support@tryradar.app</a>.
          </p>
        </section>
      </div>
    </StaticLayout>
  );
}
