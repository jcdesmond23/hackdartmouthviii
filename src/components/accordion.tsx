import { useState } from 'react';
import Caret from '../../public/caret.svg';

export default function Accordion({title, content}:{title: string, content: string}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
        <div className="bg-[#3B5BAD]/70 rounded-xl">
          <button
            className="flex justify-between items-center w-full px-4 py-3 text-left"
            onClick={handleClick}
          >
            <Caret
              className={`w-6 mr-4 text-[#EEE9D7] transition-transform transform ${
                isActive ? 'rotate-180' : ''
              }`}
            />
            <span className="font-medium text-[23px] text-[#EEE9D7]">{title}</span>
          </button>
          <div className={`px-4 py-3 ${isActive ? 'block' : 'hidden'}`}>
            <p className="text-[#EEE9D7]">{content}</p>
          </div>
        </div>
      );
}