import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FriendCard from "../components/FriendCard";
import friends from "../data/friends.json";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold">
          Friends to keep close in your life
        </h1>
        
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend,and nurture the relationships that matter most.
        </p>


        <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
          + Add a Friend
        </button>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 px-10">
        <div className="shadow p-6 text-center rounded">
          <h2 className="text-xl font-bold">10</h2>
          <p>Total Friends</p>
        </div>
        <div className="shadow p-6 text-center rounded">
          <h2>3</h2><p>On Track</p>
        </div>
        <div className="shadow p-6 text-center rounded">
          <h2>6</h2><p>Need Attention</p>
        </div>
        <div className="shadow p-6 text-center rounded">
          <h2>12</h2><p>Interactions</p>
        </div>
      </div>

      {/* Friends */}
      <div className="px-10 mt-10">
        <h2 className="mb-5 font-semibold">Your Friends</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {friends.map(f => <FriendCard key={f.id} friend={f} />)}
        </div>
      </div>

      <Footer />
    </>
  );
}