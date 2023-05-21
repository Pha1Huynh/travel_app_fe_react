import { IButton } from '../../interfaces/components/button.interfacce';
import EllipsisIcon from '../EllipsisIcon/EllipsisIcon';

function Button(props: IButton) {
  const { text, type, size, eventOnClick, isDisabled } = props;
  let sizeCss = `button-size-${size}`;
  let typecss = `button-${type}`;
  let disabledCss = isDisabled === true && `button-disabled `
  console.log('check props button', props)
  return (
    <>
      <button className={`${typecss} ${sizeCss} ${disabledCss}`} onClick={() => { eventOnClick() }}>
        {text} <EllipsisIcon />
      </button>
    </>
  );
}

export default Button;
