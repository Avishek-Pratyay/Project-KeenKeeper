export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative w-14 h-14">
        <div className="w-14 h-14 rounded-full border-4 border-gray-200"></div>
        <div className="w-14 h-14 rounded-full border-4 border-primary border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <p className="text-gray-500 text-sm font-medium">Loading your friends...</p>
    </div>
  )
}