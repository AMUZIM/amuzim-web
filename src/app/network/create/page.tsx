export default function CreatePage() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">
        Upload
      </h1>

      <label className="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer">
        <input
          type="file"
          accept="video/*,audio/*"
          className="hidden"
        />

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">
            Upload video or audio
          </span>

          <span className="text-xs text-gray-500">
            MP4, MOV, MP3, WAV
          </span>
        </div>
      </label>
    </div>
  );
}
