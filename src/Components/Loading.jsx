import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-200"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Loading;
