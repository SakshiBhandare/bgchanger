import { useState } from "react"


function App() {
  const [color, setColor] = useState("violet");

  return (
    <>
      <div className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("violet")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "violet" }}>
              Violet
            </button>
            <button onClick={() => setColor("indigo")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "indigo" }}>
              Indigo
            </button>
            <button onClick={() => setColor("blue")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}>
              Blue
            </button>
            <button onClick={() => setColor("green")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}>
              Green
            </button>
            <button onClick={() => setColor("yellow")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}>
              Yellow
            </button>
            <button onClick={() => setColor("orange")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "orange" }}>
              Orange
            </button>
            <button onClick={() => setColor("red")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}>
              Red
            </button>
            <button onClick={() => setColor("olive")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "olive" }}>
              Olive
            </button>
            <button onClick={() => setColor("brown")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "brown" }}>
              Brown
            </button>
            <button onClick={() => setColor("black")}
              className="text-white outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "black" }}>
              Black
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
