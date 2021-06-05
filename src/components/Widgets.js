import React from "react";
import "./Widgets.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import LinkedInTextLogo from "../icons/LinkedInLoginLogo.svg";

function Widgets() {
  function WidgetItem(props) {
    return (
      <div className="widget__item">
        <img src={props.img} alt="" className="widget__pfp" />
        <div className="widget__info">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
          <div className="button__follow">
            <AddIcon className="icon" />
            <p>Follow</p>
          </div>
        </div>
      </div>
    );
  }

  function LinkedInLearning(props) {
    return (
      <div className="widget__courseItem">
        <h5>{props.title}</h5>
        <p>{props.author}</p>
      </div>
    );
  }

  return (
    <div className="widget">
      <div className="widget__top">
        <div className="widget__title">
          <h3>Add to your feed</h3>
          <InfoOutlinedIcon />
        </div>
        <div className="widgets">
          <WidgetItem
            title="Melinda Gates"
            img="https://cdn.geekwire.com/wp-content/uploads/2017/10/melinda-gates-630x523.jpg"
            description="Co-chair of the Bill & Melinda Gates Foundation"
          />
          <WidgetItem
            title="Clement Mihailescu"
            description="Co-Founder & CEO, AlgoExpert | Ex-Google & Ex-Facebook Software Engineer"
            img="https://yt3.ggpht.com/ytc/AAUvwnhuwbq9AMf5ub-3VPuJ2KLuLHizmzJgI6a1iR-7VKI=s900-c-k-c0x00ffffff-no-rj"
          />
          <WidgetItem
            title="Nestlé"
            description="Company • Food & Beverages"
            img="https://cdn.easyparapharmacie.co.uk/media/easysoft/home/manufacturer/NESTLE.jpg"
          />
        </div>
        <p className="recommendations">
          View all recommendations{" "}
          <ArrowForwardOutlinedIcon className="arrow" />
        </p>
      </div>

      <div className="widget__top">
        <div className="widget__title">
          <h3>Today’s most viewed courses</h3>
          <InfoOutlinedIcon />
        </div>
        <ol className="widget__courselist">
          <li>
            <LinkedInLearning
              title="What is Graphic Design?"
              author="Sean Adams"
            />
          </li>
          <li>
            <LinkedInLearning title="Unconscious Bias" author="Stacy Gordon" />
          </li>

          <li>
            <LinkedInLearning
              title="The Six Morning Habits of High Performers"
              author="Pete Mockaitis"
            />
          </li>
        </ol>
        <p className="recommendations">
          Show more on LinkedIn Learning{" "}
          <ArrowForwardOutlinedIcon className="arrow" />
        </p>
      </div>

      <div className="widget__footer">
        <div className="anchortags">
          <a href="/" alt="about">
            About
          </a>
          <a href="/" alt="accessibility">
            Accessibility
          </a>
          <a href="/" alt="helpcenter">
            Help Center
          </a>
          <a href="/" alt="privacyterms">
            Privacy & Terms
          </a>
          <a href="/" alt="adchoices">
            Ad Choices
          </a>
          <a href="/" alt="advertising">
            Advertising
          </a>
          <a href="/" alt="business">
            Business Services
          </a>
          <a href="/" alt="linkedinapp">
            Get the LinkedIn app
          </a>
          <a href="/" alt="moreinfo">
            More
          </a>
        </div>
        <div className="footercopyright">
          <img src={LinkedInTextLogo} alt="linkedinlogo" className="logo" />
          <p>LinkedIn Corporation © 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
