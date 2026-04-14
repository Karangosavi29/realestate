import { useEffect, useState } from "react";
import API from "../services/api";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Amenities from "../components/sections/Amenities";
import FAQ from "../components/sections/FAQ";
import Construction from "../components/sections/Construction";
import Navbar from "../components/Navbar";
import Buildings from "../components/sections/Buildings";
import VideoSection from "../components/sections/VideoSection";
import Connectivity from "../components/sections/Connectivity";
const Home = () => {
  const [content, setContent] = useState({});
  const [faqs, setFaqs] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [construction, setConstruction] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 DEMO DATA (fallback)
  const demoContent = {
    hero: {
      title: "Vighnaharta Infinity",
      subtitle: "Luxury Living in Mumbai",
    },
    about: {
      description:
        "Premium residential project offering world-class amenities and modern lifestyle.",
    },
  };

  const demoFaqs = [
    { _id: 1, question: "Possession date?", answer: "Dec 2026" },
    { _id: 2, question: "Parking available?", answer: "Yes" },
  ];

  const demoAmenities = [
    { _id: 1, title: "Gym", description: "Modern fitness center" },
    { _id: 2, title: "Pool", description: "Luxury swimming pool" },
  ];

  const demoConstruction = [
    { _id: 1, title: "Foundation Done", date: "Jan 2025", progress: 40 },
  ];

  const fetchData = async () => {
    try {
      const contentRes = await API.get("/content");
      const faqRes = await API.get("/faqs");
      const amenityRes = await API.get("/amenities");
      const constructionRes = await API.get("/construction");

      setContent(contentRes.data.data);
      setFaqs(faqRes.data.data);
      setAmenities(amenityRes.data.data);
      setConstruction(constructionRes.data.data);
    } catch (error) {
      console.log("Using demo data due to API error");
    }
  };

  return (
    <div className="bg-white text-gray-800">

      <Navbar />

      {/* HERO */}
      <Hero data={content.hero || demoContent.hero} />

      <div className="space-y-20">

        {/* ABOUT */}
        <About data={content.about || demoContent.about} />

        {/* AMENITIES */}
        <Amenities data={amenities.length ? amenities : demoAmenities} />

        {/* BUILDINGS */}
        <Buildings />

        {/* VIDEO */}
        <VideoSection />

        {/* CONSTRUCTION */}
        <Construction
          data={construction.length ? construction : demoConstruction}
        />

        {/* FAQ */}
        <FAQ data={faqs.length ? faqs : demoFaqs} />
        
        {/* CONNECTIVITY */}
        <Connectivity data={content.connectivity} />
      </div>

    </div>
  );
};

export default Home;