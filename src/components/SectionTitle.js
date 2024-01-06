const SectionTitle = (props) => {
  return (
    <div className="py-3 fn-section-title-text">
      <div className="fn-title-accent"></div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default SectionTitle;
