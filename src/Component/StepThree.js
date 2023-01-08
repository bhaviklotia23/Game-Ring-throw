import "./step1.css";
import { FaAngleLeft } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import Blink from "../Asset/blink.png";
import Heart from "../Asset/heart.jpg";
import Smile from "../Asset/images.jpg";
import Laugh from "../Asset/laugh.png";
import { useNavigate } from "react-router-dom";

function StepThree() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-100 Main">
        <div className="container">
          <div className="content pt-4 pl-3 d-flex">
            <h5>Claim Your reward in three simple steps.</h5>
          </div>

          <div className="container mt-3">
            <p> 3. Starts with filling your information here: </p>
            <input
              class="form-control mt-2"
              type="text"
              placeholder="Category"
            />
            <input
              class="form-control mt-2"
              type="text"
              placeholder="Product Purchased"
            />

            <input
              class="form-control mt-2"
              type="text"
              placeholder="IMEI Number"
            />
            <p style={{ "font-size": "10px" }}>Product price MRP/MOP</p>
            <div className="text-center">
              <button onClick={() => navigate("/4")} class="btn btn-warning ">
                Send
              </button>
            </div>
            <div className="text-center mt-2">
              <span>Ask the store manager for your OTP to proceed:</span>
              <div className="d-flex m-2">
                <input type="number" className="form-control m-2" />
                <input type="number" className="form-control m-2" />
                <input type="number" className="form-control m-2" />
                <input type="number" className="form-control m-2" />
              </div>
            </div>

            <div className="text-center mt-2">
              <span>How would you rate your experince at O-LINE-O?</span>
              <div className="d-flex m-2 justify-content-center">
                <span
                  className="bg-white p-1 m-2"
                  style={{ "border-radius": "15px" }}
                >
                  <img className="" src={Heart} height={30} width={30} />
                </span>
                <span
                  className="bg-white p-1 m-2"
                  style={{ "border-radius": "15px" }}
                >
                  <img className="" src={Smile} height={30} width={30} />
                </span>
                <span
                  className="bg-white  p-1 m-2"
                  style={{ "border-radius": "15px" }}
                >
                  <img className="" src={Blink} height={30} width={30} />
                </span>
                <span
                  className="bg-white p-1  m-2"
                  style={{ "border-radius": "15px" }}
                >
                  <img className="" src={Laugh} height={30} width={30} />
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <p className=" mx-2" style={{ "font-size": "10px" }}>
                  excellent
                </p>
                <p className="  mx-2" style={{ "font-size": "10px" }}>
                  amazing
                </p>
                <p className="  mx-2" style={{ "font-size": "10px" }}>
                  good
                </p>
                <p className=" mx-2" style={{ "font-size": "10px" }}>
                  satisfactory
                </p>
              </div>
            </div>

            <button type="button" class="btn btn-warning mt-4 w-100">
              Continue
            </button>
            <hr
              className="mt-5"
              style={{ "border-top": " 1px solid rgb(248 158 158 / 58%)" }}
            />

            <ProgressBar className="mt-3" variant="warning" now={100} />
            <div className="row text-center">
              <div className="col-4 text-warning"> Step 1</div>
              <div className="col-4 text-warning"> Step 2</div>
              <div className="col-4 text-warning"> Step 3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepThree;
