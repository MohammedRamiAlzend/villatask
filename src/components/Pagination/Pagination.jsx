import "./Pagination.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Pagination = () => {
  return (
    <div className="pagination">
      <span className="left-arrow">
        <FaArrowLeft />
      </span>
      <div className="circle">1</div>
      <div className="circle">2</div>
      <div className="circle">3</div>
      <span className="right-arrow">
        <FaArrowRight />
      </span>
    </div>
  );
};

export default Pagination;
