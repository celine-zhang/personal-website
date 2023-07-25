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
            "Created customized marketing strategies for 1 million business-users, leveraging customers' behavior and profiles, leading to a remarkable monthly revenue growth of 100M",
            "Developed three automated components for the team: daily income reporting, monthly marketing campaign deployment, and weekly coupon sending, resulting in a 10-hour reduction in weekly working time",
          ]}
        />
        <ExperienceData
          companyName="TENCENT Music"
          companyLocation="Shenzhen, China"
          jobPosition="Data Analyst Intern"
          jobDuration="Nov 2020 - Dec 2021"
          jobDescription={[
            "Developed an administrative system using SQL to evaluate and assess the performance of music groups, empowering marketing department with valuable insights for targeted resource allocation",
            "Leveraged K-means analysis on historical data of superstar birthday topic groups to predict future page views and strategically set support tasks, driving a remarkable 26% ROI growth",
          ]}
        />
        <ExperienceData
          companyName="Lalamove"
          companyLocation="Shenzhen, China"
          jobPosition="Data Analyst Intern"
          jobDuration="May 2020 - Sep 2020"
          jobDescription={[
            "Processed collected data and provided price strategies for Fixed-Price Project, increasing orders by 30%",
            "Identified, tracked and resolved issues related to products, delivered data insights to drive decision-making, resulting in a 2% increase in respond rate and 3% improvement in pairing rate",
          ]}
        />
      </div>
    </div>
  );
}

export default Experience;
