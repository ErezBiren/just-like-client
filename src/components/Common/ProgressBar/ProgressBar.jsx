const ProgressBar = (props) => {
  const { bgcolor, completed, percentage } = props;

  const percentageStyles = {
    textAlign: "left",
  };

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    marginBottom: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };

  const completedStyles = {
    textAlign: "left",
    borderRadius: 50,
    backgroundColor: "#aaaaf",
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
