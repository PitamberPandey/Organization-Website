import React from "react";
import image11 from "./image/image11.png";
import image12 from "./image/image12.png";
import image13 from "./image/image13.png";
import image14 from "./image/image14.png";
import image15 from "./image/image15.png";
import image16 from "./image/image16.png";
import image17 from "./image/image7.png";


const DivorceProcess: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Divorce in Nepal: Step-by-Step Guide to the Divorce Process and Law
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Divorce is never an easy decision, but understanding the law and process can make it less confusing. In Nepal, divorce is mainly governed by the Civil Code 2017 (2074), and most cases are handled by the District Courts.
      </p> <img
  src={image11}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>

      <p className="text-gray-700 mb-4">
        This guide is written for the general public and potential clients who want a clear, simple, and professional explanation of:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>How the divorce process in Nepal works?</li>
        <li>What the grounds for divorce in Nepal are?</li>
        <li>How mutual consent divorce in Nepal is handled?</li>
        <li>What happens to property, alimony, and children?</li>
      </ul>

      <p className="text-gray-600 italic mb-6">
        Note: This is general information, not a substitute for legal advice. For your specific situation, you should consult a qualified divorce lawyer in Nepal.
      </p>

      {/* Overview */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview of Divorce Law in Nepal</h2>
      <p className="text-gray-700 mb-4">
        Under Nepali law, divorce is the legal termination of marriage between a husband and wife.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>The law is set out in the Chapter on Divorce of the Civil Code 2017.</li>
        <li>Sections 93–104 of the Civil Code deal specifically with divorce and mutual consent divorce.</li>
        <li>Divorce cases are filed and decided in the relevant District Court.</li>
        <li>A couple can divorce by mutual consent, or one spouse can seek divorce without the other’s consent on certain legal grounds.</li>
      </ul>

      {/* Types of Divorce */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Divorce in Nepal</h2>
      <img
  src={image12}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Mutual Consent Divorce</h3>
      <p className="text-gray-700 mb-4">
        If both husband and wife agree that they want to end the marriage, they can apply for mutual consent divorce.
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Both parties sign and file a joint application to the District Court.</li>
        <li>The Court confirms that the decision is voluntary and that both understand the consequences.</li>
        <li>If everything is in order, the Court can finalize the divorce relatively quickly.</li>
        <li>Property division, child custody, and maintenance issues are often included in the agreement.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Contested Divorce (Without Consent)</h3>
      <p className="text-gray-700 mb-2">
        If one spouse does not agree to divorce, the other can still file a case, but only on legally recognized grounds.
      </p>

      <h4 className="text-lg font-semibold text-gray-800 mb-1">Grounds for Husband to File for Divorce</h4>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Wife has been living separately for three or more years without consent.</li>
        <li>Wife denies maintenance or expels him from the shared home.</li>
        <li>Wife commits or conspires to cause serious physical/mental harm.</li>
        <li>It is proven that the wife has sexual relations with another man.</li>
      </ul>

      <h4 className="text-lg font-semibold text-gray-800 mb-1">Grounds for Wife to File for Divorce</h4>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Husband has been living separately for three or more years without consent.</li>
        <li>Husband denies maintenance or drives her out of the home.</li>
        <li>Husband commits or conspires to cause serious physical/mental harm.</li>
        <li>Husband marries another woman or has sexual relations with another woman.</li>
        <li>Evidence of rape or conspiracy to commit rape.</li>
      </ul>

      {/* Step-by-Step Process */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Step-by-Step Divorce Process in Nepal</h2>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Consult a Lawyer (Recommended)</h3>
      <p className="text-gray-700 mb-4">
        While the law does not force you to hire a lawyer, working with an experienced divorce lawyer is highly recommended, especially if there is a dispute over property, children, or if one spouse lives abroad.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Prepare Documents</h3>
      <img
  src={image13}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>
      <ul className="list-decimal list-inside mb-4 text-gray-700">
        <li>Marriage registration certificate (or other proof of marriage if not available)</li>
        <li>Citizenship certificate (copy) of the applicant</li>
        <li>Passport-sized photos of the applicant</li>
        <li>Any supporting evidence related to the grounds for divorce</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: File the Divorce Petition</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>The spouse (or both, in mutual consent) files a petition at the concerned District Court.</li>
        <li>The petition states facts, grounds for divorce, and requested relief, such as property division and maintenance.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 4: Court Issues Notice</h3>
      <p className="text-gray-700 mb-4">
        The Court sends a formal notice of the petition to the other spouse, usually through court officials or authorized process servers.
      </p>


      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 5: Reply from the Other Spouse</h3>
      <p className="text-gray-700 mb-4">
        The spouse who receives the notice has to file a written reply (statement of defense) within the time given by the Court.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 6: Mediation and Reconciliation</h3>
      <p className="text-gray-700 mb-4">
        The Court encourages reconciliation. Mediation may settle differences on property, child arrangements, or maintenance. If unresolved, the case continues.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 7: Evidence, Hearings, and Arguments</h3>
      <p className="text-gray-700 mb-4">
        Both sides present documents, witnesses, and evidence. The judge examines legal grounds and considers property, children, and maintenance.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 8: Court's Decision</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Whether divorce is granted</li>
        <li>Division of property</li>
        <li>Alimony or maintenance</li>
        <li>Arrangements for children</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 9: Updating Official Records</h3>
      <p className="text-gray-700 mb-4">
        The divorce decision must be recorded and the marriage registration updated/cancelled in the concerned Ward Office or registration authority.
      </p>

      {/* Property & Alimony */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Property Division, Alimony and Maintenance</h2>
      <p className="text-gray-700 mb-4">Financial matters are often the most sensitive part of any divorce case in Nepal.</p>
      <img
  src={image14}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Property Rights of the Wife</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Wife generally has an equal share in husband's property as a coparcener.</li>
        <li>Husband, wife, father, mother, sons, and daughters are all treated as coparceners.</li>
        <li>Property in common should be divided according to law before divorce is finalized.</li>
        <li>If husband hasn't taken partition, Court can order disclosure of all coparceners and apportion shares.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 When Husband May Not Have to Give Property Share or Alimony</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Wife deprived him of maintenance or expelled him from the house</li>
        <li>Wife committed or conspired to cause serious physical/mental harm</li>
        <li>Wife had sexual relations with another man</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">4.3 Alimony and Lump Sum Payments</h3>
      <p className="text-gray-700 mb-4">
        Wife may request a lump sum amount or annual/monthly alimony. Court orders are based on husband's property and income. If wife remarries, alimony generally ends.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">4.4 Maintenance Where There Is No Property for Partition</h3>
      <p className="text-gray-700 mb-4">
        If no property exists but husband has income, the Court may order maintenance according to his income. Exceptions: wife remarries or has higher income than husband.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Children’s Rights and Inheritance After Divorce</h2>
         <img src={image15}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>
<p className="text-gray-700 mb-4">
  While this guide focuses on the divorce process, it is important to note:
</p>

<ul className="list-disc list-inside mb-4 text-gray-700">
  <li>Child custody, visitation, and support are typically decided based on the best interests of the child.</li>
  <li>On the death of a divorced woman, her children (son or daughter), if any, generally inherit her property first.</li>
  <li>If she has no children, property she received from her former husband may revert to him, and property not received from him may go to heirs on her mother’s side, depending on the circumstances.</li>
</ul>
<p className="text-gray-600 italic mb-6">
  Because inheritance and child issues can be complex, it is wise to seek specific legal advice.
</p>

{/* Divorce from Abroad */}
<h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Divorce from Abroad: For Nepalis Living Outside Nepal</h2>
 <img src={image16}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>
<ul className="list-disc list-inside mb-6 text-gray-700">
  <li>A husband or wife living overseas can file for divorce in Nepal without physically coming to Nepal.</li>
  <li>They can issue a Power of Attorney authorizing someone in Nepal (often a relative or lawyer) to act on their behalf.</li>
  <li>This Power of Attorney must be verified and authenticated by the Nepali Embassy or Consulate in that country.</li>
  <li>A local divorce lawyer in Nepal is usually needed to prepare documents, file the case, and appear in Court.</li>
</ul>

      {/* Duration */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. How Long Does a Divorce Take in Nepal?</h2>
       <img src={image17}
  alt="Company Registration"
  className="w-full h-70 object-cover"
/>
      <p className="text-gray-700 mb-4">
        Timeframes vary depending on:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Whether the case is mutual or contested</li>
        <li>How quickly the Court can serve notice</li>
        <li>The complexity of property and child issues</li>
        <li>Court workload and scheduling</li>
      </ul>
      <p className="text-gray-700 mb-4">
        General guideline:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Mutual consent divorce – can often be completed relatively quickly if documents are complete and both parties cooperate.</li>
        <li>Contested divorce – may take around one year or more if full hearings are required.</li>
      </ul>

      {/* Lawyer Advice */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. When Should You Talk to a Divorce Lawyer in Nepal?</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>You are uncertain whether you have legal grounds for divorce</li>
        <li>There is joint property, business, or inheritance involved</li>
        <li>You and your spouse disagree about divorce or about money/children</li>
        <li>You live abroad and want to start the divorce process in Nepal</li>
        <li>You want to explore mutual consent divorce and formalize the agreement properly</li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Plato Associates?</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Expert legal drafting and documentation</li>
        <li>End-to-end support from application to final certificate</li>
        <li>Fast, reliable, and professional service</li>
        <li>Assistance for foreign clients and cross-border marriages</li>
        <li>Confidential and client-centric approach</li>
      </ul>

      {/* Contact */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us for Assistance</h2>
      <p className="text-gray-700 mb-2">
        Let us handle the legal work while you focus on your new beginning. Plato Associates – Legal & Tech Firm of Nepal. Trusted for precision, professionalism, and privacy.
      </p>
      <p className="text-gray-700 mb-2">
        Mail us on: <a href="mailto:plutoassociates@gmail.com" className="text-blue-600">plutoassociates@gmail.com</a>
      </p>
      <p className="text-gray-700 mb-2">
        WhatsApp: +977 9845769570, +977 974837611
      </p>
    </div>
  );
};

export default DivorceProcess;
