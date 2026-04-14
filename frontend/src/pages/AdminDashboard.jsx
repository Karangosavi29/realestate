import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  // CONTENT
  const [content, setContent] = useState({});
  const [heroTitle, setHeroTitle] = useState("");
  const [aboutText, setAboutText] = useState("");

  // FAQ
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // AMENITIES
  const [amenities, setAmenities] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await API.get("/content");
      const faqRes = await API.get("/faqs");
      const amenityRes = await API.get("/amenities");

      setContent(res.data.data);
      setHeroTitle(res.data.data.hero?.title || "");
      setAboutText(res.data.data.about?.description || "");

      setFaqs(faqRes.data.data);
      setAmenities(amenityRes.data.data);
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  // HERO UPDATE
  const updateHero = async () => {
    await API.put("/content/hero", {
      data: {
        title: heroTitle,
        subtitle: "Updated from Admin",
      },
    });
    alert("Hero updated");
  };

  // ABOUT UPDATE
  const updateAbout = async () => {
    await API.put("/content/about", {
      data: { description: aboutText },
    });
    alert("About updated");
  };

  // FAQ
  const addFaq = async () => {
    if (!question || !answer) return alert("Fill all fields");

    await API.post("/faqs", { question, answer });

    setQuestion("");
    setAnswer("");
    fetchContent();
  };

  const deleteFaq = async (id) => {
    await API.delete(`/faqs/${id}`);
    fetchContent();
  };

  // AMENITIES
  const addAmenity = async () => {
    if (!title) return alert("Title required");

    await API.post("/amenities", { title, description });

    setTitle("");
    setDescription("");
    fetchContent();
  };

  const deleteAmenity = async (id) => {
    await API.delete(`/amenities/${id}`);
    fetchContent();
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin Dashboard
      </h1>

      {/* HERO */}
      <div className="bg-white p-6 shadow rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Edit Hero Section
        </h2>

        <input
          className="border p-2 w-full mb-4"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
        />

        <button
          onClick={updateHero}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update Hero
        </button>
      </div>

      {/* ABOUT */}
      <div className="bg-white p-6 shadow rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Edit About Section
        </h2>

        <textarea
          className="border p-2 w-full mb-4"
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
        />

        <button
          onClick={updateAbout}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update About
        </button>
      </div>

      {/* FAQ */}
      <div className="bg-white p-6 shadow rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Manage FAQs
        </h2>

        <input
          placeholder="Question"
          className="border p-2 w-full mb-2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <input
          placeholder="Answer"
          className="border p-2 w-full mb-2"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          onClick={addFaq}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Add FAQ
        </button>

        {faqs.map((faq) => (
          <div key={faq._id} className="border p-3 mb-2 flex justify-between">
            <div>
              <p className="font-semibold">{faq.question}</p>
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>

            <button
              onClick={() => deleteFaq(faq._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* AMENITIES */}
      <div className="bg-white p-6 shadow rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Manage Amenities
        </h2>

        <input
          placeholder="Title"
          className="border p-2 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          className="border p-2 w-full mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addAmenity}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Amenity
        </button>

        {amenities.map((item) => (
          <div key={item._id} className="border p-3 mb-2 flex justify-between">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>

            <button
              onClick={() => deleteAmenity(item._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;