/* eslint-disable @next/next/no-img-element */
import headerData from '../../../data/freelancer/header.json';

const Header = () => {
  return (
    <header className="home-freelancer valign bg-img" style={{ backgroundImage: "url('freelancer/img/lines.svg')" }} data-scroll-index="0">
      <div className="container mt-50">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont">
              <h6 className="text">Hey, How's it!</h6>
              <h4 className="mb-10">{ headerData.Name }</h4>
              <h1 className="mb-10">{ headerData.title }</h1>
              <p className="fz-20">{ headerData.brief }</p>
              <a href="img/AP-CV-updated-2024.pdf" className="butn butn-underline mt-20">
                <span className="sub-title">Download My CV</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="img">
              <img src={headerData.picture} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="arrow-down">
        <span className="icon pe-7s-angle-down"></span>
      </div>
    </header>
  )
}

export default Header