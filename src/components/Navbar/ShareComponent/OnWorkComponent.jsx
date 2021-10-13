import React from "react";
import "../../../styles/clear-list-modal.scss";
import Popup from "reactjs-popup";
import { Animated } from "react-animated-css";

const OnWorkComponent = () => {
  return (
    <Popup
      trigger={
        <button type="button" style={{ background: "none", border: "none" }}>
          <img src={"assets/img/shareIcon.svg"} alt="" />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <>
          <Animated
            animationIn="zoomIn"
            animationInDuration="400"
            style={{
              background: "white",
              borderRadius: "35px",
              width: "75%",
              padding: "24px",
              position: "relative",
              top: "30%",
              margin: "auto",
            }}
          >
            <h1
              style={{
                fontSize: "22px",
                textAlign: "center",
                color: "#8D8D8D",
              }}
            >
              Lo sentimos, estamos trabajando en ello.
            </h1>

            <button
              onClick={close}
              className=""
              style={{
                background: "#232323",
                border: "none",
                color: "#F8F8F8",
                fontSize: "18px",
                fontWeight: "500",
                padding: "16px 22px",
                borderRadius: "22px",
                display: "block",
                margin: "22px auto 0 auto",
              }}
            >
              Okey :)
            </button>
          </Animated>
        </>
      )}
    </Popup>
  );
};

export default OnWorkComponent;
