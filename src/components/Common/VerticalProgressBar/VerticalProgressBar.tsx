import classes from "./VerticalProgressBar.module.css";

interface VerticalProgressBarParams {
  bgcolor: string;
  percentage: number;
  amount: number;
  title: any;
}

const VerticalProgressBar = (props: VerticalProgressBarParams) => {
  const { bgcolor, percentage, amount, title } = props;

  const containerStyles = {
    margin: "0px 50px",
    height: "100%",
    width: 12,
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    marginBottom: 20,
    verticalAlign: "bottom",
    position: "relative" as "relative",
  };

  const fillerStyles = {
    height: `${percentage}%`,
    width: "100%",
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    position: "absolute" as "absolute",
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
