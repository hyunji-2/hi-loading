import React from 'react';

const PopupUploade = (props) => {
    const percentage = props.percentage;
    const open = props.open;

    return (
        <div id="popUpload" className={open === true ? 'pop_modal open' : 'pop_modal'}>
            <div className={"popup_type1 popup_upload"}>
                <div className="inner">
                    <p className="txt">동영상 업로드 중...</p>
                    <p className="percent"><em>{percentage}</em>%</p>
                    <span className="progress_bar">
                        <span style={{ width: percentage+"%"}}></span>
                    </span>
                    <div className="btns">
                        <button type="button" className="btn_type2">확인</button>
                        <button type="reset" className="btn_type3">취소</button>
                    </div>
                    <button type="button" className={"btn_comm btn_close"} title="닫기">닫기</button>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    );
};

PopupUploade.defaultProps = {
    percentage: '0',
    open: false
};

export default PopupUploade;
