import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useBlogPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4000/posts");
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, isError, isLoading, navigate };
}
