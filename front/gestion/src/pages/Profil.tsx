import { AvatarProfil } from "@/components/custom/AvatarProfil";
import Header from "@/components/custom/Header";
import { InputWithLabel } from "@/components/custom/Input_1";
import { Button } from "@/components/ui/button";
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
          <div className="border-2 border-gray-500 rounded-[20px] w-[600px] h-[600px]">
            <AvatarProfil></AvatarProfil>
            <Label className="flex align-center justify-center mt-[20px] text-2xl">
              Username
            </Label>
            <Separator className="w-full bg-gray-500 mt-[250px]"></Separator>
            <Button className="w-4/5 mt-[20px] ml-[35px] hover:bg-red-500">
              Supress your account
            </Button>
          </div>
          <div className="border-2 border-gray-500 rounded-[20px] w-full h-[600px] mr-[200px] pt-[20px]">
            <Label className="text-2xl ml-[100px]">Profile</Label>
            <br></br>
            <Label className="text-gray-500 ml-[100px] ">
              The information can be edited
            </Label>
            <Separator className="border-2 border-gray-500"></Separator>

            <div className="grid grid-cols-2 gap-[50px] pl-[100px] pt-[50px]">
              <InputWithLabel
                title="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
              ></InputWithLabel>
              <InputWithLabel
                title="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
              ></InputWithLabel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
