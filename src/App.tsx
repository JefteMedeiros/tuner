import { useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

function App() {
  const [activeButton, setActiveButton] = useState<string | null>(null)
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({})
  const isAudioPlaying = useRef(false)

  const handleButtonClick = (buttonId: string) => {
    if (activeButton) {
      const activeAudio = audioRefs.current[activeButton]
      activeAudio.pause()
    }

    if (buttonId === activeButton && isAudioPlaying.current) {
      const audioElement = audioRefs.current[buttonId]
      audioElement.pause()
      isAudioPlaying.current = false
      setActiveButton(null)
    } else {
      const audioElement = audioRefs.current[buttonId]
      audioElement.currentTime = 0
      audioElement.play()
      isAudioPlaying.current = true
      setActiveButton(buttonId)
    }
  }

  return (
    <main className="flex flex-col h-screen w-full">
      <header className="flex items-center gap-4 p-4 bg-yellow-400">
        <img src="/guitar.png" className="h-12 w-12 lg:h-16 lg:w-16" alt="" />
        <h1 className="text-2xl lg:text-3xl">Afinador Flex</h1>
      </header>
      <main className="p-4 flex-1 bg-zinc-900">
        <div>
          <h2 className="text-3xl text-white">Afinador</h2>
          <p className="text-white">Afinador para instrumentos de cordas</p>
        </div>
        <section className="flex flex-col gap-2 p-4">
          <div className="flex items-center">
            <span className="mr-2 font-bold min-w-[32px] text-white">E:</span>
            <button
              className={`px-4 py-2 mr-2 rounded-md ${
                activeButton === "E2"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleButtonClick("E2")}
            >
              {activeButton === "E2" && isAudioPlaying.current ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </button>
            <audio
              src="/sounds/1.mp3"
              id="audio-E2"
              ref={(audio) =>
                (audioRefs.current["E2"] = audio as HTMLAudioElement)
              }
            ></audio>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold min-w-[32px] text-white">A:</span>
            <button
              className={`px-4 py-2 mr-2 rounded-md ${
                activeButton === "A"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleButtonClick("A")}
            >
              {activeButton === "A" && isAudioPlaying.current ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </button>
            <audio
              src="/sounds/2.mp3"
              id="audio-A"
              ref={(audio) =>
                (audioRefs.current["A"] = audio as HTMLAudioElement)
              }
            ></audio>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold min-w-[32px] text-white">D:</span>
            <button
              className={`px-4 py-2 mr-2 rounded-md ${
                activeButton === "D"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleButtonClick("D")}
            >
              {activeButton === "D" && isAudioPlaying.current ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </button>
            <audio
              src="/sounds/3.mp3"
              id="audio-D"
              ref={(audio) =>
                (audioRefs.current["D"] = audio as HTMLAudioElement)
              }
            ></audio>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold min-w-[32px] text-white">G:</span>
            <button
              className={`px-4 py-2 mr-2 rounded-md ${
                activeButton === "G"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleButtonClick("G")}
            >
              {activeButton === "G" && isAudioPlaying.current ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </button>
            <audio
              src="/sounds/4.mp3"
              id="audio-G"
              ref={(audio) =>
                (audioRefs.current["G"] = audio as HTMLAudioElement)
              }
            ></audio>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold min-w-[32px] text-white">B:</span>
            <button
              className={`px-4 py-2 mr-2 rounded-md ${
                activeButton === "B"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleButtonClick("B")}
            >
              {activeButton === "B" && isAudioPlaying.current ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </button>
            <audio
              src="/sounds/5.mp3"
              id="audio-B"
              ref={(audio) =>
                (audioRefs.current["B"] = audio as HTMLAudioElement)
              }
            ></audio>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold min-w-[32px] text-white">E:</span>
            <button
              className={`px-4 py-2 mr-2 rounded-md ${
                activeButton === "E6"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleButtonClick("E6")}
            >
              {activeButton === "E6" && isAudioPlaying.current ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </button>
            <audio
              src="/sounds/6.mp3"
              id="audio-E6"
              ref={(audio) =>
                (audioRefs.current["E6"] = audio as HTMLAudioElement)
              }
            ></audio>
          </div>
        </section>
      </main>
      <footer className="bg-yellow-300 p-2 font-bold text-center">
        &copy; {new Date().getFullYear()} Afinador Flex
      </footer>
    </main>
  )
}

export default App
