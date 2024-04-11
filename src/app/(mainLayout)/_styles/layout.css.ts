import { Container } from "@/app/_styles/container.css";
import { vars } from "@/app/_styles/variable.css";
import { style } from "@vanilla-extract/css";

export const container = style(new Container({ backgroundColor: vars.color.bgColor }).options);