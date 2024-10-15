import Header from "@/components/custom/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Profil() {
  const list = ["Profil", "General"];
  return (
    <div>
      <Header list={list}></Header>
      <div className="mt-[100px] ml-[200px]">
        <Label className="text-2xl ml-[150px]">Account</Label>
        <div className="flex gap-10">
          <div className="border-2 border-gray-500 rounded-[20px] w-[600px] h-[600px]"></div>
          <div className="border-2 border-gray-500 rounded-[20px] w-full h-[600px] mr-[200px] pt-[20px]">
            <Label className="text-2xl ml-[100px]">Profile</Label>
            <br></br>
            <Label className="text-gray-500 ml-[100px] ">
              The information can be edited
            </Label>
            <Separator className="border-2 border-gray-500"></Separator>

            <div className="grid grid-cols-2 gap-[50px]">
              <Input
                className="h-[50px] ml-[100px] mt-[50px] w-[400px]"
                placeholder="First Name"
              ></Input>
              <Input
                className="h-[50px] mt-[50px] w-[400px]"
                placeholder="Last Name"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
