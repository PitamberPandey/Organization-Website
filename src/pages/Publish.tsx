import React, { useState } from 'react';
import CompanyRegistration from './CompanyRegistration';
// import CourtMarriage from './CourtMarriage';
import DivorceProcess from './DivorceProcess';
import CourtMarriage from './CourtMarriage';

const links = [
  { name: 'Company Registration', key: 'company-registration' },
  { name: 'Court Marriage', key: 'court-marriage' },
  { name: 'Divorce Process', key: 'divorce-process' },
];

export default function PublishLayout() {
  const [currentPage, setCurrentPage] = useState('company-registration');

  const renderPage = () => {
    switch (currentPage) {
      case 'company-registration':
        return <CompanyRegistration />;
      case 'court-marriage':
        return <CourtMarriage />;
      case 'divorce-process':
        return <DivorceProcess />;
      default:
        return <CompanyRegistration />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white dark:bg-gray-800 shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Documents</h2>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => setCurrentPage(link.key)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                  currentPage === link.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}
