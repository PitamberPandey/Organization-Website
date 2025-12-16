import { useState } from 'react';
import companyRegPDF from './Company Registration.pdf';
import courtmarrigePDF from './Court Marriage.pdf';
import diverous from "./Divorce Process.pdf";



interface Document {
  id: string;
  title: string;
  url: string; // URL of the document (PDF, online doc, etc.)
}

const documents: Document[] = [
  {
    id: 'doc1',
    title: 'Company Registration',
    url: companyRegPDF, // Replace with your document link
  },
  {
    id: 'doc2',
    title: 'Court Marriage',
    url: courtmarrigePDF, // Replace with your document link
  },
  {
    id: 'doc3',
    title:'Divorce',
    url: diverous, // Replace with your document link
  },
];

export default function PublishDocs() {
  const [selectedDoc, setSelectedDoc] = useState<Document>(documents[0]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-6">
        {/* Left Column: Document List */}
        <div className="md:w-1/4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Documents
          </h2>
          <ul className="space-y-3">
            {documents.map((doc) => (
              <li key={doc.id}>
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    selectedDoc.id === doc.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {doc.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Document Viewer */}
        <div className="md:w-3/4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {selectedDoc.title}
          </h2>
         <div className="flex-1 h-[calc(100vh-6rem)]">
           <iframe
    src={selectedDoc.url}
    className="w-full h-[85vh] rounded-lg border border-gray-300 dark:border-gray-700"
    title={selectedDoc.title}
    frameBorder={0}
  ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
