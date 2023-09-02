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
            "Drove customer segmentation to solve an unattended customer situation by analyzing user behavior and industry seasonality, executed 60+ campaigns for target group, creating revenue growth of 100M/month",
            "Developed 5 daily-updated dashboards focusing on customers, regions and campaigns to streamline interdepartmental communication and ensure accurate data insights for 45 departments and stakeholders",
            "Created 40+ user labels incorporating behavioral attributes and features extracted by using Random Forest; built a coupon distribution system based on these labels to automate weekly campaign execution, reducing 10 hours/week of workload for the team",
          ]}
        />
        <ExperienceData
          companyName="TENCENT Music"
          companyLocation="Shenzhen, China"
          jobPosition="Data Analyst Intern"
          jobDuration="Nov 2020 - Dec 2020"
          jobDescription={[
            "Designed a rating system that evaluated performance of music groups by using attributes of high-quality groups, post tasks aligned with rating criteria within groups, leading to a 7% increase in engagement rate",
            "Implemented a loyalty program with tiered rewards on target groups, identified the group category by K-means and set tasks' thresholds by analyzing past data from same categories, driving a 26% ROI growth",
          ]}
        />
      </div>
    </div>
  );
}

export default Experience;
