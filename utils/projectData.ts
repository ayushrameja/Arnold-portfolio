import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "hospitality revenue and operations analytics",
    company: "Hampton Inn by Hilton",
    role: "Analyst",
    period: "May 2023 - Present",
    location: "Vancouver, BC, Canada",
    summary:
      "Built analytics workflows for reservations, billing controls, and inventory planning to improve reporting speed and reduce operational waste.",
    skills: [
      "Operational Analytics",
      "Forecasting",
      "Executive Reporting",
      "Data Visualization",
      "Excel",
      "Power BI",
    ],
    metrics: [
      { label: "Billing Errors", value: "-25%" },
      { label: "Upsell Conversion", value: "90%" },
      { label: "Food Waste", value: "-30%" },
      { label: "Operational Efficiency", value: "+40%" },
    ],
    highlights: [
      "Designed analytical controls to identify and resolve billing discrepancies.",
      "Forecasted reservation performance and conversion trends to support upselling strategy.",
      "Redesigned seasonal inventory planning models using demand pattern analysis.",
      "Delivered dashboard-driven insights for revenue optimization and cost reduction.",
    ],
  },
  {
    id: 2,
    title: "cloud data platform pipelines and data marts",
    company: "Tata Technologies",
    role: "Data Engineer",
    period: "Jun 2020 - Nov 2022",
    location: "Pune, India",
    summary:
      "Designed and maintained secure, multi-terabyte ingestion and transformation pipelines across Databricks, Snowflake, and Azure services for downstream analytics consumption.",
    skills: [
      "Databricks SQL",
      "Unity Catalog",
      "Snowflake",
      "Azure Data Factory",
      "Azure Synapse",
      "SSMS",
    ],
    metrics: [
      { label: "Infra Costs", value: "-20%" },
      { label: "Users Enabled", value: "2,500+" },
      { label: "Data Mart Delivery", value: "+20%" },
      { label: "Pipeline Availability", value: "99.9%" },
    ],
    highlights: [
      "Built secure pipelines to ingest, transform, and enrich multi-terabyte datasets.",
      "Moved incremental and full-load data from OLTP systems into analytics-ready marts.",
      "Accelerated development and access management for two data marts using SSMS.",
      "Provided on-call operational support for critical job failures and pipeline health.",
    ],
  },
  {
    id: 3,
    title: "transformation rules, validation, and stakeholder data quality",
    company: "Tata Technologies",
    role: "Data Engineer",
    period: "Jun 2020 - Nov 2022",
    location: "Pune, India / US stakeholders",
    summary:
      "Drove data quality validation and business-rule implementation by coordinating with analysts, SMEs, and US-based stakeholders across secure transformation workflows.",
    skills: [
      "Business Rules",
      "Data Validation",
      "Databricks SQL",
      "Snowflake Worksheets",
      "Regulatory Compliance",
      "Stakeholder Alignment",
    ],
    metrics: [
      { label: "Transformation Rules", value: "50+" },
      { label: "Client Collaboration", value: "US-based" },
      { label: "Investigation Mode", value: "Ad-hoc SQL" },
      { label: "Outcome", value: "Faster MTTR" },
    ],
    highlights: [
      "Documented and implemented 50+ business transformation rules aligned to domain needs.",
      "Partnered with clients and stakeholders on validation strategy and secure data practices.",
      "Ran ad-hoc investigations in Databricks SQL and Snowflake to speed root-cause analysis.",
      "Presented quality metrics and transformation outcomes to keep delivery aligned.",
    ],
  },
];
