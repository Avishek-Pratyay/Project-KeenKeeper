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

  return (
    <>
      <Navbar />

      <div className="p-10 grid md:grid-cols-2 gap-6">

        {/* LEFT */}
        <div className="shadow p-6 text-center">
          <img src={friend.picture} className="w-20 mx-auto rounded-full" />
          <h2 className="font-bold mt-3">{friend.name}</h2>
          <p>{friend.bio}</p>

          <div className="mt-4 space-y-2">
            <button className="w-full border py-2">Snooze</button>
            <button className="w-full border py-2">Archive</button>
            <button className="w-full border py-2 text-red-500">Delete</button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="grid grid-cols-3 gap-4">
            <div className="shadow p-4 text-center">{friend.days_since_contact}</div>
            <div className="shadow p-4 text-center">{friend.goal}</div>
            <div className="shadow p-4 text-center">{friend.next_due_date}</div>
          </div>

          <div className="mt-6 shadow p-4">
            <button onClick={() => handle("Call")} className="mr-3">📞</button>
            <button onClick={() => handle("Text")} className="mr-3">💬</button>
            <button onClick={() => handle("Video")}>🎥</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}