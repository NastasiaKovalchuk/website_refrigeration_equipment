export const Button = ({ children, ...otherProps }) => {
  return (
    <button className={style.button} {...otherProps}>
      {children}
    </button>
  );
};
