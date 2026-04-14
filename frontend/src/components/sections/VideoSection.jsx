const VideoSection = () => {
  return (
    <section className="relative h-[400px]">

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white/80 p-6 rounded-full shadow-lg text-3xl">
          ▶
        </button>
      </div>

    </section>
  );
};

export default VideoSection;