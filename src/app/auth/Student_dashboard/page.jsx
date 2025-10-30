import Sidebar from "@/Components/Studentdas/Sidebar";
import DashboardCard from "@/Components/Studentdas/DashboardCard";
import ProgressBar from "@/Components/Studentdas/DashboardCard";

export default function Student_dashboard() {
  return (
    
    <div className="flex min-h-screen p-6 gap-6">
      <Sidebar />

       <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-18 right-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>


      <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Aisha Rahman</h2>
            <p className="text-gray-500 text-sm">ERA1112256</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard title="Academic Overview">
            <p className="text-3xl font-bold text-blue-600">CGPA: 3.75</p>
            <p className="text-gray-500 mt-2">Total Credits: 90/120</p>
          </DashboardCard>

          <DashboardCard title="Active Courses">
            <div className="space-y-3">
              <div>
                <p>Calculus III</p>
                <ProgressBar percent={85} />
              </div>
              <div>
                <p>Database Systems</p>
                <ProgressBar percent={90} />
              </div>
              <div>
                <p>Software Engineering</p>
                <ProgressBar percent={80} />
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Quick Links">
            <div className="flex flex-wrap gap-3">
              {["Course Catalog", "Timetable", "Financial Aid"].map((link) => (
                <button
                  key={link}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition"
                >
                  {link}
                </button>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
