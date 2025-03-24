import Tabpanel from "@assets/Img/aboutsec.png";

const sections = [
  {
    title: "Who We Are",
    content:
      "At GenieLamp.ai, we believe in the magic of innovation. Our mission is to transform how businesses and customers interact by giving AI a face—a personalized, lifelike avatar that represents your brand, location, or vision. With cutting-edge technology and an unwavering commitment to excellence, we make AI approachable, interactive, and truly yours.",
  },
  {
    title: "What We Do",
    content:
      "We specialize in creating AI-powered assistants that don’t just respond—they connect. From seamless integrations with your existing systems to fully customizable avatars, GenieLamp.ai empowers businesses to deliver exceptional customer experiences. Our platform combines advanced AI, augmented reality (AR), and intuitive design to make every interaction memorable.",
  },
  {
    title: "Our Vision",
    content:
      "To bridge the gap between technology and humanity, creating AI solutions that are not only powerful but also personal.",
  },
];

function HomeSection6() {
  return (
    <div className="bg-white lg:px-24 px-4 gap-8 grid lg:grid-cols-10 items-start mt-12">

      <div className=" flex  lg:col-span-4  col-span-12 p-4 justify-center items-center py-8">
        <img src={Tabpanel} alt="About Section" className="w-full" />
      </div>
      <div className="flex flex-col lg:col-span-6 col-span-12  text-primary p-8 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="flex my-3 items-center text-3xl font-bold text-primary   gap-1">{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeSection6;
