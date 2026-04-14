const Construction = ({ data }) => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Construction Updates
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {data?.map((item) => (
          <div key={item._id}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Construction;