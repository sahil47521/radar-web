"use client";

import StaticLayout from "@/components/StaticLayout";

export default function PrivacyPage() {
  return (
    <StaticLayout title="Privacy Policy">
      <div className="space-y-8">
        <p className="text-sm italic">Last Updated: April 23, 2026</p>
        
        <p>
          Applied Data, Inc. ("Radar," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Service.
        </p>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-bold">Profile Information:</span> When you create an account, we may collect your name, email address, and avatar.</li>
            <li><span className="font-bold">Usage Data:</span> We collect information about your interactions with the Service, including articles read, bookmarks saved, and your "Scan Mode" activity.</li>
            <li><span className="font-bold">Device Information:</span> We may collect information about the device you use to access the Service, including model, operating system, and unique device identifiers.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide and personalize your content feed.</li>
            <li>To sync your bookmarks across devices.</li>
            <li>To improve our Service through usage analysis.</li>
            <li>To communicate with you about updates or support requests.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-black text-navy mb-4">3. Sharing of Information</h2>
          <p>
            We do not sell your personal information to third parties. We may share information only in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-bold">Service Providers:</span> With vendors who help us host the Service or analyze data.</li>
            <li><span className="font-bold">Legal Requirements:</span> If required by law, such as to comply with a subpoena or similar legal process.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">5. Your Choices</h2>
          <p>
            You can update your profile information and manage your bookmarks at any time within the app. You may also request the deletion of your account through the Settings menu.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">6. Third-Party Links</h2>
          <p>
            Our Service contains links to third-party websites and content (e.g., YouTube). We are not responsible for the privacy practices or content of these external sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@tryradar.app" className="text-blue-600 hover:underline">support@tryradar.app</a>.
          </p>
        </section>
      </div>
    </StaticLayout>
  );
}
