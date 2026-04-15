import { PieChart, Pie, Cell } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const data = [
    { name: "Call", value: timeline.filter(t => t.type === "Call").length },
    { name: "Text", value: timeline.filter(t => t.type === "Text").length },
    { name: "Video", value: timeline.filter(t => t.type === "Video").length }
  ];

  const COLORS = ["#000000", "#3B82F6", "#22C55E"];

  return (
    <>
      <Navbar />

      <div className="p-10">

        {/* TITLE LEFT */}
        <h1 className="text-2xl font-bold mb-6">
          Friendship Analytics
        </h1>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow p-6 relative flex flex-col items-center">

          {/* TOP RIGHT TEXT */}
          <p className="absolute top-4 left-6 text-sm text-gray-500">
            By interaction type
          </p>

          {/* PIE CHART */}
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              cx="50%"
              cy="50%"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>

          {/* LEGEND INSIDE CARD */}
          <div className="flex gap-8 mt-4 text-sm">

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span>Text</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-black"></div>
              <span>Call</span>
            </div>

            

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span>Video</span>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}