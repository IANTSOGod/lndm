import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ExitIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

interface ConfirmProps {
  title: string;
  description: string;
}

export default function Confirm({ title, description }: ConfirmProps) {
  const navigate = useNavigate();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ExitIcon className="mr-[30px] w-[20px] h-[20px] mt-1 hover:bg-white hover:rounded"></ExitIcon>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              navigate("/");
            }}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
