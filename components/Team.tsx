const people = [
  {
    name: "Anthony Lee",
    role: "Co-Founder",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/604ecd5312afe14e11219658/1615777826024-LFWDYAZVL3LJKEDWVDKT/anthony.jpg?format=1000w",
    bio: "Anthony is a mission-driven CFO and Software Engineer who is passionate about creating products that will make a positive impact.  He studied Computer Science at Georgia Tech.",
  },
  {
    name: "Chey Lee",
    role: "Co-Founder",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/604ecd5312afe14e11219658/1615777851386-T9L7LKW5UXZHD75FWF2D/chey.jpg?format=1000w",
    bio: "Chey Lee is a strengths coach and photographer whose greatest joy is watching others pursue their dreams and explore their potential.",
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover rounded-lg shadow-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-purple-900">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
