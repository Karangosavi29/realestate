import { useEffect, useState } from "react";
import API from "../services/api.js";

const AdminDashboard = () => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const res = await API.get("/content");
    setHero(res.data.data.hero || {});
  };

  const updateHero = async () => {
    await API.put("/content/hero", { data: hero });
    alert("Updated successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Hero Section</h2>

      <input
        placeholder="Title"
        value={hero.title || ""}
        onChange={(e) =>
          setHero({ ...hero, title: e.target.value })
        }
      />
      <br /><br />

      <input
        placeholder="Subtitle"
        value={hero.subtitle || ""}
        onChange={(e) =>
          setHero({ ...hero, subtitle: e.target.value })
        }
      />
      <br /><br />

      <button onClick={updateHero}>Save</button>
    </div>
  );
};

export default AdminDashboard;