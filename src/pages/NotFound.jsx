import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center gap-6">
        <div className="text-8xl font-black text-gray-200">404</div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
          <p className="text-gray-500 text-sm max-w-sm">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-light transition-colors"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}