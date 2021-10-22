import React from 'react'
import './Modal.css';

function Modal({closeModal}){
  return <div className="modalBackground">
    <div className="modalContainer">
      <button className="closebtn" onClick={() => closeModal(false)}>X</button>
      <div className="bodytitle">
        <p className="titleProfile">Mai Thanh An</p>
              <p className="titleProfile">MSSV: 4501104002</p>
              <p className="titleProfile">Mã lớp HP: COMP103101</p>
        <p className="titleProfile">Lớp: CNTT-B</p>
        <p className="titleProfile">Khoa: Công Nghệ Thông Tin</p>
        <p className="titleProfile">Trường: Đại Học Sư Phạm TPHCM</p>
      </div>
      <div className="footer">
        <button className="btnCancel" onClick={() => closeModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
}
export default Modal;