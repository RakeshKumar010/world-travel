import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* slider */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 "
              src="https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              alt="First slide"
              height={"500px"}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              alt="Second slide"
              height={"500px"}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/6512.jpg"
              alt="Third slide"
              height={"500px"}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* explore */}
      <div className="exploreMain">
        <h1>EXPLORE LIKE A PRO</h1>
        <div className="exploreSecond">
          <img
            src="https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="artical1"
          />
          <div className="articals">
            <div className="artical artical1">
              <p className="header">FEATURE ARTICLE 1</p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                porro quo perferendis, accusamus ad sed eveniet minus, sequi
                eligendi cumque, in rerum at nostrum explicabo eos sapiente.
                Dolorem, sint! Voluptatum?
              </p>
            </div>
            <div className="artical artical2">
              <p className="header">FEATURE ARTICLE 3</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                porro quo perferendis, accusamus ad sed eveniet minus, sequi
                eligendi cumque, in rerum at nostrum explicabo eos sapiente.
                Dolorem, sint! Voluptatum?
              </p>
            </div>
            <div className="artical artical2">
              <p className="header">FEATURE ARTICLE 3</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                porro quo perferendis, accusamus ad sed eveniet minus, sequi
                eligendi cumque, in rerum at nostrum explicabo eos sapiente.
                Dolorem, sint! Voluptatum?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="packagesMain">
        <h3>PACKAGES WHICH SUITS YOUR POCKET</h3>

        <div className="packages">
          <div className="featureartical">
            <img
              src="https://www.visitdubai.com/-/media/images/leisure/detail-pages/plan-your-trip/4-0-plan-your-trip-t02/plan-your-trip-burj-al-arab-det.jpg?rev=fa8f31a70692405a96c47f02c8c4d336&cx=0.77&cy=0.33&cw=397&ch=397"
              alt="featureartical1"
            />
            <p className="header">FEATURE ARTICLE 1</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              porro quo perferendis, accusamus ad sed eveniet minus, sequi
              eligendi cumque, in rerum at nostrum explicabo eos sapiente.
              Dolorem, sint! Voluptatum?
            </p>
          </div>
          <div className="featureartical">
            <img
              src="https://travel.usnews.com/dims4/USNEWS/5f110f9/2147483647/resize/255x255%5E%3E/crop/255x255/quality/85/?url=https://travel.usnews.com/images/183346577_sm4cTS3.jpg"
              alt="featureartical2"
            />
            <p className="header">FEATURE ARTICLE 2</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              porro quo perferendis, accusamus ad sed eveniet minus, sequi
              eligendi cumque, in rerum at nostrum explicabo eos sapiente.
              Dolorem, sint! Voluptatum?
            </p>
          </div>
          <div className="featureartical">
            <img
              src="https://www.fairmont.com/assets/0/104/1317/1322/5381/5389/a5246ec9-88f9-40d8-aa26-9e3443cff7b3.png"
              alt="featureartical3"
            />
            <p className="header">FEATURE ARTICLE 3</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              porro quo perferendis, accusamus ad sed eveniet minus, sequi
              eligendi cumque, in rerum at nostrum explicabo eos sapiente.
              Dolorem, sint! Voluptatum?
            </p>
          </div>
        </div>
      </div>
      {/* FEATURE ARTICLE 1 */}
      <div className="bali1">
        <div className="bali1div1">
          <img
            src="https://www.visitdubai.com/-/media/images/business-in-dubai/images/burj-khalifa-3-dtcm.jpg?rev=908cc9771b9c4f3e9ac19478a61bfc59&cx=0.49&cy=0.42&cw=397&ch=397"
            alt="bali1div1"
          />
        </div>
        <div className="bali1div2">
          <p className="header">FEATURE ARTICLE 3</p>
          <p className="header">STARTS FROM 50,000</p>
          <div className="bali1div2Btn">
            <Link to={"/itenary"}>ITENARY</Link>
            <Link to={"/addson"}>ADDS-ON</Link>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga porro
            quo perferendis, accusamus ad sed eveniet minus, sequi eligendi
            cumque, in rerum at nostrum explicabo eos sapiente. Dolorem, sint!
            Voluptatum?
          </p>

          <Link to={"/featureartical"} className="bali1View">
            VIEW MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
