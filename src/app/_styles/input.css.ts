import { style } from "@vanilla-extract/css";
import { vars } from "./variable.css";

export const Input = style({
  display: 'inline-block',
  width: '100%',
  height: '56px',
  padding: '0 15px',
  border: `1px solid #ddd`,
  borderRadius: '5px',
  color: vars.color.fontColor,
  '::placeholder': {
    fontSize: vars.font.size.small
  }
})