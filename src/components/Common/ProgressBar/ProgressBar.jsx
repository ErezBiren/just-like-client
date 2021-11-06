const ProgressBar = (props) => {
  const { bgcolor, completed, percentage } = props;

  const percentageStyles = {
    textAlign: "left",
    marginBottom: 15,
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

  const testStyles = {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 5,
    border: `3px solid ${bgcolor}`,
  };

  return (
    <div>
      <div style={percentageStyles}>{percentage}%</div>

      <div style={containerStyles}>
        <div style={fillerStyles}>
          <div style={completedStyles}>
            <span style={testStyles}>{completed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
