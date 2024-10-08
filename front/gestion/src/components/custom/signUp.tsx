import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SignUp() {
  const [data, setData] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSelect = (value: string) => {
    setData({ ...data, role: value });
  };

  return (
    <form
      className="grid grid-cols-1 gap-[40px] mt-[100px] mb-[100px] mx-auto"
      onSubmit={handleSubmit}
    >
      <Label className="text-2xl">Sign up here</Label>
      <div className="grid grid-cols-1 gap-2">
        <Label className="ml-5">Username</Label>
        <Input
          placeholder="Enter a username"
          name="username"
          className="lg:w-[600px]"
          onChange={handleChange}
        ></Input>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <Label className="ml-5">Password</Label>
        <Input
          placeholder="Enter a password"
          name="password"
          type="password"
          onChange={handleChange}
        ></Input>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <Label className="ml-5">Your role</Label>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-[600px] mb-[50px]">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="prof">Teacher</SelectItem>
              <SelectItem value="secretary">Secretary</SelectItem>
              <SelectItem value="director">Director</SelectItem>
              <SelectItem value="prefet">Prefet</SelectItem>
              <SelectItem value="surv">Surveillant</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button>Create your account now</Button>
    </form>
  );
}
