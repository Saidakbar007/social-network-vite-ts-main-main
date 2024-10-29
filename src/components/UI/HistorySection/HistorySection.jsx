import "./HistorySection.scss";

const HistorySection = () => {
  return (
    <div className="History">
      <svg className="icon icon-slider-button" viewBox="0 0 72 72">
        {/* SVG path here */}
      </svg>
      <div className="History__wrapper">
        <div className="History__item add-history">
          <div className="icon-wrapper">
            <svg className="icon icon-plus" viewBox="0 0 14 14">
              {/* SVG path here */}
            </svg>
            <span>История</span>
          </div>
          <img src="./img/users/andrey-kashirskiy.jpeg" alt="Add History" />
        </div>
        {/* More history items go here */}
      </div>
    </div>
  );
};

export default HistorySection;
