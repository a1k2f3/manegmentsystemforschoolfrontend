const DashboardCard = ({ title, children }) => (
  <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md p-5 border border-gray-100">
    <h2 className="text-lg font-semibold mb-3 text-gray-700">{title}</h2>
    {children}
  </div>
);
export default DashboardCard;
