import * as style from '../_styles/flex.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type Props = {
  children?: React.ReactNode;
  options?: {
    fd?: 'row' | 'column';
    jc?: 'center' | 'space-between';
    ai?: 'center' | 'space-between';
    gap?: string;
    width?: string;
    height?: string;
  };
};

function Flex({ children, options }: Props) {
  return (
    <div
      className={style.flex}
      style={assignInlineVars({
        [style.fd]: options?.fd ? options?.fd : 'row',
        [style.jc]: options?.jc,
        [style.ai]: options?.ai,
        [style.gap]: options?.gap,
        [style.width]: options?.width,
        [style.height]: options?.height,
      })}
    >
      {children}
    </div>
  );
}

export default Flex;
