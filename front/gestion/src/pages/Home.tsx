import Aside from "@/components/custom/Aside";
import Benefits from "@/components/custom/Benefits";
import Header from "@/components/custom/Header";

export default function Home() {
  return (
    <div>
      <Aside></Aside>
      <div>
        <Header></Header>
        <div className="ml-[80px] mt-[20px] w-[600px]">
          <Benefits></Benefits>
        </div>
      </div>
    </div>
  );
}
