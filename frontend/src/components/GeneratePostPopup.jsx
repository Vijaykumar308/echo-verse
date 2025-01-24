import React from "react"
import { useState } from "react"
import { Dialog } from "@headlessui/react"

export default function GeneratePostPopup({
  isOpen,
  onClose,
  postContent,
  backgroundStyle,
  textColor,
}) {

  const [caption, setCaption] = useState("")

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 shadow-xl">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">Generate Post</Dialog.Title>
          <div className="mb-4">
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
              Caption
            </label>
            <textarea
              id="caption"
              rows={3}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Enter your caption here..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
            <div className="postPreview border rounded-lg p-4 overflow-hidden" style={backgroundStyle}>
              <div
                className="prose max-w-none"
                style={{ color: textColor }}
                dangerouslySetInnerHTML={{ __html: postContent }}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Here you would typically handle the post generation
                console.log("Generating post with caption:", caption)
                onClose()
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Generate
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

