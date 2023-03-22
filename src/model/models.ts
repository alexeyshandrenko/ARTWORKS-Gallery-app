import { ReactNode, InputHTMLAttributes, ChangeEvent } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export interface HomeImageProps {
  id: number;
  name: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export interface TextareaProps {
  className?: string;
  type?: string;
  placeholder?: string;
  name: string;
  label: string;
  value?: string;
  onChange: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface ButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: "primary" | "secondary"; // two styling options
  disabled?: boolean; // make the button disabled or not
  type: "button" | "submit" | "reset";
}

export interface FormProps {
  name: string;
  email: string;
  message: string;
}

export interface PictureProps {
  id: number;
  name: string;
  type: string;
  title?: string | undefined;
  titleEn?: string | undefined;
  description?: string | undefined;
  descriptionEn?: string | undefined;
}

export interface PictureDescriptionProps {
  title: string;
  description: string;
  type: string;
}

export interface ModalProps {
  name: string;
  title?: string;
  type: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface MenuProps {
  locale: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
