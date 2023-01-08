import "./step1.css";
import { FaAngleLeft } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
function StepTwo() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-100 Main">
        <div className="container">
          <div className="content pt-4 pl-3 d-flex">
            <h5>Claim Your reward in three simple steps.</h5>
          </div>
          <div className=" text-center mt-3">
            {" "}
            <h5>
              (Store Name) <br /> Welcomes You
            </h5>
          </div>
          <div className="container mt-3">
            <p> 1. Starts with filling your information here: </p>
            <input
              class="form-control mt-2"
              type="text"
              placeholder="Store ID"
            />
            <div class="input-group mt-2">
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <button class="btn btn-warning" type="button">
                  Send OTP
                </button>
              </div>
            </div>
            <div className="text-center mt-2">
              <span>Enter OTP to proceed</span>
              <div className="d-flex">
                <input type="number" className="form-control m-1" />
                <input type="number" className="form-control m-1" />
                <input type="number" className="form-control m-1" />
                <input type="number" className="form-control m-1" />
                <input type="number" className="form-control m-1" />
                <input type="number" className="form-control m-1" />
              </div>
            </div>
            <input
              type="email"
              class="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <input
              type="date"
              class="form-control mt-2"
              id="birthday"
              name="birthday"
              placeholder="Date Of Birth"
            />
            <button
              onClick={() => navigate("/3")}
              type="button"
              class="btn btn-warning mt-4 w-100"
            >
              Continue
            </button>
            <hr
              className="mt-5"
              style={{ "border-top": " 1px solid rgb(248 158 158 / 58%)" }}
            />
            <ProgressBar className="mt-3" variant="warning" now={68} />
            <div className="row text-center">
              <div className="col-4 text-warning"> Step 1</div>
              <div className="col-4 text-warning"> Step 2</div>
              <div className="col-4"> Step 3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepTwo;
