import { useParams } from "react-router-dom";
import friends from "../data/friends.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import toast from "react-hot-toast";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find(f => f.id == id);
  const { addEntry } = useContext(TimelineContext);

  const handle = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added`);
  };

  // ✅ STATUS COLOR FIX
  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-red-100 text-red-600";
    if (status === "almost due") return "bg-yellow-100 text-yellow-600";
    if (status === "on-track") return "bg-green-100 text-green-600";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-10">
        <h1 className="text-lg font-semibold mb-6">Friend Details</h1>

        <div className="grid grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-4">

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <img
                src={friend.picture}
                className="w-20 h-20 mx-auto rounded-full mb-3"
              />

              <h2 className="font-semibold text-lg">{friend.name}</h2>

              {/* ✅ STATUS COLOR APPLIED */}
              <span
                className={`text-xs px-3 py-1 rounded-full inline-block mt-1 ${getStatusColor(friend.status)}`}
              >
                {friend.status}
              </span>

              <p className="text-xs text-gray-500 mt-2">
                {friend.tags?.join(", ")}
              </p>

              <p className="text-sm text-gray-600 mt-3 italic">
                {friend.bio}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                {friend.email}
              </p>
            </div>

            <button className="w-full bg-white border rounded-lg py-2 text-sm hover:bg-gray-50">
              ⏰ Snooze 2 Weeks
            </button>

            <button className="w-full bg-white border rounded-lg py-2 text-sm hover:bg-gray-50">
              📦 Archive
            </button>

            <button className="w-full bg-white border rounded-lg py-2 text-sm text-red-500 hover:bg-red-50">
              🗑️ Delete
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-2 space-y-5">

            {/* STATS CARDS */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <h2 className="text-xl font-bold">
                  {friend.days_since_contact}
                </h2>
                <p className="text-xs text-gray-500">
                  Days Since Contact
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-4 text-center">
                <h2 className="text-xl font-bold">
                  {friend.goal}
                </h2>
                <p className="text-xs text-gray-500">
                  Goal (Days)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-4 text-center">
                <h2 className="text-sm font-semibold">
                  {friend.next_due_date}
                </h2>
                <p className="text-xs text-gray-500">
                  Next Due Date
                </p>
              </div>
            </div>

            {/* RELATIONSHIP GOAL */}
            <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">
                  Relationship Goal
                </p>
                <p className="text-sm font-medium">
                  Connect every {friend.goal} days
                </p>
              </div>

              <button className="border px-3 py-1 rounded text-xs hover:bg-gray-100">
                Edit
              </button>
            </div>

            {/* QUICK CHECK-IN */}
            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-xs text-gray-500 mb-4">
                Quick Check-In
              </p>

              <div className="grid grid-cols-3 gap-4">

                <button
                  onClick={() => handle("Call")}
                  className="bg-gray-100 hover:bg-gray-200 py-3 rounded-lg flex flex-col items-center"
                >
                  <span className="text-xl">📞</span>
                  <span className="text-xs mt-1">Call</span>
                </button>

                <button
                  onClick={() => handle("Text")}
                  className="bg-gray-100 hover:bg-gray-200 py-3 rounded-lg flex flex-col items-center"
                >
                  <span className="text-xl">💬</span>
                  <span className="text-xs mt-1">Text</span>
                </button>

                <button
                  onClick={() => handle("Video")}
                  className="bg-gray-100 hover:bg-gray-200 py-3 rounded-lg flex flex-col items-center"
                >
                  <span className="text-xl">🎥</span>
                  <span className="text-xs mt-1">Video</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}