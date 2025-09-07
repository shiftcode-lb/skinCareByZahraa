import React from 'react'

const WcCards = () => {
  return (
   <div className="tilt-card w-80 h-96 bg-gradient-to-br from-purple-700 to-pink-500 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 ease-out hover:scale-100">
      <div className="glow opacity-0 transition-opacity duration-300"></div>
      <div className="p-6 flex flex-col h-full justify-between relative z-10">
        {/* Card Header */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Quantum Leap</h2>
          <p className="text-gray-200">
            Experience the future of technology with our revolutionary quantum computing solution.
          </p>
        </div>
        {/* Card Footer */}
        <div className="space-y-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <div className="text-xs text-gray-300 uppercase">Processing Power</div>
            <div className="text-2xl font-bold text-white">100 Qubits</div>
          </div>
          <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold transform transition hover:scale-100 active:scale-100">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default WcCards
