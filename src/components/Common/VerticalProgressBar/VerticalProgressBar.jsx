import classes from "./VerticalProgressBar.module.css";

const VerticalProgressBar = (props) => {
  const { bgcolor, percentage, amount, title } = props;

  const containerStyles = {
    margin: "0px 50px",
    height: "100%",
    width: 20,
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    marginBottom: 20,
    verticalAlign: "bottom",
    position: "relative",
  };

  const fillerStyles = {
    height: `${percentage}%`,
    width: "100%",
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    position: "absolute",
    bottom: 0,
  };

  return (
    <div className={classes.root}>
      <div style={containerStyles}>
        <div style={fillerStyles} />
      </div>
      <h5>{title}</h5>
      <h2>{amount}</h2>
    </div>
  );
};

export default VerticalProgressBar;
