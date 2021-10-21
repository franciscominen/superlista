import React, {useContext} from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { StoreContext } from "../../context/StoreProvider";

const ConfirmNewListModal = () => {
  const { clearList } = useContext(StoreContext);

  return (
    <Popup
      trigger={
        <div className="newList_btn">
          <img src={"assets/img/newListBtn.svg"} alt="" />
          <p>
            <strong>Crear nueva</strong> lista
          </p>
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <>
          <Animated
            animationIn="zoomIn"
            animationInDuration="500"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              width: "80%",
              margin: "0 auto",
              padding: "16px 24px",
              borderRadius: "35px",
              position: "relative",
              top: "25%",
            }}
          >
            <button
              onClick={close}
              style={{
                background: "none",
                border: "none",
                alignSelf: "flex-end",
                marginTop: "8px",
              }}
            >
              <img src="assets/img/closeIcon.svg" alt="" />
            </button>

            <p
              style={{
                fontSize: "22px",
                textAlign: "center",
                margin: "16px 0",
              }}
            >
              Ya creaste una lista
              <br />{" "}
              <strong>
                ¿Querés borrarla y<br /> empezar una nueva?
              </strong>
            </p>

            <div style={{ display: "flex", width: "100%" }}>
              <Link
                to="/productos"
                onClick={clearList}
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  width: "100%",
                  margin: "8px 8px 16px 8px",
                  padding: "8px 0",
                  borderRadius: "20px",
                  color: "#8D8D8D",
                  backgroundColor: "#F5F5F5",
                  border: "2px solid #D2D2D2",
                  textAlign: "center",
                }}
              >
                SÍ
              </Link>
              <button
                onClick={close}
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  width: "100%",
                  margin: "8px 8px 16px 8px",
                  padding: "8px 0",
                  borderRadius: "20px",
                  color: "#8D8D8D",
                  backgroundColor: "#D2D2D2",
                  border: "2px solid #E8E8E8",
                }}
              >
                NO
              </button>
            </div>
          </Animated>
        </>
      )}
    </Popup>
  );
};

export default ConfirmNewListModal;
