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
            "Drove customer segmentation by analyzing behaviors and demographics to execute monthly marketing campaigns for a user base of 1M over two years, resulting in a monthly of revenue growth of 100M",
            "Utilized Tableau and HiveSQL to automate daily income reporting for 45 departments and stakeholders",
            "Developed user labels through User Behavior Analysis and spearheaded a cross-functional project with 3 departments to automate coupon distributions to target groups based on these labels, reducing 10 hours/week of workload for the team",
          ]}
        />
        <ExperienceData
          companyName="TENCENT Music"
          companyLocation="Shenzhen, China"
          jobPosition="Data Analyst Intern"
          jobDuration="Nov 2020 - Dec 2020"
          jobDescription={[
            "Designed a comprehensive group rating system that evaluated performances of music groups by using key metrics from characteristics of high-quality groups, leading to a 7% increase in engagement rate",
            "Implemented a loyalty program with tiered rewards on target groups, identified the group category by K-means and set tasks' thresholds by analyzing past data from same categories, driving a 26% ROI growth",
          ]}
        />
        <ExperienceData
          companyName="Lalamove"
          companyLocation="Shenzhen, China"
          jobPosition="Data Analyst Intern"
          jobDuration="May 2020 - Sep 2020"
          jobDescription={[
            "Processed collected data and provided price strategies for Fixed-Price Project, increasing orders by 30%",
            "Provided data analysis reports on user journey for new features using Funnel Analysis, resulting in a 2% increase in conversion rate after optimization",
          ]}
        />
      </div>
    </div>
  );
}

export default Experience;
