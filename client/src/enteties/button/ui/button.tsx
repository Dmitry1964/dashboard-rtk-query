import { Link } from 'react-router-dom';
import cls from './button.module.scss';

type ButtonProps = {
 children: React.ReactNode;
 href: string;
    // Add any props if needed in the future
}

const Button = ({children, href} : ButtonProps) => {
    return (
      <Link to={href} className={cls.button}>{children}</Link> 
    );
}   


export default Button;