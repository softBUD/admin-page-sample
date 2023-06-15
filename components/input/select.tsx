import React from "react";

interface SelectProps {
  name: string;
  form?: string;
}

export default function Select({ name, form }: SelectProps) {
  return (
    <select name={name} form={form}>
      <option>옵션1</option>
      <option>옵션2</option>
      <option>옵션3</option>
    </select>
  );
}
