import './button.css'

const Button = ({ children, onClick, className }) => {
    return (
        <button className={className || 'button'} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button