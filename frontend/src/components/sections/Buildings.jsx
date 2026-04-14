const Buildings = () => {
  const buildings = [
    {
      id: 1,
      title: "Newly Launched - Vighnaharta Enclave",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    },
    {
      id: 2,
      title: "Premium Towers",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    },
    {
      id: 3,
      title: "Luxury Heights",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-100 to-green-200">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore More Buildings
      </h2>

      <div className="flex overflow-x-auto gap-6 px-6">
        {buildings.map((item) => (
          <div
            key={item.id}
            className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img src={item.image} className="h-60 w-full object-cover" />

            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Buildings;