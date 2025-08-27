import { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SelectPair({
  label,
  name,
  required,
  placeholder,
  options,
  description,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  options: { label: string; value: string }[];
  description?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2 flex flex-col items-start w-full">
      <Label
        className="flex flex-col items-start"
        onClick={() => setOpen(true)}
      >
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>
      <Select
        name={name}
        required={required}
        onOpenChange={setOpen}
        open={open}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
