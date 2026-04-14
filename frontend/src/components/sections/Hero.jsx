const Hero = ({ data }) => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {data?.title || "Luxury Living"}
        </h1>

        <p className="text-lg md:text-xl mb-6">
          {data?.subtitle || "Experience premium lifestyle in Mumbai"}
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded text-black font-semibold">
          Book Site Visit
        </button>

      </div>
    </section>
  );
};

export default Hero;