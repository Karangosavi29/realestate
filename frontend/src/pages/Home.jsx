import { useEffect, useState } from "react";
import API from "../services/api";

const Home = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const res = await API.get("/content");
    console.log(res.data.data);
    setContent(res.data.data);
  };

  return (
    <div>
      <h1>{content?.hero?.title || "Loading..."}</h1>
      <p>{content?.hero?.subtitle}</p>
    </div>
  );
};

export default Home;