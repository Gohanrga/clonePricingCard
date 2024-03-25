import PropTypes from "prop-types";

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="flex flex-col w-[350px] justify-between text-center p-7 border rounded-lg dark:bg-gray-800">
      <div className="mb-2">
        <h3 className="mb-4 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-500">{description}</p>
        <div>
          <span className="inline-block mr-2 text-4xl font-bold">{`$${price}`}</span>
          <span className=" text-gray-500">/month</span>
        </div>
        <ul role="list" className="mt-4 text-left">
          {features.map((feature) => (
            <li key={feature} className="flex mb-3">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#"
        className="block py-2 text-white bg-blue-600 rounded rounded-lg"
      >
        Get Started
      </a>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
};

export default PricingCard;
