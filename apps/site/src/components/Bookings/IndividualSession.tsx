import Link from "next/link";

const IndividualSession = () => (
  <div className="flex flex-col items-center justify-center py-6">
    <h2 className="pb-3 text-center text-secondary md:text-3xl lg:text-4xl">
      Book an <br /> Individual Session!
    </h2>
    <Link href="/voice-studio/individual">
      <button>Reserve Now!</button>
    </Link>
  </div>
);

export default IndividualSession;
