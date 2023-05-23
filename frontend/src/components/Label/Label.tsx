import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

const Label = (props: LabelProps) => {
  return (
    <label
      {...props}
      className="w-full text-sm font-normal text-slate-900"
    >
      {props.text}
    </label>
  );
}

export default Label