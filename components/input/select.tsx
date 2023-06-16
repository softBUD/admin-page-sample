"use client";
import React, {
  MouseEventHandler,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

// selectLabel: 박스와 같이 표시할 소제목
// defaultValue: 랜더링시 기본값
interface SelectProps {
  selectLabel?: string;
  defaultValue?: string;
  options: SelectOptions[];
}

// value: 해당 옵션이 가진 값
// name: 사용자에게 보여줄 옵션 명
type SelectOptions = {
  value: string | number;
  name: string;
};

interface OptionBoxProps {
  onClick: MouseEventHandler;
  value: string;
}

const OptionsHeader = ({ onClick, value }: OptionBoxProps) => {
  return (
    <li
      onClick={onClick}
      className="border-solid border border-slate-200 rounded"
    >
      {value}
    </li>
  );
};

const OptionsDropDown = ({ onClick, value }: OptionBoxProps) => {
  return (
    <li
      onClick={onClick}
      className="border-solid border border-slate-200 rounded"
    >
      {value}
    </li>
  );
};

export default function Select({
  options,
  selectLabel,
  defaultValue,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<SelectOptions>({
    name: "select",
    value: "none-select",
  });

  const selectClicked = (value: SelectOptions) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-full flex">
      {selectLabel && <div className="min-w-fit mr-4">{selectLabel}</div>}
      <ul id="select-box" className="flex w-full flex-col">
        <OptionsHeader
          onClick={() => console.log(selectedValue)}
          value={selectedValue.name}
        />
        {options.map((item) => (
          <OptionsDropDown
            key={item.value}
            value={item.name}
            onClick={() => selectClicked(item)}
          />
        ))}
      </ul>
    </div>
  );
}
