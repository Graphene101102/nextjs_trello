import { useState } from "react";

interface DropdownItemProps {
    title: string; 
    options: string[]; 
  }
  
  const DropdownItem: React.FC<DropdownItemProps> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);
 
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        <button onClick={handleClick} className="px-4 py-2 rounded-md bg-white hover:bg-gray-300">
          {title}
        </button>
        {isOpen && (
          <div className="absolute mt-2 z-10 w-auto right-0 bg-white shadow-md rounded-md">
            <ul className="p-2">
              {options.map((option) => (
                <li key={option}>
                  <a href="#">{option}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  export default DropdownItem