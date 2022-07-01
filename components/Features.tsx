import {
  DocumentIcon,
  CogIcon,
  CubeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  LibraryIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Micro DAO",
    description:
      "Decentralized autonomous organization where a group of people governs.",
    icon: LibraryIcon,
  },
  {
    name: "KYC and Identity",
    description:
      "Security and safety for all members involved in the ecosystem.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Healthcare Emergency Funding",
    description:
      "New emergency funding structure to cover maximum out-of-pocket costs.",
    icon: ChartBarIcon,
  },
];

export default function Features() {
  return (
    <div className="relative py-16 bg-white sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold tracking-wider text-purple-900 uppercase">
          Blockchain Technology
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Rethinking Healthcare Funding.
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Healthcare costs are the number one cause of bankruptcy for American
          families. Save up an emergency fund to cover the maximum out-of-pocket
          costs with others.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-400 rounded-md shadow-lg">
                        <feature.icon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
