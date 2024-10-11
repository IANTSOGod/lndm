import { User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import Confirm from "./Confirm";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-[30px] pt-[10px] h-[50px] bg-gray-200">
      <Breadcrumb className="ml-[90px] mt-1">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <User2
        className="ml-auto hover:bg-white hover:rounded"
        onClick={() => {
          navigate("/profil");
        }}
      ></User2>
      <Confirm
        title="Do you want to exit ?"
        description="Exit our site"
      ></Confirm>
    </div>
  );
}
