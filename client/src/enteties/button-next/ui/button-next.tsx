import cls from './button-next.module.scss';
import cn from 'classnames';


type ButtonNextProps = {
  modePrev?: boolean;
}


const ButtonNext = ({ modePrev}: ButtonNextProps) => {
  
  
  return (
    <button
      className={cn(cls.button_next, {
        [cls.button_next__reverse]: modePrev,
      })}
      >
      <img src="/content/svg/icon-arrow-right.svg" width={16} height={16} alt="Стрелка" />
    </button>
  );
}

export default ButtonNext;