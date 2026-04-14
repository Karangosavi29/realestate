const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-xl font-bold">Vighnaharta Infinity</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Overview</a>
          <a href="#" className="hover:text-yellow-500">Amenities</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Enquiry Now
        </button>

      </div>
    </div>
  );
};

export default Navbar;