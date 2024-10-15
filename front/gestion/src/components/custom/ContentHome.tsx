import Benefits from "./Benefits";
import StudentsChart from "./StudentsChart";

interface ContentHomeProps {
    titleBenefits: string;
    descBenefits: string;
    progressBenefits: string;
    limitBenefits: string;
    titleStudents: string;
    descStudents: string;
    progressStudents: string;
  }
  
  export default function ContentHome({
    titleBenefits,
    descBenefits,
    progressBenefits,
    limitBenefits,
    titleStudents,
    descStudents,
    progressStudents,
  }: ContentHomeProps) {

    return (
      <div className="flex mt-[50px] ml-[100px] gap-[50px]">
        <div className="grid grid-cols-1 gap-[50px]">
          <Benefits
            title={titleBenefits}
            description={descBenefits}
            progress={progressBenefits}
            limit={limitBenefits}
          />
          <StudentsChart
            title={titleStudents}
            description={descStudents}
            progress={progressStudents}
          />
        </div>
        <div className="border-2 border-gray-500 rounded-[20px] w-full mr-[50px]">
        </div>
      </div>
    );
  }
  