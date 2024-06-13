const QrKod = () => {
    return (
        <div className="container">
            <div className="qrKod_top">
                <span className="qrKod__img">img</span>
                <h1 className="qrKod_top__header">Генератор QR кодов</h1>
            </div>
            <div className="content">
                <div className="content__action">
                    <img className="content__action" src="" alt="" />
                </div>
                <div className="qrKod__collapsed">
                    <input className="qrKod__input" type="text" />
                    <img className="qrKod__input_img" src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default QrKod;