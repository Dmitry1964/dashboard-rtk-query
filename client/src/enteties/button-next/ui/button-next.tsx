import cls from './button-next.module.scss';  
import cn from 'classnames';


type ButtonNextProps = {
  modePrev?: boolean;
}


const ButtonNext = ({modePrev} : ButtonNextProps) => {
  return (
    <button className={cn(cls.button_next, modePrev ? cls.button_next__reverse : '')}>
      <img src="/content/svg/icon-arrow-right.svg" width={16} height={16} alt="Стрелка" />
    </button>
  );
}

export default ButtonNext;