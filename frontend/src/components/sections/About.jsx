const About = ({ data }) => {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Project Overview
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto">
          {data?.description ||
            "Vighnaharta Infinity offers a luxurious lifestyle with modern amenities, prime location, and world-class infrastructure designed for comfortable living."}
        </p>

      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">

        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold">2 & 3 BHK</h3>
          <p className="text-gray-500 mt-2">Spacious Apartments</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold">Prime Location</h3>
          <p className="text-gray-500 mt-2">Near City Center</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold">Modern Amenities</h3>
          <p className="text-gray-500 mt-2">Gym, Pool & More</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold">24/7 Security</h3>
          <p className="text-gray-500 mt-2">Safe & Secure Living</p>
        </div>

      </div>

    </section>
  );
};

export default About;