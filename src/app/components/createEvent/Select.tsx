import React from "react";
import Select from "react-select";

export default function SelectField({
  label,
  id,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  options: any[];
  onChange: any;
}) {
  return (
    <div className="mb-[20px]">
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-main">
        {label}
      </label>
      <Select
        id={id}
        name={name}
        value={options.find((option) => option.value === value)}
        options={options}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        styles={{
          control: (provided, isFocused) => ({
            ...provided,
            borderRadius: "8px",
            padding: "2px",
            backgroundColor: "rgb(249,250,251)",
          }),
          menu: (provided) => ({
            ...provided,
            borderRadius: "8px",
            zIndex: "10",
            padding: "5px",
            borderBottomWidth: "2px",
          }),
          option: (provided, { isFocused, isSelected }) => ({
            ...provided,
            position: "relative",
            cursor: "pointer",
            "&:not(:last-child):after": {
              content: '""',
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
              borderBottom: "1px solid grey",
            },
            backgroundColor: isSelected ? "#7B61FF" : "white",
            borderRadius: isSelected ? "8px" : 0,
            color: isSelected ? "white" : "gray",

            "&:hover": {
              color: "#45434e",
            },
          }),
        }}
        className="text-gray-900 text-sm font-poppins cursor-pointer"
      />
    </div>
  );
}
