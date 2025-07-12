import React from 'react';

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6 font-serif text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().getFullYear()}</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using the Joud Olive Oil website ("Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Site.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Use of the Site</h2>
      <p className="mb-4">
        You may use this Site for lawful purposes only. You agree not to use the Site in any way that may damage, disable, overburden, or impair the Site or interfere with any other party's use of the Site.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4">
        All content on this Site, including text, images, logos, and graphics, is the property of Joud Olive Oil or its content suppliers and is protected by applicable copyright and trademark laws. You may not use, reproduce, or distribute any content from this Site without our prior written permission.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Disclaimer</h2>
      <p className="mb-4">
        The materials on this Site are provided "as is". Joud Olive Oil makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall Joud Olive Oil or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this Site.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Privacy</h2>
      <p className="mb-4">
        We do not collect personal information except as described in our <a href="/legal/privacy-policy" className="underline text-blue-600">Privacy Policy</a>. The only data collected is through Vercel Analytics for website performance and analytics purposes.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        Joud Olive Oil reserves the right to revise these Terms of Service at any time without notice. By using this Site, you are agreeing to be bound by the then-current version of these Terms of Service.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us via our <a href="/contact" className="underline text-blue-600">contact page</a>.
      </p>
    </main>
  );
} 