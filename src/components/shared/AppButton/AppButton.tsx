import React, { ReactNode } from 'react';

interface AppButtonProps {
  Title?: ReactNode; // Make children optional
  className?: string;   // Make className optional
  icon?: any; // Icon is optional
  onClick?: () => void; // Make onClick optional
  buttonType?: 'outline' | 'solid'; // Add buttonType prop
}

const AppButton: React.FC<AppButtonProps> = ({ Title, className, onClick, icon, buttonType = 'solid' }) => {
  // Define base styles
  const baseStyles = 'px-4 py-2 flex items-center gap-2 text-[1rem] font-[600] transition duration-300 rounded-xl';

  // Define styles based on buttonType
  const buttonStyles = buttonType === 'outline'
    ? 'border border-accent hover:bg-accent  text-accent   hover:text-black'
    : 'bg-accent hover:bg-primary-meduim  text-primary  ';

  return (
    <button
      className={`${baseStyles} ${buttonStyles} ${className}`}
      onClick={onClick}
    >
      {Title}
      {icon && <img src={icon} alt="icon" />} {/* Render icon if provided */}
    </button>
  );
};

export default AppButton;