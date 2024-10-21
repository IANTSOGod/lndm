import { useState } from "react";
import Aside from "@/components/custom/Aside";
import Header from "@/components/custom/Header";
import ContentHome from "@/components/custom/ContentHome";
import ContentPersonal from "@/components/custom/ContentPersonal";

export default function Home() {
  const [num, setNum] = useState<string>("0");

  const pathList = [
    "Home",
    "Personal and students",
    "Results",
    "Packages",
    "Analytics",
  ] as string[];

  const content = [
    <ContentHome
      titleBenefits="Bénéfices financiers"
      descBenefits="Benefits from the last 2 years"
      progressBenefits="More than 30%"
      limitBenefits="January-June"
      titleStudents="Current students"
      descStudents="All the students stats"
      progressStudents="Descrease of the number of students"
    />,
    <ContentPersonal></ContentPersonal>,
  ];
  const BreadList = [pathList[parseInt(num)]] as string[];

  return (
    <div>
      <Aside num={num} setNum={setNum}></Aside>
      <div>
        <Header list={BreadList}></Header>
        <div>{content[parseInt(num)]}</div>
      </div>
    </div>
  );
}
