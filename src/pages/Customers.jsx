import { useState } from "react";

// Data JSON 15 Customers
const customersData = [
  { customerId: "CUST-001", customerName: "Budi Santoso", email: "budi.santoso@example.com", phone: "081234567890", loyalty: "Gold" },
  { customerId: "CUST-002", customerName: "Siti Aminah", email: "siti.aminah@example.com", phone: "081298765432", loyalty: "Silver" },
  { customerId: "CUST-003", customerName: "Andi Wijaya", email: "andi.wijaya@example.com", phone: "081311223344", loyalty: "Bronze" },
  { customerId: "CUST-004", customerName: "Rina Melati", email: "rina.melati@example.com", phone: "081455667788", loyalty: "Gold" },
  { customerId: "CUST-005", customerName: "Joko Anwar", email: "joko.anwar@example.com", phone: "081599887766", loyalty: "Bronze" },
  { customerId: "CUST-006", customerName: "Dewi Lestari", email: "dewi.lestari@example.com", phone: "081644332211", loyalty: "Silver" },
  { customerId: "CUST-007", customerName: "Hendra Gunawan", email: "hendra.gunawan@example.com", phone: "081788990011", loyalty: "Gold" },
  { customerId: "CUST-008", customerName: "Maya Sari", email: "maya.sari@example.com", phone: "081822334455", loyalty: "Bronze" },
  { customerId: "CUST-009", customerName: "Reza Rahadian", email: "reza.rahadian@example.com", phone: "081966778899", loyalty: "Silver" },
  { customerId: "CUST-010", customerName: "Nina Zatulini", email: "nina.zatulini@example.com", phone: "082011223344", loyalty: "Bronze" },
  { customerId: "CUST-011", customerName: "Fajar Nugraha", email: "fajar.nugraha@example.com", phone: "082155667788", loyalty: "Gold" },
  { customerId: "CUST-012", customerName: "Lita Permata", email: "lita.permata@example.com", phone: "082299887766", loyalty: "Silver" },
  { customerId: "CUST-013", customerName: "Surya Saputra", email: "surya.saputra@example.com", phone: "082344332211", loyalty: "Bronze" },
  { customerId: "CUST-014", customerName: "Anita Rahman", email: "anita.rahman@example.com", phone: "082488990011", loyalty: "Gold" },
  { customerId: "CUST-015", customerName: "Gilang Dirga", email: "gilang.dirga@example.com", phone: "082522334455", loyalty: "Silver" }
];

export default function Customers() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(customersData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = customersData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getLoyaltyBadge = (loyalty) => {
    switch (loyalty) {
      case "Gold": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Silver": return "bg-slate-100 text-slate-700 border-slate-200";
      case "Bronze": return "bg-amber-50 text-amber-700 border-amber-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header diubah menjadi langsung judul tabel */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Customers List</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your customer data and loyalty programs.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Customer ID</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Customer Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Email</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Phone</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Loyalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentCustomers.map((customer) => (
                  <tr key={customer.customerId} className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="px-6 py-4 text-sm font-medium text-indigo-600">{customer.customerId}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">{customer.customerName}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{customer.email}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{customer.phone}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full border ${getLoyaltyBadge(customer.loyalty)}`}>
                        {customer.loyalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-700">{indexOfFirstItem + 1}</span> to <span className="font-semibold text-slate-700">{Math.min(indexOfLastItem, customersData.length)}</span> of <span className="font-semibold text-slate-700">{customersData.length}</span> entries
            </span>
            
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
                className="px-3 py-1 border border-slate-300 rounded-md text-sm font-medium text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                &lt;
              </button>
              <button 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-slate-300 rounded-md text-sm font-medium text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}