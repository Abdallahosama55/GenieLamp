import { useForm } from "react-hook-form";
import AppButton from "../../components/shared/AppButton/AppButton";
import xt from "@assets/icons/xt.svg";
import inst from "@assets/icons/Instagram.svg";
import face from "@assets/icons/facebook.svg";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const formFields: {
  id: keyof FormData;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
  pattern?: RegExp;
}[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "Enter your full name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^\S+@\S+\.\S+$/,
    placeholder: "Enter your email address",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    required: false,
    placeholder: "Enter your phone number (optional)",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Write your message here...",
  },
];

const ContactUsSections = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data Submitted:", data);
    alert("Thank you for contacting us!");
  };

  const renderError = (field: keyof FormData) =>
    errors[field] && (
      <p className="text-red-500 text-xs">{errors[field]?.message}</p>
    );

  return (
    <div className="lg:mx-32 mx-4 my-12 mb-16 p-0 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg rounded-xl border-[#E7E7E6] border-[1px]">
      {/* Left Section (Contact Info) */}
      <div className="col-span-1 lg:px-12 px-12 py-6 rounded-s-xl flex flex-col gap-2 h-full w-full bg-[#FDF7EC]">
        <div className="text-black h-full  flex-grow">
          <h2 className=" font-[700] text-[1.8rem]">
            Let’s Bring AI To Life Together
          </h2>
          <p className="text-sm py-4  font-sans lg:leading-[25px] font-[300]">
            At Genielamp, we specialize in AI-powered lifelike avatars that
            create unforgettable customer experiences. Whether you have a
            question, want a demo, or need a custom AI solution—we’re here to
            help!
          </p>
        </div>

        <div>
          <h4 className="gap-4 flex">
            <span className="py-0 leading-0 my-0 font-bold mt-1 text-[333333]">
              ___
            </span>
            Connect with us:
          </h4>
          <div className="flex gap-2">
            <img src={xt} alt="twitter_X" className="w-[24px]" />
            <img src={inst} alt="instagram" className="w-[24px]" />
            <img src={face} alt="facebook" className="w-[24px]" />
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="col-span-2 py-6 px-16">
        <div className="mx-auto">
          <h2 className="text-2xl text-start font-bold">Get in touch</h2>
          <p className="text-[#716E67] mb-6">
            Fill out the form below, and our team will get back to you as soon
            as possible.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {formFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    rows={4} 
                    {...register(field.id, {
                      required: field.required
                        ? `${field.label} is required`
                        : false,
                      pattern: field.pattern,
                    })}
                    className={`mt-1 block w-full text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-none ${
                      errors[field.id] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    {...register(field.id, {
                      required: field.required
                        ? `${field.label} is required`
                        : false,
                      pattern: field.pattern,
                    })}
                    className={`mt-1 block text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors[field.id] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                )}
                {renderError(field.id)}
              </div>
            ))}
            <div>
              <AppButton Title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSections;
