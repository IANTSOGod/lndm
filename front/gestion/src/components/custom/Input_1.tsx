import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps {
  title: string;
  type: string;
  name: string;
  placeholder: string;
}

export function InputWithLabel({ title, type, name, placeholder }: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={`${type}`}>{title}</Label>
      <Input type={`${type}`} name={`${name}`} placeholder={`${placeholder}`} />
    </div>
  );
}
