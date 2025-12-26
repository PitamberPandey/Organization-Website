import React from 'react';
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';

export default function CompanyRegistration() {
  return (
    <div className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Company Registration in Nepal (2025)</h1>
    <img
  src={image1}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>


      {/* Introduction */}
      <section className="mb-6">
        <p>
          1. The Office of the Company Registrar (OCR) has fully digitalized the registration process. 
          As of late 2024 / 2025, you can complete registration entirely online:
        </p>
        <ul className="list-decimal list-inside ml-4 my-2">
          <li>Name reservation</li>
          <li>Submission of documents (MOA/AOA)</li>
          <li>Fee payment</li>
          <li>Receipt of incorporation certificate</li>
        </ul>
        <p>2. The digital portal is via the Integrated Company Registration System (ICRS) on OCR’s website.</p>
        <p>
          3. For foreign investors / foreign-owned companies, the 2025 reforms include reduced minimum thresholds 
          and faster “automatic approval route” for priority sectors such as IT, tourism, hydropower, and manufacturing.
        </p>
        <p>
          4. The new law allows flexible capitalization: companies can issue shares against non-cash assets 
          (e.g., intellectual property, technical know-how). Employee-share/ESOP schemes are also allowed.
        </p>
      </section>

      {/* Types of Companies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Types of Companies You Can Register in Nepal</h2>
          <img
  src={image2}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>

        <div className="mb-4">
             <h3 className="font-semibold">Under the governing law (Companies Act, 2063), companies in Nepal can be registered as: </h3>


          <h3 className="font-semibold">a. Private Limited Company (Pvt. Ltd.)</h3>
          <p>A Pvt. Ltd. is closely held by private shareholders and cannot invite investment from the public.</p>
          <p className="italic">Legal Basis: Section 2(b) of the Companies Act, 2063</p>
          <ul className="list-disc list-inside ml-4">
            <li>1 to 101 shareholders</li>
            <li>Limited liability for shareholders</li>
            <li>Cannot issue shares/debentures to the public</li>
            <li>Commonly used for small and medium-sized businesses</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">b. Public Limited Company (Ltd.)</h3>
          <p>Can raise capital from the public by issuing shares.</p>
          <p className="italic">Legal Basis: Section 2(c) of the Companies Act, 2063</p>
          <ul className="list-disc list-inside ml-4">
            <li>At least 7 shareholders, no upper limit</li>
            <li>Minimum paid-up capital NPR 10,000,000</li>
            <li>Can offer shares publicly and trade on NEPSE</li>
            <li>Requires 1 to 11 directors</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">c. Non-profit / Non-distributing Company</h3>
          <p>Formed for social, educational, cultural, or charitable purposes. Surplus income is reinvested.</p>
          <p className="italic">Legal Basis: Section 2(h) of the Companies Act, 2063</p>
          <ul className="list-disc list-inside ml-4">
            <li>At least 5 directors</li>
            <li>No distribution of profits/dividends</li>
            <li>Subject to annual audits and reports</li>
            <li>Used for NGOs and social enterprises</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">d. Foreign Company</h3>
          <p>Incorporated outside Nepal but operating in Nepal.</p>
          <p className="italic">Legal Basis: Section 2(f) of Companies Act, 2063 and FITTA, 2075</p>
          <ul className="list-disc list-inside ml-4">
            <li>Register with OCR and comply with FITTA</li>
            <li>Follow Nepali tax, labor, and other laws</li>
            <li>Appoint a local representative</li>
            <li>Used for branches, liaison, or project offices</li>
          </ul>
        </div>
      </section>

      {/* Registration Procedure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Company Registration Procedure in Nepal</h2>
        <h3>The registration of a company in Nepal involves several procedural steps aimed at ensuring legal transparency and proper documentation. The general process is as follows:/</h3> 
           <img
  src={image3}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>
        <ul className="list-decimal list-inside ml-4">
          <li>
            <strong>Name Reservation:</strong> Submit a proposed name on OCR portal. Ensure it is unique, legal, and non-misleading.
          </li>
          <li>
            <strong>Document Submission:</strong> MOA, AOA, shareholder documents, and other required forms.
          </li>
          <li>
            <strong>Verification & Approval:</strong> OCR reviews documents, issues Certificate of Incorporation.
          </li>
          <li>
            <strong>Tax Registration:</strong> Apply for PAN and VAT (if applicable) at the Inland Revenue Department.
          </li>
          <li>
            <strong>Local Authority Registration:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Register with ward office, rural municipality, or municipality</li>
              <li>Obtain trade licenses or sector-specific permits</li>
            </ul>
          </li>
        </ul>

        <h3 className="mt-4 font-semibold">Timeframe:</h3>
        <p>Typically 10 to 15 days depending on complexity and document accuracy.</p>

        <h3 className="mt-4 font-semibold">Minimum Capital Requirements:</h3>
        <table className="table-auto border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border px-2 py-1">Company</th>
              <th className="border px-2 py-1">Amount in NPR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Public Company</td>
              <td className="border px-2 py-1">1,00,00,000</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Private Company</td>
              <td className="border px-2 py-1">1,00,000</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-4 font-semibold">Government Fees for Company Registration</h3>

        {/* Private Company Fees */}
        <h4 className="font-semibold mt-2">Private Company</h4>
        <table className="table-auto border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border px-2 py-1">Authorized Capital (NPR)</th>
              <th className="border px-2 py-1">Registration Fee (NPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">Up to 1,00,000</td><td className="border px-2 py-1">1,000</td></tr>
            <tr><td className="border px-2 py-1">1,00,001 to 5,00,000</td><td className="border px-2 py-1">4,500</td></tr>
            <tr><td className="border px-2 py-1">5,00,001 to 25,00,000</td><td className="border px-2 py-1">9,500</td></tr>
            <tr><td className="border px-2 py-1">25,00,001 to 1,00,00,000</td><td className="border px-2 py-1">16,000</td></tr>
            <tr><td className="border px-2 py-1">1,00,00,001 to 2,00,00,000</td><td className="border px-2 py-1">19,000</td></tr>
            <tr><td className="border px-2 py-1">2,00,00,001 to 3,00,00,000</td><td className="border px-2 py-1">22,000</td></tr>
            <tr><td className="border px-2 py-1">3,00,00,001 to 4,00,00,000</td><td className="border px-2 py-1">25,000</td></tr>
            <tr><td className="border px-2 py-1">4,00,00,001 to 5,00,00,000</td><td className="border px-2 py-1">28,000</td></tr>
            <tr><td className="border px-2 py-1">5,00,00,001 to 6,00,00,000</td><td className="border px-2 py-1">31,000</td></tr>
            <tr><td className="border px-2 py-1">6,00,00,001 to 7,00,00,000</td><td className="border px-2 py-1">34,000</td></tr>
            <tr><td className="border px-2 py-1">7,00,00,001 to 8,00,00,000</td><td className="border px-2 py-1">37,000</td></tr>
            <tr><td className="border px-2 py-1">8,00,00,001 to 9,00,00,000</td><td className="border px-2 py-1">40,000</td></tr>
            <tr><td className="border px-2 py-1">9,00,00,001 to 10,00,00,000</td><td className="border px-2 py-1">43,000</td></tr>
            <tr><td className="border px-2 py-1">Above 10,00,00,000</td><td className="border px-2 py-1">3,000 for each 1,00,000</td></tr>
          </tbody>
        </table>

        {/* Public Company Fees */}
        <h4 className="font-semibold mt-2">Public Company</h4>
        <table className="table-auto border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border px-2 py-1">Authorized Capital (NPR)</th>
              <th className="border px-2 py-1">Registration Fee (NPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">Up to 1,00,00,000</td><td className="border px-2 py-1">15,000</td></tr>
            <tr><td className="border px-2 py-1">1,00,00,001 to 10,00,00,000</td><td className="border px-2 py-1">40,000</td></tr>
            <tr><td className="border px-2 py-1">10,00,00,001 to 20,00,00,000</td><td className="border px-2 py-1">70,000</td></tr>
            <tr><td className="border px-2 py-1">20,00,00,001 to 30,00,00,000</td><td className="border px-2 py-1">1,00,000</td></tr>
            <tr><td className="border px-2 py-1">30,00,00,001 to 40,00,00,000</td><td className="border px-2 py-1">1,30,000</td></tr>
            <tr><td className="border px-2 py-1">40,00,00,001 to 50,00,00,000</td><td className="border px-2 py-1">1,60,000</td></tr>
            <tr><td className="border px-2 py-1">Above 50,00,00,000</td><td className="border px-2 py-1">3,000 for each 1,00,000</td></tr>
          </tbody>
        </table>

        {/* Additional Costs */}
        <h4 className="font-semibold mt-2">Additional Costs & Licenses</h4>
        <ul className="list-disc list-inside ml-4">
          <li>Guarantee Deposit for Foreign Investment: NPR 20,000 (≈ USD 155)</li>
          <li>Business Registration at Local Ward Office: NPR 5,000 to 15,000 annually</li>
          <li>House Rent Tax: 10% of monthly rent (varies)</li>
          <li>Sector-specific licenses:
            <ul className="list-disc list-inside ml-4">
              <li>Banking & Financial Institutions: Nepal Rastra Bank</li>
              <li>Insurance: Insurance Board</li>
              <li>Travel & Tourism: Ministry of Tourism, Culture, and Civil Aviation</li>
            </ul>
          </li>
        </ul>

        {/* Compliance */}
        <h3 className="mt-4 font-semibold">Post-Registration Compliance</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Licensing: Additional licenses or permits depending on business type</li>
          <li>Tax Filing: Regular tax filings and annual reports</li>
          <li>Labor Law Compliance: Follow labor regulations</li>
          <li>Shareholder and Director Reporting: Submit annual compliance reports to OCR</li>
        </ul>

        {/* Step-by-step */}
        <h3 className="mt-4 font-semibold">Step-by-Step Registration Process</h3>
        <ul className="list-decimal list-inside ml-4">
          <li>Name Reservation – Submit proposed company name to OCR</li>
          <li>Document Preparation & Submission – Draft MOA/AOA and shareholder/director documents; submit to OCR</li>
          <li>Payment of Fees – As per company type and authorized capital</li>
          <li>Certificate of Incorporation – OCR issues legal certificate</li>
          <li>PAN & VAT Registration – Register with IRD for taxation; VAT if applicable</li>
        </ul>

        {/* Why Plato Associates */}
        <h3 className="mt-4 font-semibold">Why Choose Plato Associates?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Expert guidance on company type selection and legal compliance</li>
          <li>Complete documentation support, including MoA & AoA drafting</li>
          <li>Coordination with OCR and relevant authorities</li>
          <li>Assistance with PAN and VAT registration</li>
          <li>Quick, hassle-free, and reliable service</li>
        </ul>

        <h3 className="mt-4 font-semibold">Contact Us</h3>
        <p>
          Launch your business in Nepal the right way with Plato Associates – your trusted legal & business partner. 
          We ensure a smooth registration process so you can focus on growing your business.
        </p>
      </section>
    </div>
  );
}
