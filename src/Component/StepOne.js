import "./step1.css";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function StepOne() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-100 Main">
        <div className="container">
          <div className="content pt-5 d-flex">
            <FaAngleLeft className="pr-2" size={30} />
            <h4>Claim Your reward in three simple steps.</h4>
          </div>
          <div className="container mt-5">
            <span> 1. Enter the store ID </span>
            <input
              class="form-control mt-4"
              type="text"
              placeholder="Store ID"
            />
            <button
              onClick={() => navigate("/2")}
              type="button"
              class="btn btn-warning mt-4 w-100"
            >
              Continue
            </button>
            <hr
              className="mt-5"
              style={{ "border-top": " 1px solid rgb(248 158 158 / 58%)" }}
            />
            <button type="button" class="btn btn-outline-warning mt-4 w-100">
              Not in Store
            </button>
            <div className="row text-center">
              <div className="col-4 text-warning"> Step 1</div>
              <div className="col-4"> Step 2</div>
              <div className="col-4"> Step 3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepOne;
