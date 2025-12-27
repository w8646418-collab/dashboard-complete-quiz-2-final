"use client"

export default function ScheduleConfirmation({ isOpen, onClose, scheduledDate, scheduledTime }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-100 border border-gray-800 rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-primary bg-opacity-20 rounded-full mx-auto mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-white text-center mb-2">Post Scheduled Successfully!</h3>

        <p className="text-gray-400 text-center mb-6">Your post has been scheduled for:</p>

        <div className="bg-dark-200 border border-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Date</p>
              <p className="text-white font-semibold">{scheduledDate}</p>
            </div>
            <div className="w-px h-12 bg-gray-800"></div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Time</p>
              <p className="text-white font-semibold">{scheduledTime}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-primary hover:bg-green-600 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  )
}
