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
              Privacy Policy for Small Biz AI
            </h1>
            <p className="text-gray-600 text-lg">
              Effective Date: 8/29/2025 | Last Updated: 8/29/2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-forest mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Account Information:</strong> Name, email address, phone number, business name, business address, business specialty</li>
                <li><strong>Authentication Data:</strong> Login credentials, verification codes (managed through AWS Cognito)</li>
                <li><strong>Billing Information:</strong> Payment details, billing addresses, transaction history</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">Business Data</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Customer Information:</strong> Contact details, job history, communication records</li>
                <li><strong>Job Management Data:</strong> Project details, schedules, location data</li>
                <li><strong>Financial Data:</strong> Invoices, billing history</li>
                <li><strong>Communication Data:</strong> Messages between contractors and customers, system notifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">Technical Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, app version</li>
                <li><strong>Usage Data:</strong> App features used, session duration, error logs</li>
                <li><strong>Location Data:</strong> GPS coordinates for job sites (when permission granted)</li>
                <li><strong>Photos and Media:</strong> Blank Invoice templates (when permission granted)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information to:</p>
              
              <h3 className="text-xl font-semibold text-forest mb-3">Service Delivery</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide billing, messaging, and job management services</li>
                <li>Create generated invoices</li>
                <li>Facilitate communication between contractors and customers</li>
                <li>Track job progress and manage schedules</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">Business Operations</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Authenticate users and maintain account security</li>
                <li>Provide customer support and technical assistance</li>
                <li>Analyze usage patterns to improve our services</li>
                <li>Send important service notifications and updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">AI-Powered Features</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Generate automated responses and suggestions</li>
                <li>Generate automated invoices</li>
                <li>Optimize job scheduling and routing</li>
                <li>Provide business insights and analytics</li>
                <li>Enhance user experience through machine learning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4 font-semibold">We DO NOT sell users' personal information.</p>
              
              <h3 className="text-xl font-semibold text-forest mb-3">Limited Sharing Occurs Only For:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> Cloud SaaS providers (hosting, database, authentication), payment processors</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale (with notice)</li>
                <li><strong>Consent:</strong> When you explicitly authorize sharing</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">Customer-Contractor Communication</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Messages and job details are shared between matched contractors and customers</li>
                <li>Communication history is maintained for service quality and dispute resolution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">4. Data Storage and Security</h2>
              
              <h3 className="text-xl font-semibold text-forest mb-3">Security Measures</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Encryption:</strong> All data encrypted at rest (DynamoDB) and in transit (TLS/HTTPS)</li>
                <li><strong>Authentication:</strong> Multi-factor authentication</li>
                <li><strong>Access Controls:</strong> Role-based permissions and API key protection</li>
                <li><strong>Monitoring:</strong> Comprehensive audit logging</li>
                <li><strong>Infrastructure:</strong> Secure SaaS cloud hosting with enterprise-grade security</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">Data Retention</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Account Data:</strong> Retained while account is active plus 7 years for business records</li>
                <li><strong>Communication Data:</strong> Retained for 3 years for dispute resolution</li>
                <li><strong>Financial Data:</strong> Retained for 7 years for tax and accounting purposes</li>
                <li><strong>Usage Data:</strong> Anonymized and retained for service improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">5. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-forest mb-3">Account Control</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Update:</strong> Modify your account and business information anytime</li>
                <li><strong>Delete:</strong> Request account deletion (subject to legal retention requirements)</li>
                <li><strong>Export:</strong> Download your data in portable format</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">Privacy Controls</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Location Services:</strong> Enable/disable location tracking in app settings</li>
                <li><strong>Notifications:</strong> Control communication preferences</li>
                <li><strong>Data Sharing:</strong> Manage what information is visible to customers</li>
              </ul>

              <h3 className="text-xl font-semibold text-forest mb-3">How to Exercise Rights</h3>
              <p className="text-gray-700">Contact us at contact@haimdallai.com or through the app's support feature.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">6. Children's Privacy</h2>
              <p className="text-gray-700">
                Small Biz AI is designed for business use by individuals 18 years or older. We do not knowingly collect information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">7. California Privacy Rights (CCPA)</h2>
              <p className="text-gray-700 mb-4">California residents have additional rights:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale (we don't sell information)</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">8. International Users</h2>
              <p className="text-gray-700">
                If you're outside the United States, your information will be transferred to and processed in the US, where our AWS servers are located. We implement appropriate safeguards for international data transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy as our services evolve. We'll notify you of material changes via:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Email notification to your account email</li>
                <li>In-app notification</li>
                <li>Updated "Last Modified" date on this policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">10. Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-forest mb-2">Privacy Questions:</h3>
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@haimdallai.com<br />
                    <strong>Mail:</strong> Haimdall AI Solutions<br />
                    PO Box 146<br />
                    Saybrook, IL, 61770
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-forest mb-2">Data Protection Officer:</h3>
                  <p className="text-gray-700">Andrea Skinner</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-forest mb-2">Technical Support:</h3>
                  <p className="text-gray-700">
                    Available through the app's support feature or contact at contact@haimdallai.com
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mb-4">App Store Specific Disclosures</h2>
              
              <h3 className="text-xl font-semibold text-forest mb-3">Data Collection Summary</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-forest-light/10">
                      <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Collected</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Linked to User</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Used for Tracking</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr><td className="border border-gray-300 px-4 py-2">Contact Information</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Financial Information</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Location</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Photos & Videos</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">User Content</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Usage Data</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Device Identifiers</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-forest mb-3">Third-Party SDKs</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Cloud Services:</strong> Infrastructure provided by multiple SaaS providers</li>
                <li><strong>Payment Processors:</strong> Secure payment handling</li>
                <li><strong>Analytics:</strong> App performance and crash reporting (anonymized)</li>
              </ul>

              <p className="text-gray-700 font-medium">
                This privacy policy complies with applicable privacy laws including CCPA, GDPR principles, and mobile app store requirements.
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