import React from "react";

const Overview = ({ readMore, handleReadMore }) => {
  return (
    <div className="product_page_overview">
      {/* job overview */}
      <div className="product_page_overview_joboverview">
        <div className="product_page_overview_joboverview_title">
          Job Overview:
        </div>
        <div className="product_page_overview_joboverview_content">
          <p>
            The Entrepreneurship Network (TEN) is a community based Edu-Tech
            group whose objective is to provide quality learning
          </p>
          <p className="product_page_overview_joboverview_content2">
            and expertise. We are seeking to hire Audio Content Creators to join
            our team. If you're a passionate for your work, TEN Company is a
            great company for you. Don't hesitate to apply.This Internship is
            exclusively for the International applicants!!
          </p>
        </div>

        {readMore && (
          <>
            <div className="product_page_overview_joboverview_content">
              <p>Career Counselling:</p>
              <p className="product_page_overview_joboverview_content2">
                You will get an expert advice from an experienced person holding
                10+ years of experienced in corporate industry and an alumni of
                IIT,Wharton and Delhi College Of Engineering.You will get 4-5
                career counselling session in this program.
              </p>
            </div>

            {/* responsibilities */}
            <div className="product_page_overview_joboverview_title">
              Responsibilities
            </div>
            <div className="prodcut_page_overview_ol">
              <p>
                1.Producing audio to accompany all types of marketing
                collateral, from educational content and social media assets to
                longer-form reports and advertisements
              </p>
              <p className="product_page_overview_li">
                2.Working closely with marketing and content creation teams
              </p>
              <p className="product_page_overview_li">
                3.Localizing existing audios
              </p>
              <p className="product_page_overview_li">
                4.Coordinating with external teams to ensure consistency
              </p>
            </div>

            {/* perks */}
            <div className="product_page_overview_joboverview_title">
              Perks:
            </div>
            <div className="prodcut_page_overview_ol">
              <p>1.Flexible timings, work any time during the day</p>
              <p className="product_page_overview_li">
                2.You can work from comfort of your home
              </p>
              <p className="product_page_overview_li">
                3.You get rich experience of working in a corporate like
                environment, involving HR and GM teams
              </p>
              <p className="product_page_overview_li">4.Learning atmosphere</p>
              <p className="product_page_overview_li">
                5.You get hands on experience in your profile
              </p>
              <p className="product_page_overview_li">
                6.The internship is for 2 months
              </p>
            </div>

            {/* resume-building */}
            <div className="product_page_overview_joboverview_title">
              Resume Building
            </div>
            <div className="prodcut_page_overview_ol">
              <p>1.Get any job you want</p>
              <p className="product_page_overview_li">
                2.Build the perfect resume (using a format I have successfully
                used for more than 20 years)
              </p>
              <p className="product_page_overview_li">
                3.Interview better than anyone else (you will be able to answer
                ANY interview question and turn your weaknesses into strengths)
              </p>
              <p className="product_page_overview_li">
                4.Build the perfect LinkedIn profile (learn how to get more
                recruiters & employers to find you)
              </p>
              <p className="product_page_overview_li">
                5.Network better than anyone else so you can get your dream job
                (or even get customers etc),
              </p>
            </div>

            {/*LinkedIn*/}
            <div className="product_page_overview_joboverview_title">
              LinkedIn
            </div>
            <div className="prodcut_page_overview_ol">
              <p>
                LinkedIn is one of the most powerful professional and business
                networking tools to find jobs, connect with like-minded people
                and share your life experience and business with your fellow
                LinkedIn members. With over 500 million users, LinkedIn has made
                its presence in more than 200 countries around the world. So one
                can’t neglect how much crucial is to boost the LinkedIn Profile
                which can help you grow in your white-collar career and open new
                gateway of opportunities for you. This course is basically for
                those people who wants to connect with like-minded people on
                LinkedIn and enhance their LinkedIn profile. What will you
                learn:
              </p>
              <p className="product_page_overview_li">
                1. Learn to create professional LinkedIn profile
              </p>
              <p className="product_page_overview_li">
                2. Able to target recruiters
              </p>
              <p className="product_page_overview_li">
                3. Professionally showcase your skills online and use it as a
                resume.
              </p>
            </div>
          </>
        )}

        {/* read-more */}
        <span
          className="prodcut_page_overview_readmore"
          onClick={handleReadMore}
        >
          {readMore ? "Less" : "Read more"}
        </span>
      </div>
    </div>
  );
};

export default Overview;
