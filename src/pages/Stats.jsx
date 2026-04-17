import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

export default function Stats() {

  const { timeline } = useContext(TimelineContext); // ✅ your original variable

  // ✅ Keep your original logic
  const data = [
    { name: "Call", value: timeline.filter(t => t.type === "Call").length },
    { name: "Text", value: timeline.filter(t => t.type === "Text").length },
    { name: "Video", value: timeline.filter(t => t.type === "Video").length }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const COLORS = ["#14532D", "#7C3AED", "#22C55E"];

  // ✅ Hover tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow px-3 py-2 rounded border text-sm">
          <p className="font-medium">{payload[0].name}</p>
          <p>{payload[0].value} interactions</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Navbar />

      <div className="px-10 py-10">

        <h1 className="text-2xl font-bold mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white shadow rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-4">
            By Interaction Type
          </p>

          {/* ✅ ONLY SHOW WHEN DATA EXISTS */}
          {total > 0 && (
            <div className="w-full h-72 flex justify-center items-center">

              <ResponsiveContainer width={300} height={300}>
                <PieChart>

                  <Pie
                    data={data}
                    innerRadius={85}
                    outerRadius={110}
                    paddingAngle={6}
                    cornerRadius={10}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Tooltip content={<CustomTooltip />} />

                </PieChart>
              </ResponsiveContainer>

            </div>
          )}

          {/* Legend (no count as you wanted) */}
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-900"></span>
              <p>Call</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-600"></span>
              <p>Text</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <p>Video</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}