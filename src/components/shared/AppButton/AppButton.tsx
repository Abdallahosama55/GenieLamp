import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppButtonProps {
  Title?: ReactNode;
  className?: string;
  icon?: any;
  navPath?: string;
  onClick?: () => void;
  buttonType?: 'outline' | 'solid';
  scrollToTop?: boolean; // New prop to enable scroll-to-top behavior
}

const AppButton: React.FC<AppButtonProps> = ({
  Title,
  className,
  navPath,
  onClick,
  icon,
  buttonType = 'solid',
 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (Title === 'Schedule a Demo') {
      navigate('/Contactus');
      window.scrollTo(0, 0); //    
    } else if (navPath) {
      navigate(navPath);
      window.scrollTo(0, 0); //  
    }
  
    if (onClick) {
      onClick();
    }
  };
  

  const baseStyles = 'px-4 py-2 flex items-center gap-2 text-[1rem] font-[600] transition duration-300 rounded-xl';
  const buttonStyles =
    buttonType === 'outline'
      ? 'border border-accent hover:bg-accent text-accent hover:text-black'
      : 'bg-accent hover:bg-primary-meduim text-primary';

  return (
    <button className={`${baseStyles} ${buttonStyles} ${className}`} onClick={handleClick}>
      {Title}
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default AppButton;