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

  const addOutlineField = () => {
    if (outline[outline.length - 1].trim() === "") return;
    setOutline([...outline, ""]);
  };

  const deleteOutline = (index: number) => {
    if (outline.length > 1) {
      setOutline(outline.filter((_, i) => i !== index));
    }
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(e.target.value);
  };

  const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," && keywordInput.trim()) {
      e.preventDefault();
      if (!keywords.includes(keywordInput.trim())) {
        setKeywords([...keywords, keywordInput.trim()]);
      }
      setKeywordInput("");
    }
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 mb-6">
        <h1 className="text-5xl font-bold text-gray-900">Generate Articles With AI</h1>
      </div>
      <h3 className="text-xl my-3 text-gray-700">Turn a title or an outline into a long and engaging article</h3>

      <div className="bg-white h-auto w-2/3 rounded-lg py-5 px-5 flex flex-col space-y-3 text-lg shadow-2xl">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-800">Select a Language:</label>
          <select
            className="bg-gray-200 py-2 px-3 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Your language</option>
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Russian">Russian</option>
          </select>
        </div>

        <div className="text-gray-800">Article Title</div>
        <input
          type="text"
          className="bg-gray-200 py-2 px-3 text-gray-900 w-full rounded"
          placeholder="Enter an appropriate title for the article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="text-gray-800">Focus Keywords <span className="text-gray-500">(Press comma to add)</span></div>
        <div className="bg-gray-200 py-2 px-3 text-gray-900 flex flex-wrap rounded">
          {keywords.map((keyword, index) => (
            <span key={index} className="bg-gray-300 text-black px-2 py-1 rounded-lg m-1 flex items-center">
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
            className="bg-gray-200 text-gray-900 flex-1 outline-none"
            placeholder="Type and press comma..."
            value={keywordInput}
            onChange={handleKeywordChange}
            onKeyDown={handleKeywordKeyDown}
          />
        </div>

        <div className="relative text-gray-800">
          Outline <span className="text-gray-500">(Minimum 3 subheadings)</span>
        </div>

        {outline.map((item, index) => (
          <div key={index} className="relative flex items-center space-x-2">
            <input
              type="text"
              className="bg-gray-200 py-2 px-3 text-gray-900 w-full rounded"
              placeholder={`Subheading ${index + 1}`}
              value={item}
              onChange={(e) => handleOutlineChange(index, e.target.value)}
            />
            <button
              onClick={addOutlineField}
              className="text-gray-900 hover:text-gray-700 text-lg font-light px-2"
            >
              +
            </button>
            {outline.length > 1 && (
              <button
                onClick={() => deleteOutline(index)}
                className="text-gray-900 hover:text-gray-700 text-base font-light px-2"
              >
                ✖
              </button>
            )}
          </div>
        ))}
      </div>
      
      <button type="submit" className="bg-gray-200 text-m my-5 py-3 px-4 rounded-sm hover:border hover:border-gray-500">
        Generate Article
      </button>
    </div>
  );
}