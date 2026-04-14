const Amenities = ({ data }) => {
  return (
    <section className="py-20 bg-[#e6f4f1]">

      <h2 className="text-3xl font-bold text-center mb-10">
        Amenities
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {data?.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="text-4xl">{item.icon}</div>

            <h3 className="text-xl font-semibold mt-4">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Amenities;