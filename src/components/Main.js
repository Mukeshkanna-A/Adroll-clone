import React, { useEffect, useState } from "react";

const Main = () => {
  const textOptions = [
    "marketing newbie",
    "established marketer",
    "e-commerce store owner",
    "one-person marketing team",
    "scrappy new entrepreneur",
    "big business marketing department",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [fadeIn, setFadeIn] = useState(false);

  const updateText = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % textOptions.length);
      setCurrentText(textOptions[currentIndex]);
      setFadeIn(true);
    }, 700);
  };

  useEffect(() => {
    const interval = setInterval(updateText, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (

    <div className="mbody">
      <div
        style={{ background: "#CC66A0", zIndex: "1", position: "relative" }}
        className="px-4"
      >
        <p
          style={{ fontSize: "13px" }}
          className="m-0 py-3 text-center text-light"
        >
          Learn how to optimize your webpages and ad creative at our upcoming
          workshop 👀 &nbsp;{" "}
          <a href="#" className="blueA">
            Register Now <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
      <div className="row m-0" style={{ background: "#FFE8E0", zIndex: "111" }}>
        <div
          style={
            window.innerWidth > 990
              ? { flexBasis: "50%", alignItems: "start", paddingLeft: "55px" }
              : { alignItems: "center", padding: "0px 16px" }
          }
          className="col-md-6 col-sm-12 col-lg-6 pt-4 pb-4  d-flex justify-content-center align-items-center flex-column"
        >
          <h1
            className="mb-4"
            style={{
              color: "#3C4858",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: "600",
              fontSize: "38px",
            }}
          >
            Smaller budgets need smarter dollars
          </h1>
          <p className="mb-5" style={{ color: "#3C4858", fontSize: "16px" }}>
            Create, manage, and analyze your display, Facebook, Instagram,
            Pinterest, TikTok, and email campaigns from a single platform.
            AdRoll helps marketers do more with less.
          </p>

          <div
            style={
              window.innerWidth < 990
                ? { justifyContent: "space-around" }
                : null
            }
            className="d-flex w-100"
          >
            <button
              style={{
                fontSize: window.innerWidth > 990 ? "small" : "8px",
                padding: "14px 28px",
              }}
              className="btn rounded-2 btn-purp"
            >
              GET STARTED
            </button>
            <button
              style={{
                fontSize: window.innerWidth > 990 ? "small" : "8px",
                padding: "14px 28px",
              }}
              className="mx-3 btn  rounded-2 btn-blue"
            >
              GET IN TOUCH{" "}
            </button>
          </div>
        </div>
        <div className="d-none d-lg-flex  d-md-flex  align-items-center justify-content-center bgimg col-md-6 col-sm-12 col-lg-6">
          <img
            width="100%"
            src="https://www.adroll.com/assets/img/homepage/hero-machine.png?format=jpg&auto=webp&width=576&dpr=2"
            alt=""
          />
        </div>
      </div>

      {/* --------------------------------- */}

      <div className="my-5 px-4 c2 w-100 row m-0">
        <div className="container row d-flex align-items-center justify-content-center">
          <div
            className="col-md-6 col-sm-12 col-lg-6  d-flex flex-column "
            style={{ color: "#3C4858" }}
          >
            <h3 style={{ fontWeight: "bold", lineHeight: "40px" }}>
              AdRoll works for the <br />
              <span
                style={{ textDecoration: "underline" }}
                className={fadeIn ? "fade-in" : "fade-out"}
              >
                {currentText}{" "}
              </span>{" "}
            </h3>
            <p>
              Our industry-first automation builder gives you full control of
              campaigns across display, social, and email — all from one place.
            </p>
            <p style={{ color: "darkpink" }}> Explore automation builder</p>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6  d-flex align-items-center justify-content-center">
            <img
              width={window.innerWidth > 990 ? "450px" : "250px"}
              src="https://www.adroll.com/assets/img/ecommerce-marketing/img-automation_studio.png?format=jpg&auto=webp&width=400"
              alt=""
            />
          </div>
        </div>

{/* ----------------------------------------- */}

        <div className="mt-5 d-flex align-items-center justify-content-between flex-wrap d-none">
          <img
            className="imge"
            src="https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=209&dpr=2"
            alt=""
          />
          <img
            className="imge"
            src="https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=209&dpr=2"
            alt=""
          />
          <img
            className="imge"
            src="https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=209&dpr=2"
            alt=""
          />
          <img
            className="imge"
            src="https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=209&dpr=2"
            alt=""
          />
          <img
            className="imge"
            src="https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=209&dpr=2"
            alt=""
          />
          <img
            className="imge"
            src="https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=209&dpr=2"
            alt=""
          />
        </div>
      </div>
     
     
      {/* --------------------------------------------------- */}

      
      <div className="p-5 text-center bg-white d-block d-sm-none">
        <div className="row">
          <div className="col-6">
            <img
              src="https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=129"
              alt=""
              className="pe-5"
            />
          </div>
          <div className="col-6 pt-2">
            <img
              src="https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=129"
              alt=""
              className="pe-5"
            />
          </div>
          <div className="col-6 pb-3 pt-3">
            {" "}
            <img
              src="https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=129"
              alt=""
              className="pe-5"
            />
          </div>
          <div className="col-6 pb-4 pt-4">
            <img
              src="https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=129"
              alt=""
              className="pe-5"
            />
          </div>
          <div className="col-6">
            <img
              src="https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=129"
              alt=""
              className="pe-5"
            />
          </div>
          <div className="col-6">
            <img
              src="https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=129"
              alt=""
              className="pe-5"
            />
          </div>
        </div>
      </div>
      

      <div className="row bg-light py-5">
        <div className="col col-xl-2"></div>
        <div className="col">
          <img
            src="https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=398"
            alt=""
            className="d-none d-sm-block"
          />
          <img
            src="https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=340"
            alt=""
            className="d-block d-sm-noned-block d-sm-none"
          />
        </div>
        <div className="col col-12 col-lg-4">
          <p className=" fw-semibold font" style={{ fontSize: "28px" }}>
            For 15 years, we've been the leader{" "}
            <br className="d-none d-sm-block" /> in helping our customers find
            their <br className="d-none d-sm-block" />
            best customers
          </p>{" "}
          <p>
            The AdRoll platform is powered by 15+ years of data from{" "}
            <br className="d-none d-sm-block" /> hundreds of thousands of brands
            and billions of shoppers. Let our{" "}
            <br className="d-none d-sm-block" /> expertise find the right
            customers for your business.
          </p>
          <a
            className="ms-1"
            href="#"
            style={{
              color: "#cc66a0",
              textDecorationColor: "#ffe8e0",
              textDecorationThickness: "7px",
              margin: "-10px",
            }}
          >
            Learn more
            <img
              src="https://www.adroll.com/assets/svg/icon-arrow.svg"
              className="ms-1"
              alt=""
            />
          </a>
        </div>
        <div className="col col-xl-2"></div>
      </div>
{/* -------------------------------------------------------------- */}
      <div className="row py-5 bg-white" id="">
        <div className="col-2 col-xl-2 d-none d-sm-block"></div>
        <div className="col">
          <p className="fw-semibold font" style={{ fontSize: "27px" }}>
            Save time and energy by running all{" "}
            <br className="d-none d-sm-block" /> your campaigns across millions
            of <br className="d-none d-sm-block" />
            websites and mobile apps — from <br className="d-none d-sm-block" />{" "}
            one place
          </p>
          <p className="">
            When we say one-stop shop, we mean one-stop. Launch, pause,{" "}
            <br className="d-none d-sm-block" />
            and edit ad campaigns across all the places you want to advertise,
            <br className="d-none d-sm-block" /> plus use that data to see your
            campaigns holistically and make
            <br className="d-none d-sm-block" /> improvements.
          </p>
          <a
            href="#"
            style={{
              color: "#cc66a0",
              textDecorationColor: "#ffe8e0",
              textDecorationThickness: "7px",
              margin: "-10px",
            }}
          >
            Explore social ads manager
            <img
              src="https://www.adroll.com/assets/svg/icon-arrow.svg"
              className="ms-1"
              alt=""
            />
          </a>
        </div>
        <div className="col">
          <img
            src="https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=398"
            alt=""
            className="d-none d-sm-block"
          />
          <img
            src="https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=340"
            alt=""
            className="d-block d-sm-none"
          />
        </div>
        <div className="col-2 col-xl-2"></div>
      </div>

      {/* ------------------------------------------------ */}

      <div className="row py-5 bg-white" id="">
        <div className="col-2 col-xl-2"></div>
        <div className="col">
          <img
            src="https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=398"
            alt=""
            className="d-none d-sm-block"
          />
          <img
            src="https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=340"
            alt=""
            className="d-block d-sm-none "
          />
        </div>
        <div className="col">
          <p className="font fw-semibold" style={{ fontSize: "28px" }}>
            Our retargeting and brand <br className="d-none d-sm-block" />
            awareness ads make billions of
            <br /> correct choices every day
          </p>
          <p className="">
            Our AI does what even the most savvy marketer alone cannot. Our
            <br className="d-none d-sm-block" /> powerful machine learning makes
            more predictions per second
            <br className="d-none d-sm-block" /> than the NASDAQ to attract the
            right customers to your site and
            <br className="d-none d-sm-block" /> get them buying again and
            again.
          </p>
          <a
            href="#"
            style={{
              color: "#cc66a0",
              textDecorationColor: "#ffe8e0",
              textDecorationThickness: "7px",
              margin: "-10px",
            }}
          >
            Explore retargeting ads
            <img
              src="https://www.adroll.com/assets/svg/icon-arrow.svg"
              className="ms-1"
              alt=""
            />
          </a>{" "}
          <br />
          <a
            href="#"
            style={{
              color: "#cc66a0",
              textDecorationColor: "#ffe8e0",
              textDecorationThickness: "7px",
              margin: "-10px",
            }}
          >
            Explore brand awareness ads
            <img
              src="https://www.adroll.com/assets/svg/icon-arrow.svg"
              className="ms-1"
              alt=""
            />
          </a>
        </div>

        <div className="col-2 col-xl-2 d-none d-sm-block"></div>
      </div>

{/* ----------------------------------------------------------------------------- */}

      <div className="row py-5 bg-white" id="">
        <div className="col-2 col-xl-2 d-none d-sm-block"></div>
        <div className="col">
          <p className="font fw-semibold" style={{ fontSize: "28px" }}>
            Experts to manage your advertising
          </p>
          <p className="">
            Want to run effective campaigns but don’t have the bandwidth to{" "}
            <br className="d-none d-sm-block" />
            manage different platforms? AdRoll managed services can be an
            <br className="d-none d-sm-block" /> extension of your marketing
            team, providing you with a dedicated{" "}
            <br className="d-none d-sm-block" />
            platform expert to partner with, helping you and your team{" "}
            <br className="d-none d-sm-block" />
            achieve your marketing goals and maximize return from your
            <br className="d-none d-sm-block" /> campaigns.
          </p>

          <a
            href="#"
            style={{
              color: "#cc66a0",
              textDecorationColor: "#ffe8e0",
              textDecorationThickness: "7px",
              margin: "-10px",
            }}
          >
            Get the support you deserve
            <img
              src="https://www.adroll.com/assets/svg/icon-arrow.svg"
              className="ms-1"
              alt=""
            />
          </a>
        </div>
        <div className="col">
          <img
            src="https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=398"
            alt=""
            className="d-none d-sm-block"
          />
          <img
            src="https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=340"
            alt=""
            className="d-block d-sm-none"
          />
        </div>
        <div className="col-2 col-xl-2 d-none d-sm-block"></div>
      </div>


      <div className="position-absolute1 bg-white" id="box">
        <div id="" className=" position-"></div>

        <div className="row">
          <div className="col p-5">
            <div className="row pb-4">
              <div className="col">
                <img
                  src="https://www.adroll.com/assets/img/homepage/logo-volcanica.png"
                  width="150"
                  height="128"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <b>"</b>
                <span>
                  Since last year,{" "}
                  <b>
                    our revenue has <br />
                    increased 191%
                  </b>
                  ,{" "}
                  <b>
                    our attributed <br />
                    conversions 177%
                  </b>
                  , and our{" "}
                  <b>
                    engagement <br />
                    33%
                  </b>
                  . We’re reaching and converting <br />
                  customers higher in the funnel.<b>"</b>
                </span>
              </div>
            </div>
          </div>
          
          <div className="col textp " id="pinkybg">

            <p className="textright">
              <b>Adroll customers </b> make
              <span className="price"> $165B</span> <br />
              <span>
                {" "}
                in sales <b>every year</b>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center pb-5 pt-2">
        <a href="#">
          <img
            src="https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg"
            width="120"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://images.g2crowd.com/uploads/report_medal/image/1004325/medal.svg"
            width="120"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://images.g2crowd.com/uploads/report_medal/image/1004328/medal.svg"
            width="120"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://www.g2.com/shared-assets/product-badges/users-love-us.svg"
            width="120"
            alt=""
          />
        </a>
      </div>
      
      <div
        className="text-center d-none d-sm-block"
        style={{ backgroundColor: "#ffe8e0", padding: "100px" }}
      >
        <p className="fs-2 fw-semibold">
          Increase ROI. Learn from your data.
          <br />
          Maximize sales.{" "}
        </p>
        <button
          class="btn btn me-3 text-white"
          type="submit"
          style={{ backgroundColor: "#8e44ad", padding: "10px 28px" }}
        >
          <span className="buttext">GET STARTED</span>
        </button>
        <button
          class="btn btn text-white"
          type="submit"
          style={{ backgroundColor: "#20b8f0", padding: "10px 28px" }}
        >
          <span className="buttext">GET IN TOUCH</span>
        </button>
      </div>
      <div
        className="d-block d-sm-none"
        style={{ backgroundColor: "#ffe8e0", padding: "45px" }}
      >
        <p className="fs-2 fw-semibold">
          Increase ROI. Learn <br />
          from your data. <br className="d-none d-sm-block" />
          Maximize sales.{" "}
        </p>
        <button
          class="btn btn me-3 text-white mb-3"
          type="submit"
          style={{ backgroundColor: "#8e44ad", padding: "10px 28px" }}
        >
          <span className="buttext">GET STARTED</span>
        </button>
        <button
          class="btn btn text-white"
          type="submit"
          style={{ backgroundColor: "#20b8f0", padding: "10px 28px" }}
        >
          <span className="buttext">GET IN TOUCH</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
