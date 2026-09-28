import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const lastUpdated = "July 29, 2026";

  return (
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[180px]"
          style={{
            background: "radial-gradient(circle, rgba(255,30,30,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-white/10 pb-8 mb-12"
        >
          <span className="text-[#FF1E1E] text-xs font-bold uppercase tracking-widest block mb-3">
            Legal Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-sm">
            Last Updated: {lastUpdated} | Version 2.0 (Corporate & API Compliance Standard)
          </p>
        </motion.div>

        {/* Content body */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-invert max-w-none space-y-8 text-zinc-300"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-white font-bold text-lg mb-3">Executive Summary</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              At Intuiti Corporates, we design and build bespoke enterprise web applications and custom software solutions. 
              This Policy details how we collect, process, secure, and share data when you engage our custom software development services, 
              visit our platforms, integrate with our APIs, or apply for API keys for our partner tools (such as FlowOS). 
              Our processing activities comply with major international standards including the General Data Protection Regulation (GDPR), 
              the California Consumer Privacy Act (CCPA), and standard enterprise security frameworks.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">1. Data Controller</h2>
            <p className="leading-relaxed">
              Intuiti Corporates acts as both a Data Controller and a Data Processor depending on the engagement context:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li>
                <strong>Data Controller:</strong> We control the data of our client representatives, newsletter subscribers, 
                consultation leads, website visitors, and developers utilizing our public/private API environments.
              </li>
              <li>
                <strong>Data Processor:</strong> When building and hosting custom software solutions, we act as a Data Processor 
                handling client-owned business data. In these engagements, the client remains the sole Data Controller.
              </li>
            </ul>
            <p className="text-zinc-400 text-sm">
              For privacy-related inquiries, contact our Legal Team at{" "}
              <a href="mailto:contact@intuiticorporates.com" className="text-[#FF1E1E] hover:underline">
                contact@intuiticorporates.com
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">2. Categories of Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information that you directly provide to us, as well as data automatically gathered during your usage 
              of our applications, APIs, and portals:
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-white font-semibold text-base mb-1">A. Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-1 text-zinc-400 text-sm">
                  <li><strong>Client Account Info:</strong> Full name, corporate email address, phone number, billing address, tax identification numbers.</li>
                  <li><strong>Project Definition Data:</strong> Business workflow requirements, project scopes, API specifications, sample schemas.</li>
                  <li><strong>Developer Credentials:</strong> Metadata requested during API token generation, application descriptions, and public keys.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">B. Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-1 text-zinc-400 text-sm">
                  <li><strong>Technical Logs:</strong> IP address, browser metadata, operating system type, referring URLs.</li>
                  <li><strong>API Request Metadata:</strong> Timestamp of API calls, authorization header types, request payload sizes, response status codes, and error trace IDs.</li>
                  <li><strong>Cookies:</strong> Essential session cookies to preserve state within client portal dashboards.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">3. Legal Basis for Processing (GDPR Compliance)</h2>
            <p className="leading-relaxed">
              If you reside in the European Economic Area (EEA) or the United Kingdom (UK), our processing of personal data is justified under the following legal frameworks:
            </p>
            <table className="w-full text-left border-collapse border border-white/10 text-sm text-zinc-400 mt-4">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/10 text-white">
                  <th className="p-3 border-r border-white/10">Processing Activity</th>
                  <th className="p-3">Legal Basis (GDPR Art. 6)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-3 border-r border-white/10">Delivering custom software and managing client portals</td>
                  <td className="p-3">Performance of a Contract (Art. 6(1)(b))</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 border-r border-white/10">API key provisioning and developer application security</td>
                  <td className="p-3">Legitimate Business Interests (Art. 6(1)(f))</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 border-r border-white/10">Compliance with billing, taxation, and statutory audits</td>
                  <td className="p-3">Legal Obligation (Art. 6(1)(c))</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-white/10">Sending marketing newsletters or promotional updates</td>
                  <td className="p-3">Consent (Art. 6(1)(a))</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">4. Security Measures & Data Hosting</h2>
            <p className="leading-relaxed">
              We enforce industry-standard technical and organizational security measures to prevent unauthorized access, alteration, 
              or disclosure of your data. Our infrastructure design targets the following parameters:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li>
                <strong>Data Encryption:</strong> All communications between clients, developers, and our custom software platforms are 
                encrypted in transit using TLS 1.3. Persistent application databases are encrypted at rest using AES-256 standards.
              </li>
              <li>
                <strong>Infrastructure Architecture:</strong> Enterprise custom software backend components are developed using secure Java 
                environments (Spring Security, OAuth2, JWT access tokens). Hosting environments use secure AWS, Google Cloud, or Azure cloud structures.
              </li>
              <li>
                <strong>Access Control:</strong> We enforce strict Role-Based Access Controls (RBAC) across our deployment systems. Only verified 
                internal development personnel have access to repository configurations, subject to signed NDAs.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">5. Subprocessors & Data Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your personal information. To fulfill our development and infrastructure contracts, we share 
              limited data with the following categories of subprocessors:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li><strong>Cloud Infrastructure Hosts:</strong> Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.</li>
              <li><strong>Version Control Systems:</strong> GitHub and GitLab enterprise instance environments.</li>
              <li><strong>CI/CD Pipelines:</strong> Automated testing pipelines utilized to deploy React and Spring Boot staging projects.</li>
              <li><strong>Communication Gateways:</strong> Slack and Google Workspace to support real-time team updates during development cycles.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">6. Data Retention Policies</h2>
            <p className="leading-relaxed">
              We retain personal data only as long as necessary to fulfill the purposes for which it was collected, including legal, 
              accounting, or regulatory reporting requirements:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400 text-sm">
              <li><strong>Lead & Inquiry Data:</strong> Deleted within 12 months if no commercial relationship is established.</li>
              <li><strong>Client Application Code & Metadata:</strong> Retained for the duration of the support and maintenance contract, or destroyed upon formal project handover and sign-off.</li>
              <li><strong>API Keys & Logs:</strong> Retained in active directories while API keys are authorized; archived access logs are auto-purged after 90 days.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">7. International Data Transfers</h2>
            <p className="leading-relaxed">
              Intuiti Corporates operates globally. To support client requirements in the US, UK, and Australia, data may be transferred to 
              and processed in environments outside your home jurisdiction. For cross-border transfers of EEA/UK data to countries not 
              subject to adequacy decisions, we implement European Commission-approved <strong>Standard Contractual Clauses (SCCs)</strong> 
              to guarantee appropriate safeguards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">8. Your Data Protection Rights</h2>
            <p className="leading-relaxed">
              Depending on your location, you may hold the following statutory data rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li><strong>Right of Access & Rectification:</strong> Request copies of your personal data and verify its accuracy.</li>
              <li><strong>Right to Erasure (Right to Be Forgotten):</strong> Request deletion of your personal records, subject to legal overrides.</li>
              <li><strong>Right to Restrict or Object:</strong> Restrict our processing methodologies or object to our legitimate business interest arguments.</li>
              <li><strong>Right to Data Portability:</strong> Request machine-readable export configurations of your data.</li>
            </ul>
            <p className="text-zinc-400 text-sm mt-4">
              To exercise these rights, please email our Privacy Officer. We respond to all verified consumer requests within 30 days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">9. Contact and Escalation</h2>
            <p className="leading-relaxed">
              If you have any questions or complaints regarding this Privacy Policy, please contact our legal representative:
            </p>
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 space-y-1 text-sm text-zinc-400">
              <p className="text-white font-semibold">Intuiti Corporates Legal Department</p>
              <p>Email: contact@intuiticorporates.com</p>
              <p>Address: Hyderabad, India</p>
              <p>Representative Jurisdiction: US, UK, Australia, India</p>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
