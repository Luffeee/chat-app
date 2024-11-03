'use client';

import React from "react";
import ReactSelect, { ActionMeta, MultiValue } from "react-select";

interface OptionType {
    label: string;
    value: string | number;
}

interface SelectProps {
    label: string;
    value?: MultiValue<OptionType>; // `value` should also be an array of OptionType for isMulti
    onChange: (value: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void;
    options: OptionType[];
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
    label, value, onChange, options, disabled
}) => {
  return (
    <div className="z-[100]">
        <label className="block text-sm font-medium leading-6 text-gray-900">
            {label}
        </label>
        <div className="mt-2">
            <ReactSelect 
                isDisabled={disabled} 
                value={value} 
                onChange={onChange} 
                isMulti 
                options={options} 
                menuPortalTarget={document.body} 
                styles={{
                    menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999
                    })
                }}
                classNamePrefix="react-select"
            />
        </div>
    </div>
  )
}

export default Select;
