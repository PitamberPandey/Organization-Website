import { Outlet, NavLink } from 'react-router-dom';

const links = [
  { name: 'Company Registration', path: 'company-registration' },
  { name: 'Court Marriage', path: 'court-marriage' },
  { name: 'Divorce Process', path: 'divorce-process' },
];

export default function PublishLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white dark:bg-gray-800 shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Documents</h2>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-blue-500 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-auto">
        {/* This will render CompanyRegistration, CourtMarriage, DivorceProcess based on route */}
        <Outlet />
      </main>
    </div>
  );
}
