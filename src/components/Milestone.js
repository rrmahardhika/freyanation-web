const Milestone = (props) => {
  return (
    <>
      <div className="mb-5 fn-milestone">
        <div className="fn-milestone-date">
          <div className="fn-milestone-panel-icon"></div>
          <div className="fn-milestone-panel-date"> {props.milestone.date}</div>
        </div>
        <div className="fn-milestone-text">
          <div className="fn-milestone-title">{props.milestone.title}</div>
          <div className="fn-milestone-desc">{props.milestone.desc}</div>
        </div>
      </div>
    </>
  );
};

export default Milestone;
