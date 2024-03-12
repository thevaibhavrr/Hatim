import React from "react";
import "../../styles/About/History.css";
function History() {
  return (
    <>
      <div className="main_history_div" >
        <div className="history_conant_div" >
        {/* top */}
        <div className="history_of_hamis_text"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
        >History of Hamis Biscuits</div>
        {/* message */}
        <div className="history_message"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="500"
         data-aos-duration="1000"
        >
          Funjoy Food Products (Pvt) Ltd., was founded in the years 1998. As of
          today, it is owned by Mr. Varinder Singh. It is his 34 Years and
          profound knowledge has led us towards success. Based in Malerkotla
          (Punjab), our company provides its products all over India and abroad.
        </div>
        </div>
      </div>
    </>
  );
}

export default History;
