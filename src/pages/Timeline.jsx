import { useContext, useState, useRef, useEffect } from "react";
import { TimelineContext } from "../context/TimelineContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//  ICONS 
import callIcon from "/assets/call.png";
import videoIcon from "/assets/video.png";
import textIcon from "/assets/text.png";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);

  
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // filter logic
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <>
      <Navbar />

      <div className="p-10">
         {}
          <h1 className="text-2xl font-bold">Timeline</h1>

        {}
        <div className="flex items-center gap-6 mb-6">

          {}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 bg-white border rounded-lg shadow flex items-center gap-2"
            >
              Filter timeline
              <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow z-10">
                {["All", "Call", "Text", "Video"].map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setFilter(type);
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TITLE */}

        </div>

        {/* TIMELINE LIST */}
        <div className="space-y-4">
          {filteredTimeline.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow p-4 rounded-lg"
            >

              {/* ICON (ONLY ADDED) */}
              <img
                src={
                  item.type === "Call"
                    ? callIcon
                    : item.type === "Video"
                    ? videoIcon
                    : textIcon
                }
                className="w-5 h-5 mr-3"
                alt="icon"
              />

              {}
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}