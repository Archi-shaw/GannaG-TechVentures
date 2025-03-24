"use client";
import { useState } from "react";

export default function MyContent() {
  const [outline, setOutline] = useState([""]);
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [language, setLanguage] = useState("");

  const handleOutlineChange = (index: number, value: string) => {
    const newOutlines = [...outline];
    newOutlines[index] = value;
    setOutline(newOutlines);
  };

  const addOutlineField = (index: number) => {
    if (outline[index].trim() === "") return;
    setOutline([...outline, ""]);
  };

  const deleteOutline = (index: number) => {
    if (outline.length === 1) return;
    setOutline(outline.filter((_, i) => i !== index));
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(e.target.value);
  };

  const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," && keywordInput.trim()) {
      e.preventDefault();
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 mb-6">
        <h1 className="text-5xl font-bold">Generate Articles With AI</h1>
      </div>
      <div>
        <h3 className="text-xl">Turn a title or an outline into a long and engaging article</h3>
      </div>

      <div className="bg-gray-800 h-auto w-2/3 rounded-lg py-5 px-5 flex flex-col space-y-3 text-lg">
        {/* Language Selection */}
        <div className="flex flex-col">
          <label className="mb-2">Select an option:</label>
          <select
            className="bg-gray-700 py-2 px-3"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Your language</option>
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Russian">Russian</option>
          </select>
        </div>

        {/* Article Title */}
        <div>Article Title</div>
        <input
          type="text"
          className="bg-gray-700 py-2 px-3 text-white"
          placeholder="Enter an appropriate title for the article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Focus Keywords */}
        <div>Focus Keywords <span className="text-gray-400">(Press comma to add)</span></div>
        <div className="bg-gray-700 py-2 px-3 text-white flex flex-wrap rounded">
          {keywords.map((keyword, index) => (
            <span key={index} className="bg-white text-black px-2 py-1 rounded-lg m-1 flex items-center">
              {keyword}
              <button
                className="ml-2 text-gray-600 hover:text-gray-900 text-xs"
                onClick={() => removeKeyword(index)}
              >
                ✖
              </button>
            </span>
          ))}
          <input
            type="text"
            className="bg-gray-700 text-white flex-1 outline-none"
            placeholder="Type and press comma..."
            value={keywordInput}
            onChange={handleKeywordChange}
            onKeyDown={handleKeywordKeyDown}
          />
        </div>

        {/* Outline Fields */}
        <div className="relative">
          Outline <span className="text-gray-400">(Minimum 3 subheadings)</span>
        </div>

        {outline.map((item, index) => (
          <div key={index} className="relative flex items-center space-x-2">
            <div className="relative w-full">
              <input
                type="text"
                className="bg-gray-700 py-2 px-3 text-white w-full rounded"
                placeholder={`Subheading ${index + 1}`}
                value={item}
                onChange={(e) => handleOutlineChange(index, e.target.value)}
              />
              {/* Highlighted Text Effect */}
              {item.trim() && (
                <span className="absolute left-3 top-2 text-black bg-white rounded px-2 py-0.5">
                  {item}
                </span>
              )}
            </div>

            <button
              onClick={() => addOutlineField(index)}
              className="text-white hover:text-gray-300 text-lg font-light px-2"
            >
              +
            </button>
            
            <button
              onClick={() => deleteOutline(index)}
              className="text-white hover:text-gray-300 text-base font-light px-2"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
