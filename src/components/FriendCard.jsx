import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {
  const color =
    friend.status === "overdue"
      ? "bg-red-100 text-red-600"
      : friend.status === "almost due"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600";

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="shadow p-4 rounded text-center">
        <img src={friend.picture} className="w-14 h-14 rounded-full mx-auto" />

        <h3 className="mt-2 font-semibold">{friend.name}</h3>
        <p className="text-xs text-gray-400">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-green-200 px-2 rounded">
              {tag}
            </span>
          ))}
        </div>

        <span className={`mt-2 inline-block px-3 py-1 text-xs rounded ${color}`}>
          {friend.status}
        </span>
      </div>
    </Link>
  );
}