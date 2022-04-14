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
            animationInDuration={400}
            style={{
              background: "white",
              borderRadius: "35px",
              width: "75%",
              padding: "16px",
              position: "relative",
              top: "30%",
              margin: "auto",
            }}
          >
            <h1
              style={{
                fontSize: "23px",
                textAlign: "center",
                color: "#232323",
                padding: "16px",
                lineHeight: "1.2",
              }}
            >
              Estamos trabajando para que puedas compartir tu lista.
            </h1>

            <button
              onClick={close}
              className=""
              style={{
                background: "#D2D2D2",
                color: "#8D8D8D",
                fontSize: "22px",
                fontWeight: "700",
                padding: "16px 22px",
                border: "2px solid #D2D2D2",
                borderRadius: "22px",
                display: "block",
                margin: "8px auto 16px auto",
                width: "85%",
              }}
            >
              OKIS
            </button>
          </Animated>
        </>
      )}
    </Popup>
  );
};

export default OnWorkComponent;
