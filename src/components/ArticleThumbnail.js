import { Badge } from "react-bootstrap";

const ArticleThumbnail = (props) => {
  return (
    <>
      <div className="fn-article-panel my-3">
        <a href="#">
          <div className="fn-article-image">
            <img alt="" src={props.article.image} />
            <Badge
              className="fn-article-category"
              bg=""
              style={{
                backgroundColor: "rgba(245, 173, 203, 0.85)",
              }}
            >
              {props.article.category}
            </Badge>
          </div>
          <div className="fn-article-title">
            <div>{props.article.title}</div>
            <div className="fn-article-date mt-3"> {props.article.date}</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ArticleThumbnail;
