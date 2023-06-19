"use client";
import { FaChevronDown } from "react-icons/fa";
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
  openSelect?: boolean;
  value: string;
}

const selectInputLabel = (label: string | undefined) => {
  return label ? <div className="min-w-fit mr-4">{label}</div> : null;
};

const OptionsHeader = ({ onClick, value }: OptionBoxProps) => {
  return (
    <div
      onClick={onClick}
      className="border-solid border-2 border-slate-200 rounded pl-2 pr-2 pt-1 pb-1 select-none"
    >
      <div className="flex justify-between">
        {value}
        <span className="relative top-1">
          <FaChevronDown />
        </span>
      </div>
    </div>
  );
};

const OptionsDropDown = ({ onClick, value }: OptionBoxProps) => {
  return (
    <li onClick={onClick} className="hover:bg-slate-100 p-2">
      {value}
    </li>
  );
};

export default function Select({
  options,
  selectLabel,
  defaultValue,
}: SelectProps) {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<SelectOptions>({
    name: "select",
    value: "none-select",
  });

  const selectClicked = (option: SelectOptions) => {
    setSelectedValue(option);
  };

  return (
    <div className="w-full flex">
      <div id="select-box" className="flex w-full flex-col">
        {/* selectInputLabel => 셀렉트 박스 옆에 표기할 라벨 유무에 따라 표시됨*/}
        {selectInputLabel(selectLabel)}

        <OptionsHeader
          onClick={() => setOpenSelect(!openSelect)}
          openSelect={openSelect}
          value={selectedValue.name}
        />
        {openSelect && (
          <ul className="border-solid border-2 border-slate-200 rounded select-none mt-1">
            {options.map((item) => (
              <OptionsDropDown
                key={item.value}
                value={item.name}
                onClick={() => {
                  selectClicked(item);
                  setOpenSelect(false);
                }}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
