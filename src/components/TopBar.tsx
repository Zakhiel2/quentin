import React, { useState, useEffect } from 'react';
import { Terminal, Wifi, Volume2, Battery, Maximize2 } from 'lucide-react';

interface MinimizedWindow {
  id: string;
  title: string;
  icon: React.ReactNode;
  onRestore: () => void;
}

interface TopBarProps {
  minimizedWindows: MinimizedWindow[];
}

const TopBar: React.FC<TopBarProps> = ({ minimizedWindows }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#24283b] text-[#a9b1d6] h-8 flex items-center justify-between border-b border-[#414868] z-50 px-2">
      <div className="flex items-center gap-2 overflow-x-auto flex-1 min-w-0">
        <span className="font-bold px-3 py-1 whitespace-nowrap">Quentin L.</span>
        {minimizedWindows.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto flex-1 min-w-0 scrollbar-none">
            {minimizedWindows.map((window) => (
              <button
                key={window.id}
                onClick={window.onRestore}
                className="flex items-center gap-2 px-3 py-1 hover:bg-[#414868] rounded transition-colors text-sm whitespace-nowrap"
              >
                {window.icon}
                <span className="hidden sm:inline">{window.title}</span>
                <Maximize2 size={12} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 sm:gap-6 ml-2 text-sm">
        <div className="hidden sm:flex items-center gap-4">
          <Wifi size={14} className="text-[#9ece6a]" />
          <Volume2 size={14} />
          <Battery size={14} className="text-[#e0af68]" />
        </div>
        <button className="px-2 py-1 hover:bg-[#414868] rounded transition-colors whitespace-nowrap">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </button>
      </div>
    </div>
  );
};

export default TopBar;