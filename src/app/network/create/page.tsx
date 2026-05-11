"use client";

import { useState } from "react";

export default function CreatePage() {
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">
        Upload
      </h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg px-4 py-3 text-sm"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded-lg px-4 py-3 text-sm min-h-[120px]"
      />

      <label className="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer">
        <input
          type="file"
          accept="video/*,audio/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              setFileName(file.name);
              setPreviewUrl(URL.createObjectURL(file));
            }
          }}
        />

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">
            Upload video or audio
          </span>

          <span className="text-xs text-gray-500">
            MP4, MOV, MP3, WAV
          </span>

          {fileName && (
            <span className="text-xs text-black">
              {fileName}
            </span>
          )}
        </div>
      </label>

      {previewUrl && (
        <div className="flex flex-col gap-4">
          <video
            src={previewUrl}
            controls
            className="w-full rounded-xl"
          />

          <button
            className="w-fit px-4 py-2 rounded-lg bg-black text-white text-sm"
          >
            Publish
          </button>
        </div>
      )}
    </div>
  );
}
