import ExperienceData from "./ExperienceData";
import "./ExperienceStyle.css";

function Experience() {
  return (
    <div className="experience-container" id="experience">
      <h1 className="title-text">Experience</h1>
      <div className="experience-body">
        <ExperienceData
          companyName="SF Express"
          companyLocation="Shenzhen, China"
          jobPosition="Data Scientist II"
          jobDuration="Mar 2021 - Jul 2023"
          jobDescription={[
            "Designed user-centric strategies for clustered groups, resulting in a monthly revenue growth of 100M",
            "Utilized Tableau and HiveSQL to automate daily income reporting for 45 departments and stakeholders",
            "Developed a customer profiling system based on customer behavior,leveraging business insights to target specific user segments;utilized return-on-investment analysis to tailor personalized campaigns",
            "Spearheaded a Coupon System to automate sending coupons to target groups with the collaboration of 3 departments, successfully reducing weekly deployment time from 20 hours to 10 hours",
          ]}
        />
        <ExperienceData
          companyName="TENCENT Music"
          companyLocation="Shenzhen, China"
          jobPosition="Data Analyst Intern"
          jobDuration="Nov 2020 - Dec 2021"
          jobDescription={[
            "Developed an administrator system to evaluate and assess the performance of music groups by SQL",
            "Leveraged K-means analysis on historical data of superstar birthday topic groups to predict future page views and strategically set support tasks, driving a remarkable 26% ROI growth",
          ]}
        />
        <ExperienceData
          companyName="Lalamove"
          companyLocation="Shenzhen, China"
          jobPosition="Data Analyst Intern"
          jobDuration="May 2020 -- Sep 2020"
          jobDescription={[
            "Identified, tracked and resolved issues related to products, delivered data insights to drive decision-making, resulting in a 2% increase in respond rate and 3% improvement in pairing rate",
            "Processed collected data and provided price strategies for Fixed-Price Project, increasing orders by 30%",
          ]}
        />
      </div>
    </div>
  );
}

export default Experience;
