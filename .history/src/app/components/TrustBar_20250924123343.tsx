import { FaAmazon, FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-gray-600">
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <FaAmazon className="text-2xl" />
          <span className="hidden sm:inline">Amazon</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <FaCcVisa className="text-2xl" />
          <span className="hidden sm:inline">Visa</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <FaCcPaypal className="text-2xl" />
          <span className="hidden sm:inline">PayPal</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <FaCcMastercard className="text-2xl" />
          <span className="hidden sm:inline">Mastercard</span>
        </div>
      </div>
    </section>
  );
}
