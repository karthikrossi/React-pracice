import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import Menubar from "../Menubar/Menubar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Rupee from "../../Images/icon_awesome-rupee-sign.png";
import Sedan from "../../Images/sedan.png";
import Muv from "../../Images/muv.png";
import Cash from "../../Images/money__1_.png";
import Credit from "../../Images/credit-card__2_.png";
import Swap from "../../Images/swapp.png";
import Flight from "../../Images/flight.png";

const Home = () => {
  const [isSwap, setIsSwap] = useState(false);

  const [text, setText] = useState("Airport <-> City");

  const swap = () => {
    if (!isSwap) {
      setIsSwap(!isSwap);
      setText("City <-> Airport");
    } else {
      setIsSwap(!isSwap);
      setText("Airport <-> City");
    }
  };

  const swapToggle = () => {
    if (isSwap) {
      setIsSwap(!isSwap);
      setText("Airport <-> City");
    }
  };

  const swapToggle2 = () => {
    if (!isSwap) {
      setIsSwap(!isSwap);
      setText("City <-> Airport");
    }
  };

  return (
    <>
      <Box>
        <Menubar />
      </Box>
      <div className="container-fluid maindiv">
        <div className="col-lg-12 row">
          <div className="col-lg-7 text_div mt-auto mb-auto">
            <h1 className="text-white ml-5">
              <b>
                Book Your Convenient <br />
                <span>{text}</span> Taxi Ride
              </b>
            </h1>
          </div>
          <div className="col-lg-5 side_div p-3">
            <div className="ml-3 col-lg-9 bg-light p-1 text-center top-toggle">
              <div className="font-weight-bold">
                {/* <ToggleButtonGroup value={1} sx={{ padding: 0 }}> */}
                <button
                  type="button"
                  // className="toggle-btn"
                  className={`${
                    !isSwap ? "toggle-active" : "toggle-reset"
                  } toggle-btn`}
                  onClick={swapToggle}
                >
                  Airport Transfer
                </button>
                <button
                  type="button"
                  //className="toggle-btn"
                  className={`${
                    isSwap ? "toggle-active" : "toggle-reset"
                  } toggle-btn`}
                  onClick={swapToggle2}
                >
                  {" "}
                  City Transfer
                </button>
                {/* </ToggleButtonGroup> */}
              </div>
            </div>
            <div className="book-card col-lg-11 d-flex bg-light container pt-5 pb-0">
              <div
                style={{
                  marginTop: "0px",
                  position: "relative",
                  left: "-6px",
                  padding: "0px",
                }}
              >
                <div className={"green-dot"}></div>
                <div className={"dotted-line"}></div>
                <div className={"red-dot"}></div>
              </div>
              <div className="">
                <div className={`${isSwap ? "swap" : "reset"}`}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: "" }}>
                    <div>
                      <div className="d-flex" style={{ lineHeight: "8px" }}>
                        <img className="Flight" src={Flight} alt=""></img>
                        <span
                          style={{
                            color: `${isSwap ? "#D42828" : "#2DBB54"}`,
                          }}
                        >
                          Airport
                        </span>
                      </div>
                      <Autocomplete
                        options={AirportList}
                        sx={{ width: 380 }}
                        renderInput={(params) => (
                          <TextField {...params} sx={{ marginTop: 1 }} />
                        )}
                      />
                    </div>
                  </FormControl>
                </div>

                <div className={`${isSwap ? "swapCity" : "reset"}`}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: "" }}>
                    <div>
                      <div className="d-flex" style={{ lineHeight: "10px" }}>
                        <span
                          style={{
                            color: `${isSwap ? "#2DBB54" : "#D42828"}`,
                          }}
                        >
                          City
                        </span>
                      </div>
                      <Autocomplete
                        options={CityList}
                        sx={{ width: 380 }}
                        renderInput={(params) => (
                          <TextField {...params} sx={{ marginTop: 1 }} />
                        )}
                      />
                    </div>
                  </FormControl>
                </div>
              </div>
              <div style={{ lineHeight: 12.5 }}>
                <img
                  className={"swap-image"}
                  src={Swap}
                  alt={""}
                  onClick={swap}
                ></img>
              </div>
            </div>

            <div
              className="d-flex col-lg-12 container"
              style={{ justifyContent: "center" }}
            >
              <div className="book-card2 bg-light">
                <div>
                  <h6 className="font-weight-bold">SUV</h6>
                  <p>
                    <b style={{ color: "#e9822d" }}>₹</b>
                  </p>
                </div>

                <img className="car-image" src={Sedan} alt={""}></img>
              </div>

              <div className="book-card2 bg-light ">
                <div>
                  <h6 className="font-weight-bold">MUV</h6>
                  <p>
                    <b style={{ color: "#e9822d" }}>₹</b>
                  </p>
                </div>

                <img className="car-image" src={Muv} alt={""}></img>
              </div>
            </div>

            <div className="col-lg-12 mt-1">
              <div className="col-lg-12 bg-light p-1 text-center bottom-toggle">
                <div className="button-box font-weight-bold">
                  <div id="but"></div>
                  {/* <ToggleButtonGroup value={1} sx={{ padding: 0, m: 0 }}> */}
                  <button
                    type="button"
                    className="toggle-btn col-lg-6"
                    // onClick={leftClick}
                  >
                    <img src={Credit} alt="" className="btn-icon" /> Credit
                  </button>
                  <button
                    type="button"
                    className="toggle-btn col-lg-6"
                    // onClick={rightClick}
                  >
                    {" "}
                    <img src={Cash} alt="" className="btn-icon" /> Cash
                  </button>
                  {/* </ToggleButtonGroup> */}
                </div>
              </div>
            </div>

            <div className="col-lg-12 text-right">
              <Button type="submit" className="booking-btn" variant="contained">
                Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CityList = [
  { label: "Chennai", year: 1994 },
  { label: "Madurai", year: 1972 },
  { label: "Coimbatore", year: 1974 },
  { label: "salem", year: 2008 },
  { label: "Trichy", year: 1957 },
  { label: "Erode", year: 1993 },
  { label: "Tanjavore", year: 1994 },
];

const AirportList = [
  { label: "Chennai Airport", year: 1994 },
  { label: "Madurai Airport", year: 1972 },
  { label: "Coimbatore Airport", year: 1974 },
  { label: "salem Airport", year: 2008 },
  { label: "Trichy Airport", year: 1957 },
  { label: "Erode Airport", year: 1993 },
  { label: "Tanjavore Airport", year: 1994 },
];

export default Home;
