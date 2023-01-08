import "./step1.css";

import Main from "../Asset/main.png";
import DOM from "../Asset/dom.png";
import Left from "../Asset/left.png";
import Right from "../Asset/right.png";
import Table from "../Asset/table.png";
import Ring from "../Asset/ring.png";
import Fifty from "../Asset/50.png";
import ABS from "../Asset/abs.png";
import Twenty from "../Asset/20.png";
import Head from "../Asset/head.png";
import Head2 from "../Asset/head2.png";
import Fip from "../Asset/15.png";
import five from "../Asset/5.png";
import ten from "../Asset/10.png";
import Hun from "../Asset/100.png";
import tHun from "../Asset/200.png";
import logo from "../Asset/lg.png";
import ProgressBar from "react-bootstrap/ProgressBar";

import { useEffect, useRef, useState } from "react";
function Game() {
  const [position, setPosition] = useState({
    pos: "",
  });
  const [state, setState] = useState({
    yoffset: 0,
  });
  const box = useRef(null);

  useEffect(() => {}, [position?.pos]);

  function handleMouseDown(e) {
    // console.log(e.target.getBoundingClientRect().x = 400 )
    setState((p) => ({ ...p, yoffset: 100 }));
  }

  return (
    <>
      <div className="d-flex justify-content-center Theme">
        <div className="w-100 Mian ">
          <div className="main__container text-center">
            <img className="h-30 main__dom " src={DOM} height={170} />
            <img
              src={logo}
              height={50}
              width={150}
              style={{
                "margin-top": "-3.5rem",
                "margin-left": "auto",
                "margin-right": "auto",
              }}
            />
          </div>
          <div className="d-flex justify-content-between  ">
            <img src={Left} height={400} style={{ "margin-top": "-10%" }} />

            <div>
              <img
                className=""
                src={Table}
                style={{ "margin-top": "20%", "z-index": "1", width: "230px" }}
              />
              <img
                src={Fifty}
                height={50}
                width={50}
                className="ml-5"
                style={{ "margin-top": "-150%" }}
              />
              <img
                src={ABS}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-150%" }}
              />
              <img
                src={Twenty}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-130%" }}
              />
              <img
                src={Head}
                height={40}
                width={40}
                className="ml-4"
                style={{ "margin-top": "-140%" }}
              />
              <img
                src={Fip}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-130%" }}
              />
              <img
                src={five}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-110%" }}
              />
              <img
                src={Head2}
                height={40}
                width={40}
                className="ml-4"
                style={{ "margin-top": "-120%" }}
              />
              <img
                src={ten}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-115%" }}
              />

              <img
                src={Hun}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-100%" }}
              />
              <img
                src={tHun}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-100%" }}
              />
              <img
                src={tHun}
                height={50}
                width={50}
                className="ml-4"
                style={{ "margin-top": "-100%" }}
              />
            </div>
            <div class="fixed-bottom d-flex justify-content-center  ">
              {/* <ProgressBar className="rt w-50 fixed-bottom "  variant="success" now={60} /> */}

              <input
                className="rt"
                id="typeinp"
                type="range"
                min="0"
                max="5"
                step="1"
                style={{ "margin-left": "-9rem" }}
              />
              <div className="text-center ml-4">
                <img
                  style={{ "margin-bottom": `${state?.yoffset}px` }}
                  ref={box}
                  onMouseDown={(e) => {
                    handleMouseDown(e);
                  }}
                  className={
                    position?.pos === "left"
                      ? "mr-5"
                      : position?.pos === "right"
                      ? "ml-5"
                      : position?.pos === "left"
                      ? ""
                      : ""
                  }
                  src={Ring}
                  height={100}
                  width={100}
                />
                <br />

                <button
                  className="border-0 bg-white text-white m-1 rounded-circle"
                  onClick={(e) => {
                    e.preventDefault();
                    setPosition((p) => ({ ...p, pos: "left" }));
                  }}
                >
                  .
                </button>
                <button
                  className="border-0 bg-white text-white m-1 rounded-circle"
                  onClick={(e) => {
                    e.preventDefault();
                    setPosition((p) => ({ ...p, pos: "center" }));
                  }}
                >
                  .
                </button>
                <button
                  className="border-0 bg-white text-white m-1 rounded-circle "
                  onClick={(e) => {
                    e.preventDefault();
                    setPosition((p) => ({ ...p, pos: "right" }));
                  }}
                >
                  .
                </button>
              </div>
            </div>

            <img src={Right} height={400} style={{ "margin-top": "-10%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
