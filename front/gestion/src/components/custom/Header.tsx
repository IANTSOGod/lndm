import { User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Confirm from "./Confirm";

interface BreadList {
  list: string[];
}

export default function Header({ list }: BreadList) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-[30px] pt-[10px] h-[50px] bg-gray-200">
      <Breadcrumb className="ml-[90px] mt-1">
        <BreadcrumbList>
          {list.map((content, index) => (
            <div className="flex" key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={`${content}`}>{content}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="mt-1"></BreadcrumbSeparator>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <User2
        className="ml-auto hover:bg-white hover:rounded"
        onClick={() => {
          navigate("/Profil");
        }}
      ></User2>
      <Confirm
        title="Do you want to exit ?"
        description="Exit our site"
      ></Confirm>
    </div>
  );
}
