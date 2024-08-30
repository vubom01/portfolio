import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={toggleTheme}
      className={`
       relative w-16 h-8 flex items-center  cursor-pointer rounded-full p-1 ${
         resolvedTheme === 'dark' ? 'bg-teal-500' : 'bg-gray-900'
       }`}
    >
      <MoonIcon className="fill-white w-[15px] h-[15px]"></MoonIcon>
      <div
        id="toggleBtnTheme"
        className={` bg-white
        absolute  w-6 h-6 rounded-full shadow-customShadow-md ${
          resolvedTheme === 'dark'
            ? ' transition-transform translate-x-0'
            : ' transition-transform translate-x-8'
        }`}
      ></div>
      <SunIcon className="fill-white ml-auto w-[15px] h-[15px]"></SunIcon>
    </div>
  );
};

export default ThemeToggle;
