"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Collection of romantic dark background images
const romanticBackgrounds = [
  // New dark romantic cityscapes
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  
  // New dark romantic nature scenes
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  
  // New dark love and romance
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  
  // New dark surprise and mystery
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  
  // New ultra dark romantic love
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  
  // New dark love surprises
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  
  // New dark romantic backgrounds
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  
  // New ultra dark romantic scenes
  "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&crop=center&auto=format&q=80",
]

export default function CrushSurprise() {
  const [currentStep, setCurrentStep] = useState(-1) // Start at step -1 for the greeting
  const [showThanks, setShowThanks] = useState(false)
  const [currentBackground, setCurrentBackground] = useState(0)
  const [countdown, setCountdown] = useState(3)

  // Change background every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % romanticBackgrounds.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const handleGreetingResponse = (answer: string) => {
    if (answer === "yes") {
      setCurrentStep(0)
    } else {
      // Show thanks message and then exit automatically
      setShowThanks(true)
      // Exit page after 3 seconds
      setTimeout(() => {
        window.close()
        // Fallback if window.close() doesn't work
        if (typeof window !== 'undefined') {
          window.location.href = 'about:blank'
        }
      }, 3000)
    }
  }

  const handleInitialResponse = (answer: string) => {
    if (answer === "no") {
      setShowThanks(true)
      // Start countdown and reload page after 3 seconds
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval)
            window.location.reload()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      setCurrentStep(1)
    }
  }

  const handleSingleResponse = (answer: string) => {
    if (answer === "no") {
      // Exit directly when "No" is clicked on the single question
      window.close()
      // Fallback if window.close() doesn't work
      if (typeof window !== 'undefined') {
        window.location.href = 'about:blank'
      }
    } else {
      setCurrentStep(2)
    }
  }

  if (showThanks) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${romanticBackgrounds[currentBackground]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        <Card className="p-8 max-w-md mx-auto text-center relative z-10 glass-card border-0 shadow-2xl group">
          <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">Thanks for Information!</h2>
          <p className="text-gray-100 drop-shadow-md mb-4">Page will exit in:</p>
          <div className="text-4xl font-bold text-white drop-shadow-lg mb-4">{countdown}</div>
          <p className="text-sm text-gray-200 drop-shadow-sm">seconds</p>
        </Card>
      </div>
    )
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${romanticBackgrounds[currentBackground]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 transition-opacity duration-1000"></div>
      
      <Card className="p-8 max-w-md mx-auto text-center relative z-10 glass-card border-0 shadow-2xl group">
        {currentStep === -1 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">Hey! Srushtiii can I ask something.</h1>
            <p className="text-xl text-gray-100 drop-shadow-md">We'd love to get to know you better!</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleGreetingResponse("yes")} className="px-8 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300">
                Yes
              </Button>
              <Button variant="outline" onClick={() => handleGreetingResponse("no")} className="px-8 btn-glass-outline">
                No
              </Button>
            </div>
          </div>
        )}

        {currentStep === 0 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">Can we ask you some questions?</h1>
            <p className="text-xl text-gray-100 drop-shadow-md">We'd love to get to know you better!</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleInitialResponse("yes")} className="px-8 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300">
                Yes
              </Button>
              <Button variant="outline" onClick={() => handleInitialResponse("no")} className="px-8 btn-glass-outline">
                No
              </Button>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">Truly Response...</h1>
            <p className="text-xl text-gray-100 drop-shadow-md">Are you single?</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleSingleResponse("yes")} className="px-8 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300">
                Yes
              </Button>
              <Button variant="outline" onClick={() => handleSingleResponse("no")} className="px-8 btn-glass-outline">
                No
              </Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">One more thing...</h2>
            <p className="text-xl text-gray-100 drop-shadow-md">Would you like to go out with me?</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setCurrentStep(3)} className="px-8 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300">
                Yes
              </Button>
              <Button variant="outline" onClick={() => {
                // Exit directly when "No" is clicked on the final question
                window.close()
                // Fallback if window.close() doesn't work
                if (typeof window !== 'undefined') {
                  window.location.href = 'about:blank'
                }
              }} className="px-8 btn-glass-outline">
                No
              </Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">Let's Connect!</h2>
            <p className="text-xl text-gray-100 drop-shadow-md">If you want to talk to me, here's my WhatsApp number:</p>
            
            {/* Visible WhatsApp number - now properly shown */}
            <div className="text-center">
              <a 
                href="https://wa.me/918294341139?text=Hi! I'd like to talk to you." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-3xl font-bold text-green-400 hover:text-green-300 transition-colors duration-300 cursor-pointer border-2 border-green-400/30 rounded-lg px-6 py-3 hover:border-green-300/50 hover:bg-green-400/10"
              >
                8294***1139
              </a>
              <p className="text-sm text-gray-300 mt-2">Click the number to open WhatsApp directly!</p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setCurrentStep(4)} className="px-8 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300">
                Continue
              </Button>
              <Button onClick={() => window.close()} className="px-8 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                Close
              </Button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">Schedule Our Meeting!</h2>
            <p className="text-xl text-gray-100 drop-shadow-md">Please fill in the details below:</p>
            
            <form onSubmit={(e) => {
              e.preventDefault()
              const meetingTime = e.currentTarget.meetingTime.value
              const meetingPlace = e.currentTarget.meetingPlace.value
              const suggestions = e.currentTarget.suggestions.value
              const message = `Hi! I'd like to meet you.\n\nMeeting Time: ${meetingTime}\nMeeting Place: ${meetingPlace}\nSuggestions: ${suggestions}`
              const whatsappUrl = `https://wa.me/918294341139?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, '_blank')
            }} className="space-y-4">
              
              {/* Meeting Time Input */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">Meet Time:</label>
                <input
                  type="text"
                  name="meetingTime"
                  placeholder="e.g., In Lunch time ,In Library , In Back Canteen etc."
                  className="w-full p-3 text-gray-800 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Meeting Place Input */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">Meet Place:</label>
                <input
                  type="text"
                  name="meetingPlace"
                  placeholder="e.g., Tea Point, lake , etc."
                  className="w-full p-3 text-gray-800 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Suggestions Input */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">just come alone Any Suggestions:</label>
                <textarea
                  name="suggestions"
                  placeholder="just come alone and don't take anyone with you"
                  className="w-full p-3 text-gray-800 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  rows={3}
                />
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button type="submit" className="px-8 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  Send to WhatsApp
                </Button>
                <Button type="button" onClick={() => setCurrentStep(3)} className="px-8 btn-glass-outline">
                  Back
                </Button>
              </div>
            </form>
          </div>
        )}
      </Card>
    </div>
  )
}
