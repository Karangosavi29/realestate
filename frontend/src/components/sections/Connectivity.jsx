const Connectivity = ({ data }) => {
  return (
    <section className="py-20 px-6 bg-gray-100">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Nearby Connectivity
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {data?.points?.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.distance}</p>
            </div>
          )) || (
            <>
              <div className="bg-white p-6 rounded shadow">
                <h3>Railway Station</h3>
                <p>5 mins</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3>School</h3>
                <p>10 mins</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3>Hospital</h3>
                <p>8 mins</p>
              </div>
            </>
          )}

        </div>

      </div>

    </section>
  );
};

export default Connectivity;