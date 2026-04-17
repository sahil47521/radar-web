"use client";

import StaticLayout from "@/components/StaticLayout";

export default function TermsPage() {
  return (
    <StaticLayout title="Terms of Service">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using RADAR ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">2. Use of Service</h2>
          <p>
            RADAR provides curated content for informational purposes. You are responsible for any actions taken based on the information provided by our service.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">3. User Accounts</h2>
          <p>
            You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">4. Intellectual Property</h2>
          <p>
            The content provided through RADAR is the property of TryRadar or its licensors. You may not distribute, modify, or reuse the content without explicit permission.
          </p>
        </section>

        <p className="text-sm italic">Last Updated: April 15, 2024</p>
      </div>
    </StaticLayout>
  );
}
