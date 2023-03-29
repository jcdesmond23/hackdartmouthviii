import { useState } from 'react';
import Caret from '../../public/caret.svg';

export default function Accordion({title, content}:{title: string, content: string}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
        <div className="bg-[#3B5BAD]/70 rounded-xl w-fit" style={{marginBottom: 10}}>
          <button
            className="flex items-center px-2 sm:px-4 py-2 sm:py-3 text-left"
            onClick={handleClick}
          >
            <Caret
              className={`w-3 sm:w-6 mr-2 sm:mr-4 text-[#EEE9D7] transition-transform transform ${
                isActive ? 'rotate-180' : ''
              }`}
            />
            <span className="font-medium text-[8px] sm:text-[23px] text-[#EEE9D7]">{title}</span>
          </button>
          <div className={`px-4 py-3 max-w-md ${isActive ? 'block' : 'hidden'}`}>
            <p className="text-[#EEE9D7] text-[8px] sm:text-base">{content}</p>
          </div>
        </div>
      );
}