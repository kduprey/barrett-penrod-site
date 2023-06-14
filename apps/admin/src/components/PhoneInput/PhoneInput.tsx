import { TextInput, TextInputProps } from "@mantine/core";
import { ChangeEvent, ChangeEventHandler } from "react";

interface PhoneInputProps extends Omit<TextInputProps, "value" | "onChange"> {
  onChange: (value: string) => void;
  value: string;
}

export const PhoneInput = ({ onChange, value, ...props }: PhoneInputProps) => {
  const formatPhoneNumber = (input: string): string => {
    // Remove all non-digit characters
    const phoneNumber = input.replace(/\D/g, "");

    // Apply the phone number format
    let formattedPhoneNumber = phoneNumber.replace(
      /^(\d{1,3})(\d{3})(\d{3})(\d{4})$/,
      "+$1 ($2) $3-$4"
    );

    // Remove the leading "+" if the country code is not present
    if (!formattedPhoneNumber.startsWith("+")) {
      formattedPhoneNumber = formattedPhoneNumber.replace(/^(\+)/, "");
    }

    return formattedPhoneNumber;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    onChange(formattedPhoneNumber);
  };

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      placeholder="+1 (123) 456-7890"
      type="tel"
      pattern="\+\d{1,3} \(\d{3}\) \d{3}-\d{4}"
      maxLength={19}
      {...props}
    />
  );
};
