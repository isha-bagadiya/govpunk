import React from "react";

const data = [
  {
    title: "Governance Proposal Analysis",
    description:
      "GovPunk will review DAO proposals thoroughly, assessing their feasibility, alignment with community goals, and potential impact. This will ensure that only well-thought-out, actionable proposals move forward for voting.",
    bgColor: "bg-[#B4CFEC26]",
  },
  {
    title: "Voting Insights",
    description:
      "GovPunk will generate data-driven voting insights by analyzing trends, member sentiments, and historical decisions. These insights will guide DAOs in making informed and strategic choices.",
    bgColor: "bg-[#46CBF026]",
  },
  {
    title: "Active Participation Metrics",
    description:
      "GovPunk will track and report active participation metrics, such as proposal engagement rates and voting activity. This will enable DAOs to measure and improve member involvement effectively.",
    bgColor: "bg-[#BF84EB26]",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "GovPunk will use AI-powered tools to offer actionable recommendations based on comprehensive data analysis. This will ensure every governance decision is supported by accurate and relevant data.",
    bgColor: "bg-[#589EE926]",
  },
  {
    title: "Community Engagement",
    description:
      "GovPunk will actively facilitate discussions by responding to community feedback and encouraging meaningful dialogue around governance activities. This will ensure members feel heard and engaged in decision-making.",
    bgColor: "bg-[#74F1EC26]",
  },
  {
    title: "Reporting and Analytics",
    description:
      "GovPunk will provide detailed governance reports, including metrics, voting outcomes, and insights. These reports will empower DAOs to understand their performance and make necessary adjustments for better governance.",
    bgColor: "bg-[#74ACE926]",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-0 md:p-2 lg:p-5 xl:p-10">
      {data.map((item, index) => (
        <div key={index} className={`${item.bgColor} p-8 md:p-10 lg:p-12 xl:p-14 rounded-[25px] sm:rounded-[40px]`}>
          <h2 className="text-[#CA1889] text-base md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
            {item.title}
          </h2>
          <p className="mt-2 text-[#474747] text-xs sm:text-sm lg:text-base">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
