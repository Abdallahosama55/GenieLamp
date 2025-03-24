import React from 'react';

// Define the type for the props
interface AppBlobSectionProps {
  bgImage?: string; // URL for the background image
  icon?: string; // URL for the icon image
  title?: string; // Title text
  iconText?: any; // URL or component for the icon text
  description?: string; // Description text
}

const AppBlobSection: React.FC<AppBlobSectionProps> = ({ bgImage, iconText, icon, title, description }) => {
  return (
    <section className="min-h-[80vh] xl:min-h-[60vh] flex items-center justify-center"
    style={{ backgroundImage: `url(${bgImage}) `,backgroundSize:"cover" }}
    >
   

      {/** Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        {icon && <img src={icon} className="h-[200px] w-[200px] md:h-[300px] md:w-[300px]" alt="Section Icon" />}
        <div className="flex flex-col items-center relative justify-center gap-3 ">
{iconText && <img src={iconText} className='w-[300px] top-[-100px] absolute h-[300px]'/>}
          {title && <h1 className="text-2xl lg:w-[30%] md:text-4xl font-bold" >{title}</h1>}
          {description && (
            <p className="w-full md:w-[70%] lg:w-[50%] xl:w-[40%]">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppBlobSection;