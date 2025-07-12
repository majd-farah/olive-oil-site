import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6 font-serif text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().getFullYear()}</p>
      <p className="mb-4">
        This Privacy Policy describes how Joud Olive Oil ("we", "us", or "our") collects, uses, and protects your information when you use our website.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We do not collect any personal information from users directly. The only data collected is through Vercel Analytics, which may include anonymized information such as page views, device type, browser, and general location. This data is used solely for website performance and analytics purposes.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        The analytics data collected is used to understand website traffic and improve our services. We do not sell, trade, or otherwise transfer your information to outside parties.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="mb-4">
        Our website may use cookies as part of Vercel Analytics to collect anonymous usage data. You can disable cookies in your browser settings if you prefer.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We use Vercel Analytics, a third-party service, to collect and analyze website usage data. For more information, please refer to <a href="https://vercel.com/docs/analytics/privacy-policy" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Vercel's Privacy Policy</a>.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us via our <a href="/contact" className="underline text-blue-600">contact page</a>.
      </p>
    </main>
  );
} 