import "./step1.css";

import Main from "../Asset/main.png";
import { FaPlay, FaStore } from "react-icons/fa";
import FB from "../Asset/FB.svg";
import INSTA from "../Asset/INSTA.jpg";
import { useNavigate } from "react-router-dom";
function Start() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-100 Main">
        <div className="container">
          <div className="content pt-4 text-center pb-5">
            <img src={Main} height={250} width={200} />
            <br />
            <button
              type="button"
              class="btn w-50 text-center"
              style={{
                "background-color": "#650000",
                color: "white",
                "box-shadow": "0px 0px 22px 5px #e7a500a6",
              }}
            >
              <div className="d-flex align-items-center">
                <span className="ml-4 mr-3">Dark</span>
                <FaPlay className="ml-2" />
              </div>
            </button>
            <br />
            <button
              type="button"
              class="mt-4 btn w-50 text-center"
              style={{
                "background-color": "#650000",
                color: "white",
                "box-shadow": "0px 0px 22px 5px #e7a500a6",
              }}
            >
              <div className="d-flex align-items-center">
                <span className="ml-4 mr-3">Store</span>
                <FaStore className="ml-2" />
              </div>
            </button>
            <p onClick={() => navigate("/1")} class="text-warning mt-4">
              Play to Win
            </p>
            <p class=" mt-4" style={{ color: "#aaaaaa" }}>
              Participate in O-LINE-O' Super 75
            </p>
            <p class="mt-4"> LIKE & FOLLOW US ON </p>
            <span>
              <img className="rounded" src={FB} height={30} width={60} />
            </span>
            <span className="pl-2 ">
              <img className="rounded" src={INSTA} height={30} width={50} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Start;
