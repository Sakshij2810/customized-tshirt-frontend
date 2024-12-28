import React from "react";

import CustomeButton from "./CustomeButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomeButton
            type="outline"
            title="Asking AI..."
            customeStyles="text-xs"
          />
        ) : (
          <>
            <CustomeButton
              type="outline"
              title="AI Logo"
              customeStyles="text-xs"
              handleClick={() => handleSubmit("logo")}
            />
            <CustomeButton
              type="filled"
              title="AI Full"
              customeStyles="text-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
