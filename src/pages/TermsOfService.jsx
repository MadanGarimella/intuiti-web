import { motion } from "framer-motion";

const TermsOfService = () => {
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
            Legal Terms
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terms of Service
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
            <h2 className="text-white font-bold text-lg mb-3">Agreement Terms Overview</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              These Terms of Service ("Terms") govern your relationship with Intuiti Corporates as a client, visitor, or developer 
              accessing our custom software design, web application development, cloud deployment services, and public or private APIs. 
              By engaging our custom React and Spring Boot development teams, accessing our staging servers, or requesting API credentials, 
              you enter into a legally binding contract with Intuiti Corporates.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">1. Scope of Development Services</h2>
            <p className="leading-relaxed">
              Intuiti Corporates provides customized software engineering, API integration, UI/UX designing, and cloud deployment consulting services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li>
                <strong>Project Delivery Standards:</strong> All custom web applications and business management systems are developed 
                based on the finalized, signed Scope of Work (SOW) documents detailing milestones, deliverables, and timelines.
              </li>
              <li>
                <strong>Sprints and Client Demos:</strong> Projects are structured into weekly cycles. Standard clients receive 
                access to password-protected deployment environments (staging domains) to verify functionality before launch.
              </li>
              <li>
                <strong>Change Requests:</strong> Functional changes requested outside the SOW boundary will be scoped as independent phases and billed at current hourly rates or updated fixed pricing contracts.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">2. Payment Milestones & Commercial Terms</h2>
            <p className="leading-relaxed">
              Our service contracts adhere to transparent milestones to prevent payment friction and ensure project momentum:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li>
                <strong>Standard Packages:</strong> Starter and Growth packages require a 50% mobilization deposit before commencement 
                of UI/UX layouts or database configuration, with the remaining 50% due immediately upon successful production delivery.
              </li>
              <li>
                <strong>Enterprise Agreements:</strong> Phased projects are structured with milestone-based billings. Staged code 
                releases are pushed to repositories upon confirmation of matching milestone payments.
              </li>
              <li>
                <strong>Overdue Accounts:</strong> Failure to clear final invoices within 15 calendar days from the delivery date 
                may result in immediate suspension of staging hosting, cloud server support, or API endpoints.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">3. Intellectual Property Ownership & Handover</h2>
            <p className="leading-relaxed">
              Upon receipt of final payment, Intuiti Corporates executes a complete handover of custom code rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li>
                <strong>IP Transfer:</strong> Ownership of custom React UI code, Spring Boot application instances, and database structures 
                transfers wholly to the client. Intuiti Corporates retains no structural code claims post-handover.
              </li>
              <li>
                <strong>FlowOS Licensing:</strong> Where clients deploy systems utilizing FlowOS modules, client receives a perpetual, non-exclusive, 
                non-transferable global license to utilize and modify the incorporated FlowOS code within that specific business deployment.
              </li>
              <li>
                <strong>Open Source Libraries:</strong> The codebase may incorporate standard open-source libraries (e.g. React.js modules, Spring Framework packages). 
                Such dependencies are bound by their respective licenses (MIT, Apache 2.0).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">4. Developer API & Key Provisioning Guidelines</h2>
            <p className="leading-relaxed">
              Developers utilizing our APIs or applying for API credentials to interface with client portals agree to comply with the following developer code of conduct:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li>
                <strong>Authentication & Credentials:</strong> API keys must be stored in secure configurations (e.g. backend environments). 
                Exposing secret client keys in frontend components or publicly readable code repositories is strictly prohibited.
              </li>
              <li>
                <strong>Rate Limiting & Safety:</strong> Standard API rate limits apply to protect server infrastructure. 
                Any attempt to bypass rate-limiting policies, perform aggressive data scraping, or run distributed load testing without written authorization will result in immediate credential revocation.
              </li>
              <li>
                <strong>API deprecation:</strong> We reserve the right to deprecate or update API version structures upon 30 days notice to ensure the security and performance of our enterprise client portals.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">5. Project Warranties & Post-Launch SLAs</h2>
            <p className="leading-relaxed">
              We stand by our code. Every package includes a dedicated warranty support window to address performance and structural bugs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
              <li>
                <strong>Warranty Support:</strong> Starter packages include 30 days of active support; Growth packages include 60 days. 
                This warranty covers code debugging, critical system patches, and operational troubleshooting directly relating to the original scope.
              </li>
              <li>
                <strong>Disclaimer of Warranties:</strong> Except as specifically detailed in an SOW, all services, portals, and APIs are 
                provided "as is" and "as available". We do not warrant that applications will run completely error-free or uninterrupted 
                in third-party cloud environments not managed by our team.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by applicable law, in no event shall Intuiti Corporates be liable for any indirect, incidental, 
              special, consequential, or punitive damages (including loss of profits, data, goodwill, or operational business interruption) 
              arising out of or in connection with our software development contracts or API access tools. 
              Our total cumulative liability under any engagement shall not exceed the fees actually paid to us by the client for that specific project.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">7. Governing Law and Arbitration</h2>
            <p className="leading-relaxed">
              These Terms, their interpretation, and any disputes arising under or in relation to our commercial software contracts shall be 
              governed by the laws of India, without regard to conflict of law principles. 
              Any legal action, dispute, or claim arising out of these Terms shall be settled through binding arbitration under the rules of 
              the Arbitration and Conciliation Act of India, with proceedings held in Hyderabad, India.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">8. Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time to reflect changing regulations, legal updates, or service structures. 
              For developers with active API keys, updates will be announced via system notifications or email. 
              Your continued engagement of our custom software development processes or API keys following publication of updates 
              constitutes binding acceptance of modified Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-2xl font-bold border-l-2 border-[#FF1E1E] pl-4">9. Contact and Legal Representation</h2>
            <p className="leading-relaxed">
              Please direct all legal questions, contract reviews, and API key inquiry reviews to our corporate legal representative:
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

export default TermsOfService;
