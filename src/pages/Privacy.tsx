import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-forest mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                At Haimdall AI Solutions, we collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, industry, size)</li>
                <li>Usage data and analytics</li>
                <li>Communication records and call logs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to provide, maintain, and improve our AI-powered virtual reception services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Deliver and operate our AI answering services</li>
                <li>Process and respond to customer inquiries</li>
                <li>Improve our AI models and service quality</li>
                <li>Send important updates and notifications</li>
                <li>Provide customer support and technical assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>End-to-end encryption for all communications</li>
                <li>Regular security audits and assessments</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Employee access controls and training</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. Call logs and conversation data are typically retained for 90 days for quality assurance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access and review your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your information</li>
                <li>Data portability rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">Third-Party Services</h2>
              <p className="text-gray-700">
                We may use third-party services to help operate our business. These partners are contractually required to protect your information and use it only for the purposes we specify.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-forest-light/10 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@haimdall.ai<br />
                  <strong>Address:</strong> [Your Business Address]<br />
                  <strong>Phone:</strong> [Your Contact Number]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;