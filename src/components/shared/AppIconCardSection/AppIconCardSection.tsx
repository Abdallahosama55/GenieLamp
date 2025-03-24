import AppButton from "../AppButton/AppButton";

// Define the type for a single card
interface Card {
  icon: string; // Path to the icon image
  title: string; // Title of the card
  description: string; // Description of the card
}

// Define the props for the AppIconCardSection component
interface AppIconCardSectionProps {
  title: string; // Title of the section
  cards: Card[]; // Array of card objects
  buttonText: string; // Text for the button
  IsButton?: boolean; // Optional flag to show/hide the button
  borderColor?: string; // Optional border color
  bgColor?: string; // Optional background color
  classNameCard?:string
}

// Define the component
function AppIconCardSection({
  title,
  cards,
  buttonText,
  IsButton,
  classNameCard,
  borderColor, // Optional border color
  bgColor, // Optional background color
}: AppIconCardSectionProps) {
  return (
    <div className="mx-4 flex flex-col gap-8 mt-12 lg:mx-24 font-segoe-ui">
      <h1 className="lg:text-4xl text-2xl font-[700] text-center">{title}</h1>
      <div
        className="rounded-xl lg:p-12 p-6"
        style={{
          backgroundColor: bgColor || "", // Apply background color if provided
          border: borderColor ? `1px solid ${borderColor}` : "", // Apply border if borderColor is provided
        }}
      >
        <div className={`grid lg:grid-cols-2 ${classNameCard} gap-8`}>
          {cards.map((card, index) => (
            <div key={index}>
              <div className="grid grid-cols-12 gap-2 items-start">
                <div className="  xl:col-span-1 col-span-2  ">
                  <img
                    src={card.icon}
                    className=""
                    alt={`icon-${index}`}
                  />
                </div>
                <div className=" xl:col-span-11 col-span-10">
                  <h2 className="text-primary font-bold">{card.title}</h2>
                  <p className="text-secondary">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {IsButton && (
          <div className="flex w-full justify-center mt-12 items-center">
            <AppButton Title={buttonText} className="py-3" />
          </div>
        )}
      </div>
    </div>
  );
}

export default AppIconCardSection;