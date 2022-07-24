import { useEffect, useState, ReactDOM } from "react";

export default function RaceDetails({ children, isMenuModal }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      {showModal && (
        <div
          className="modal"
          style={{
            border: "4px solid",
            borderColor: isMenuModal ? "#ff4500" : "#555",
            textAlign: "center",
          }}
        //   onClick={handleClose}
          isMenuModal={false}
        ></div>
      )}
    </div>
  );
}
