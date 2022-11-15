import { useParams } from "react-router-dom";

const FullView = () => {
  const param = useParams();
  console.log(param);
  return <div>FullView</div>;
};

export default FullView;
