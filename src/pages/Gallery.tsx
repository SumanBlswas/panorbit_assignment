import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Gallery = ({ setId }: { setId: CallableFunction }) => {
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);
  return <div>Gallery</div>;
};

export default Gallery;
