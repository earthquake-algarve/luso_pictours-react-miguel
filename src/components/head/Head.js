import { HiSearch } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";

export default () => {
  return (
    <>
      <div className="container">
        <div className="search__bar">
          <input type="text" placeholder="Local" />
          <input type="text" placeholder="Datas" />
          <button type="search">Search </button>
        </div>

        <div className="head">
          <div className="image__left">
            <img src="./img/mundi map.jpeg" alt="mundi map" />
            <p className="lu">LU</p>
            <p className="so">SO</p>
            <img id="logo" src="./img/lusopictours.jpg" alt="logo" />
          </div>

          <div className="image__right">
            <img src="./img/img-1section.jpeg" alt="" />
            <p className="pic">PIC</p>
            <p className="tours">TOURS</p>

            <div className="menu">
              <ul>
                <a href="#">
                  {" "}
                  <HiSearch className="icons" />{" "}
                </a>
                <a href="#">
                  {" "}
                  <HiMenu className="icons" />{" "}
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
