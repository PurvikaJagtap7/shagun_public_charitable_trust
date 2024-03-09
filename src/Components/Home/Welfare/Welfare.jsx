import React from "react";
import Welfarecomponent from "./Welfarecomponent";
import team from "./assets/team.png";
import history from "./assets/history.png";
import mission from "./assets/mission.png";

const Welfare = () => {
  return (
    <div className="h-full py-20 flex md:flex-col items-center justify-center">
      

      <div className="welfare-containers flex flex-col xl:flex-row  md:flex-col gap-20 items-center justify-center mt-20">
        <Welfarecomponent
          imgSrc={team}
          textContent={`Our amazing team of regulars and part-time volunteers are committed to helping others. We take our convictions and turn them into action. Think you would be a good fit? Get in touch for more information!`}
          heading={"Our Team"}
        />
        <Welfarecomponent
          imgSrc={history}
          textContent={`Seeing a need for energetic, nonprofit work in this area, we formed our organization to provide sensible solutions. We've consistently grown since then, all thanks to the helping hands of this amazing community!`}
          heading={"Our History"}
        />
        <Welfarecomponent
          imgSrc={mission}
          textContent={`We focus on making the maximum positive effort for our community. Our members and volunteers provide the momentum that helps us affect change. Using data driven models, we provide solutions that make a long-lasting difference.`}
          heading={"Our Mission"}
        />
      </div>
    </div>
  );
};

export default Welfare;
