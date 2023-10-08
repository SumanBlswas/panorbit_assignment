import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ToDo = ({ setId }: { setId: CallableFunction }) => {
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);
  return <div>ToDo</div>;
};

export default ToDo;
