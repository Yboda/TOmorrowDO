import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from '../_styles/button.css';
import { vars } from '../_styles/variable.css';

type Size = 'small' | 'medium' | 'large' | 'full';
type Color = 'point' | 'outline'
type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  size?: Size;
  color?: Color;
};

function Button({ children, type = 'button', onClick, size = 'small', color = 'point' }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={style.button}
      style={assignInlineVars({
        [style.width]: vars.button.size[size].width,
        [style.height]: vars.button.size[size].height,
        [style.bdWidth]: vars.button.size[size].borderWidth,
        [style.fontSize]: vars.button.size[size].fontSize,
        [style.bgColor]: vars.button.color[color].bgColor,
        [style.color]: vars.button.color[color].color,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
