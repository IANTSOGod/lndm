import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const donnee = data as User;
    if (donnee.username == "iantso") {
      navigate("/Home");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 mx-auto p-5 grid grid-cols-1 gap-[10px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] max-w-full"
    >
      <Label className="text-2xl mt-[50px] mb-[30px]">Bienvenue à LNDM</Label>

      <div className="grid grid-cols-1">
        <Label className="text-lg ml-5">Username</Label>
        <Input
          placeholder="Enter your username here"
          name="username"
          onChange={handleChange}
          className="w-full"
        ></Input>
      </div>

      <div className="grid grid-cols-1">
        <Label className="text-lg ml-5">Password</Label>
        <Input
          placeholder="Enter your password here"
          name="password"
          onChange={handleChange}
          className="w-full"
          type="password"
        ></Input>
      </div>

      <Button className="mt-[30px]" type="submit">
        Enter
      </Button>

      <div className="flex items-center justify-center mb-[30px]">
        <Separator className="w-1/3"></Separator>
        <Label className="text-center">or</Label>
        <Separator className="w-1/3"></Separator>
      </div>

      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => navigate("/signUp")}
      >
        Create account
      </Button>
    </form>
  );
}
