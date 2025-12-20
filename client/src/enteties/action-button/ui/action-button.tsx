import cls from './action-button.module.scss';
import cn from 'classnames';

type ActionButtonProps = {
  modeTransparent: boolean;
  children: React.ReactNode;
  handleClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}


const ActionButton = ({ modeTransparent, children, handleClick}: ActionButtonProps) => { 
  return (
    <button
      className={cn(cls.action_button, {
        [cls.action_button__transparent]: modeTransparent,
      })}
      onClick={(evt) => handleClick(evt)}
      >
        {children}
    </button>
  );
}

export default ActionButton;