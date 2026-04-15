import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const data = filter === "all"
    ? timeline
    : timeline.filter(t => t.type === filter);

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Timeline</h1>

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Filter Timeline</option>
          <option value="all">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        {data.map(item => (
          <div key={item.id} className="shadow p-4 mt-4">
            {item.title}
            <p className="text-sm text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}