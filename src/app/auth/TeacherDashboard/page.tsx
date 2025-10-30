import TeacherSidebar from "@/Components/Teacherdas/TeacherSidebar";
import DashboardCard from "@/Components/Teacherdas/DashboardCard";

export default function DashboardPage() {
  return (
    <div className="flex gap-6 p-6 min-h-screen">
     
<TeacherSidebar/>
      <div className="flex-1 bg-white/80 backdrop-blur-xl rounded-3xl shadow-md p-8 border border-gray-100">
        <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>

        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://i.pravatar.cc/100?img=8"
            alt="Teacher"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold">Prof. David Chen</h2>
            <p className="text-gray-500 text-sm">FAC12345S</p>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard title="Academic Overview">
            <p className="text-2xl font-bold text-blue-600">
              Current Courses: 3
            </p>
            <p className="text-gray-500 mt-1">
              Pending Grading: <span className="text-blue-500 font-semibold">45</span> submissions
            </p>
          </DashboardCard>

          <DashboardCard title="Current Courses">
            <div className="space-y-3">
              {[
                { name: "Calculus III", percent: "5%", color: "red-500" },
                { name: "Database Systems", percent: "96%", color: "green-500" },
                { name: "Software Engineering", percent: "91%", color: "green-500" },
              ].map((c) => (
                <div key={c.name} className="text-sm">
                  <div className="flex justify-between">
                    <p>{c.name}</p>
                    <p className={`text-${c.color}`}>{c.percent}</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                    <div
                      className={`h-2 bg-${c.color} rounded-full`}
                      style={{ width: c.percent }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Quick Actions">
            <div className="flex flex-wrap gap-3">
              {["Course Catalog", "Timetable", "Financial Aid"].map((item) => (
                <button
                  key={item}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
        