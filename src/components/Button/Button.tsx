import { IButton } from '../../interfaces/components/button.interfacce';
import EllipsisIcon from '../EllipsisIcon/EllipsisIcon';

function Button(props: IButton) {
  const { text, type, size } = props;
  let sizeCss = `button-size-${size}`;
  let typecss = `button-${type}`;
  return (
    <>
      <button className={`${typecss} ${sizeCss}`}>
        {text} <EllipsisIcon />
      </button>
    </>
  );
}

export default Button;
