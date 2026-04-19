export type CaseStudyCardProps = {
  index: string;
  title: string;
  situation: string;
  hardestPart: string;
  action: string;
  result: string;
};

export function CaseStudyCard({
  index,
  title,
  situation,
  hardestPart,
  action,
  result,
}: CaseStudyCardProps) {
  return (
    <article className="case-study-card">
      <span className="case-study-index">§ {index}</span>
      <div className="case-study-content">
        <h3 className="case-study-title">{title}</h3>
        <dl className="case-study-body">
          <div className="case-study-row">
            <dt className="case-study-label">Situation</dt>
            <dd className="case-study-text">{situation}</dd>
          </div>
          <div className="case-study-row">
            <dt className="case-study-label">Hardest Part</dt>
            <dd className="case-study-text">{hardestPart}</dd>
          </div>
          <div className="case-study-row">
            <dt className="case-study-label">Approach</dt>
            <dd className="case-study-text">{action}</dd>
          </div>
          <div className="case-study-row case-study-row-result">
            <dt className="case-study-label">Outcome</dt>
            <dd className="case-study-text case-study-result">{result}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
