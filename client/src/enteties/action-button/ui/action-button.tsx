import cls from './action-button.module.scss';
import cn from 'classnames';

type ActionButtonProps = {
  modeTransparent: boolean;
  children: React.ReactNode;
}


const ActionButton = ({ modeTransparent, children}: ActionButtonProps) => { 
  return (
    <button
      className={cn(cls.action_button, {
        [cls.action_button__transparent]: modeTransparent,
      })}
      >
        {children}
    </button>
  );
}

export default ActionButton;