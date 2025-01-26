import React, { useState, useRef, useEffect } from "react"
import { HexColorPicker } from "react-colorful"
import { Popover } from "@headlessui/react"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type, PaintBucket } from "lucide-react"
import GeneratePostPopup from "./GeneratePostPopup"

export default function PostEditor() {
  const [bgColor, setBgColor] = useState("#ffffff")
  const [textColor, setTextColor] = useState("#000000")
  const [isGradient, setIsGradient] = useState(false)
  const [gradientColor, setGradientColor] = useState("#4a90e2")
  const [gradientAngle, setGradientAngle] = useState(45)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [postContent, setPostContent] = useState("")
  const editorRef = useRef(null)

  const applyFormat = (command) => {
    document.execCommand(command, false, undefined)
  }

  const handleBgColorChange = (color) => {
    setBgColor(color)
  }

  const handleGradientToggle = () => {
    setIsGradient(!isGradient)
  }

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus()
      if (editorRef.current.innerHTML.trim() === "") {
        editorRef.current.innerHTML = "<p>Start typing your post here...</p>"
      }
      const handleInput = () => {
        if (editorRef.current) {
          setPostContent(editorRef.current.innerHTML)
        }
      }
      editorRef.current.addEventListener("input", handleInput)
      return () => {
        editorRef.current?.removeEventListener("input", handleInput)
      }
    }
  }, [])

  const backgroundStyle = {
    background: isGradient
      ? `linear-gradient(${gradientAngle}deg, ${bgColor}, ${gradientColor})`
      : `linear-gradient(0deg, ${bgColor}, ${bgColor})`,
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="flex items-center space-x-2 bg-white shadow rounded-lg p-2">
        <button onClick={() => applyFormat("bold")} className="p-2 hover:bg-gray-100 rounded">
          <Bold size={20} />
        </button>
        <button onClick={() => applyFormat("italic")} className="p-2 hover:bg-gray-100 rounded">
          <Italic size={20} />
        </button>
        <button onClick={() => applyFormat("underline")} className="p-2 hover:bg-gray-100 rounded">
          <Underline size={20} />
        </button>
        <button onClick={() => applyFormat("justifyLeft")} className="p-2 hover:bg-gray-100 rounded">
          <AlignLeft size={20} />
        </button>
        <button onClick={() => applyFormat("justifyCenter")} className="p-2 hover:bg-gray-100 rounded">
          <AlignCenter size={20} />
        </button>
        <button onClick={() => applyFormat("justifyRight")} className="p-2 hover:bg-gray-100 rounded">
          <AlignRight size={20} />
        </button>
        <Popover className="relative">
          <Popover.Button className="p-2 hover:bg-gray-100 rounded">
            <Type size={20} />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 mt-2">
            <HexColorPicker color={textColor} onChange={setTextColor} />
          </Popover.Panel>
        </Popover>
        <Popover className="relative">
          <Popover.Button className="p-2 hover:bg-gray-100 rounded">
            <PaintBucket size={20} />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 mt-2">
            <div className="bg-white shadow-lg rounded-lg p-4 space-y-4">
              <HexColorPicker color={bgColor} onChange={handleBgColorChange} />
              <div className="flex items-center space-x-2">
                <input type="checkbox" checked={isGradient} onChange={handleGradientToggle} className="rounded" />
                <span>Use Gradient</span>
              </div>
              {isGradient && (
                <>
                  <HexColorPicker color={gradientColor} onChange={setGradientColor} />
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={gradientAngle}
                    onChange={(e) => setGradientAngle(Number.parseInt(e.target.value))}
                    className="w-full"
                  />
                </>
              )}
            </div>
          </Popover.Panel>
        </Popover>
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[300px] p-4 rounded-lg shadow-lg outline-none"
        style={{ ...backgroundStyle, color: textColor }}
      />
      <button
        onClick={() => setIsPopupOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Generate Post
      </button>

      <GeneratePostPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        postContent={postContent}
        backgroundStyle={backgroundStyle}
        textColor={textColor}
      />
    </div>
  )
}

