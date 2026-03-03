import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple, FaGoogle } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-[url('/background.png')] bg-cover">
      {/* Left side */}
      <div className="w-1/2 px-12 flex flex-col">
        <div className="flex items-center gap-3 mb-6 ">
          <div className="w-6 h-6 rounded-4xl bg-white border-5 border-green-700"></div>
          <h1 className="text-2xl text-white font-bold mb-4 pt-2">aps</h1>
        </div>
        <h2 className="text-4xl w-110 text-white font-semibold mb-6 mt-15">
          Expert level Cybersecurity in{" "}
          <span className="text-teal-500">hours</span> not weeks.
        </h2>

        <ul className="space-y-2 text-white">
          <p className="text-2xl text-white  mb-4">What's included</p>
          <li>
            <span className="text-green-500">✓</span> Effortlessly spider and
            map targets to uncover hidden security flaws
          </li>
          <li>
            <span className="text-green-500">✓</span> Deliver high-quality,
            validated findings in hours, not weeks.
          </li>
          <li>
            <span className="text-green-500">✓</span> Generate professional,
            enterprise-grade security reports automatically.
          </li>
        </ul>
        <p className="mt-34 text-white ">
          <div>
            <span className="text-green-500">★</span> Trustpilot
          </div>
          <div>
            Rated 4.5/5.0{" "}
            <span className="text-gray-600"> (100+ reviews)</span>{" "}
          </div>
        </p>
      </div>

      {/* Right side */}
      <div className="w-1/2 p-12 flex flex-col justify-center ">
        <div className="w-110 h-125 p-12 flex flex-col justify-center bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-center">Sign up</h2>
          <p className="text-gray-600 mb-6 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Log in
            </span>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300  text-gray-700  border-gray-300 rounded "
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name *"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300  text-gray-700  border-gray-300 rounded "
            />
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300  text-gray-700  border-gray-300 rounded "
            />
            <input
              type="password"
              name="password"
              placeholder="Password (8+ characters) *"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700  border-gray-300 rounded"
            />
            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="h-4 w-4"
              />
              <span className="text-[12px]">
                I agree to Aps's{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Terms & Conditions
                </span>{" "}
                and acknowledge the{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </span>
            </label>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 rounded-3xl transition"
            >
              Create account
            </button>
            <div className="w-full max-w-md space-y-4">
              {/* Social Buttons Row */}
              <div className="flex gap-4">
                {/* Apple */}
                <button
                  className="flex-1 flex items-center justify-center 
          py-3 rounded-full bg-black text-white 
          hover:opacity-90 transition"
                >
                  <FaApple size={20} />
                </button>

                {/* Google */}
                <button
                  className="flex-1 flex items-center justify-center 
          py-3 rounded-full bg-gray-100 
          hover:bg-gray-200 transition"
                >
                  <FaGoogle size={20} className="text-red-500" />
                </button>

                {/* Meta */}
                <button
                  className="flex-1 flex items-center justify-center 
          py-3 rounded-full bg-[#4F6EF7] text-white 
          hover:bg-[#3f5ce0] transition"
                >
                  <SiMeta size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
