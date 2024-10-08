import Login from "@/components/custom/login";

export default function Landing() {
  return (
    <div className="flex mt-[100px] ml-[100px] mr-[100px] border-4 border-black shadow-[10px_10px_0px_0px_rgba(128,128,128,0.5)]">
      <img
        src="./assets/landing.jpg"
        className="w-[1000px] hidden lg:block"
      ></img>
      <Login></Login>
    </div>
  );
}
