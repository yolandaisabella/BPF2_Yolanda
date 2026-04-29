import { useState } from "react";

// Data JSON 15 Orders
const ordersData = [
  { orderId: "ORD-1001", customerName: "Budi Santoso", status: "Completed", totalPrice: "Rp 250.000", orderDate: "2026-04-20" },
  { orderId: "ORD-1002", customerName: "Siti Aminah", status: "Pending", totalPrice: "Rp 180.000", orderDate: "2026-04-21" },
  { orderId: "ORD-1003", customerName: "Andi Wijaya", status: "Cancelled", totalPrice: "Rp 75.000", orderDate: "2026-04-21" },
  { orderId: "ORD-1004", customerName: "Rina Melati", status: "Completed", totalPrice: "Rp 450.000", orderDate: "2026-04-22" },
  { orderId: "ORD-1005", customerName: "Joko Anwar", status: "Completed", totalPrice: "Rp 120.000", orderDate: "2026-04-23" },
  { orderId: "ORD-1006", customerName: "Dewi Lestari", status: "Pending", totalPrice: "Rp 340.000", orderDate: "2026-04-23" },
  { orderId: "ORD-1007", customerName: "Hendra Gunawan", status: "Completed", totalPrice: "Rp 890.000", orderDate: "2026-04-24" },
  { orderId: "ORD-1008", customerName: "Maya Sari", status: "Cancelled", totalPrice: "Rp 55.000", orderDate: "2026-04-25" },
  { orderId: "ORD-1009", customerName: "Reza Rahadian", status: "Completed", totalPrice: "Rp 670.000", orderDate: "2026-04-25" },
  { orderId: "ORD-1010", customerName: "Nina Zatulini", status: "Pending", totalPrice: "Rp 1.250.000", orderDate: "2026-04-26" },
  { orderId: "ORD-1011", customerName: "Fajar Nugraha", status: "Completed", totalPrice: "Rp 210.000", orderDate: "2026-04-26" },
  { orderId: "ORD-1012", customerName: "Lita Permata", status: "Completed", totalPrice: "Rp 150.000", orderDate: "2026-04-27" },
  { orderId: "ORD-1013", customerName: "Surya Saputra", status: "Pending", totalPrice: "Rp 430.000", orderDate: "2026-04-28" },
  { orderId: "ORD-1014", customerName: "Anita Rahman", status: "Cancelled", totalPrice: "Rp 275.000", orderDate: "2026-04-28" },
  { orderId: "ORD-1015", customerName: "Gilang Dirga", status: "Completed", totalPrice: "Rp 560.000", orderDate: "2026-04-29" }
];

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(ordersData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = ordersData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Pending": return "bg-amber-100 text-amber-700 border-amber-200";
      case "Cancelled": return "bg-rose-100 text-rose-700 border-rose-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header diubah menjadi langsung judul tabel */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Orders List</h1>
          <p className="text-sm text-slate-500 mt-1">Monitor and track customer order statuses.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Order ID</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Customer Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Order Date</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Total Price</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentOrders.map((order) => (
                  <tr key={order.orderId} className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="px-6 py-4 text-sm font-medium text-indigo-600">{order.orderId}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">{order.customerName}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{order.orderDate}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{order.totalPrice}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 inline-flex text-xs font-bold rounded-full border ${getStatusBadge(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-700">{indexOfFirstItem + 1}</span> to <span className="font-semibold text-slate-700">{Math.min(indexOfLastItem, ordersData.length)}</span> of <span className="font-semibold text-slate-700">{ordersData.length}</span> entries
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