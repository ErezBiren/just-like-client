const ProgressBar = (props) => {
  const { bgcolor, completed, percentage } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    marginBottom: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const completedStyles = {
    height: "100%",
    textAlign: "left",
    backgroundColor: "#d61717f",
    borderRadius: 50,
  };

  const percentageStyles = {
    textAlign: "left",
  };

  return (
    <div>
      <div style={percentageStyles}>{percentage}%</div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <div style={completedStyles}>{completed}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
