function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{
          backgroundColor: color,
          color: "white",
          alignItems: "flex-start",
          fontWeight: 700,
          height: 40,
          width: 125,
          border: color,
          borderRadius: 10,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
