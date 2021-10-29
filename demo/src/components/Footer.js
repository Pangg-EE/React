import React from 'react'
import '../base.css';
function Footer() {
    return (
<div className="pragmatic_footer">
<hr
     style={{
       borderColor: 'black',
       marginTop: '1rem',
       marginBottom: '2rem',
     }}
   />
    <div className="pragmatic_footer_button">
        <span>공지사항 |</span>
        <span> 제휴문의 |</span>
        <span> 서비스 소개</span>
    </div>
    <div style={{marginTop: "1rem"}}>
        <h6 className="pragmatic_logo">Pragmatic</h6>
    </div>
</div>
    )
}

export default Footer
