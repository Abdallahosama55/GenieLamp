import img1 from "@assets/Img/section1.svg";
import gpt from "@assets/Img/section.webp";
import AppButton from '../../../../components/shared/AppButton/AppButton';
import { FaCircle } from 'react-icons/fa';

function HomeSection1() {
  const handleScheduleDemo = () => {
    // Add your button click logic here
    console.log('Schedule a Demo clicked');
  };

  return (
    <section className='relative overflow-hidden lg:min-h-[130vh] min-h-[70vh] py-6'>
      <div className="relative py-6 xl:mx-24 mx-4 p-6">
        {/* Image as background */}
        <div 
          className='absolute inset-0 w-full h-full rounded-xl bg-cover bg-center'
          style={{ backgroundImage: `url(${img1})` }}
        ></div>

        {/* Content div */}
        <div className='relative z-10 flex xl:pb-36 pb-16 flex-col gap-5 justify-center items-center text-center'>
          <span className='text-primary-light bg-accent-light px-3 rounded-2xl text-[.8rem] items-center py-1  font-semibold flex gap-2'>  <FaCircle className="text-[8px]  text-accent" /> {/* Dot icon */}
          Your Wish, Our Magic</span>
          <h1 className='text-primary lg:text-[36px] md:text-[26px] text-[22px]   font-[800] md:w-[70%] xl:leading-[1.5] leading-[1.8]'>
            Turn Your Business into a Magic Lamp, Putting a Genie in Every Customer’s Phone
          </h1>
          <span className='text-secondary  font-medium'>We give your AI a face</span>
       
            <div className=" flex gap-3 items-center justify-center">

            <AppButton  Title={"Schedule a Demo"} onClick={handleScheduleDemo} className='py-3'/>
            <AppButton  Title={"Meet your genie"} onClick={handleScheduleDemo} className='py-3  bg-accent-100' buttonType="outline"/>
            </div>
          
        </div>

        {/* GPT image positioned symmetrically with the content div */}
        <img 
          src={gpt} 
          className="absolute xl:top-[70%] top-[85%] xl:w-[60%] w-[80%] left-1/2 transform -translate-x-1/2" 
          alt="GPT" 
        />
      </div>
    </section>
  );
}

export default HomeSection1;