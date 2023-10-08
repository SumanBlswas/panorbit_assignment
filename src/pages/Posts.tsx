import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Posts = ({ setId }: { setId: CallableFunction }) => {
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);
  return <div>Posts</div>;
};

export default Posts;
