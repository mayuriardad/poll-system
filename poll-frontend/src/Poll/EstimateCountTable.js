import React from "react";

export default function EstimateCountTable({ voteCount }) {
  return (
    <div className="grid">
      <span className="grid-heading">
        <strong>Estimate</strong>
      </span>
      <span className="grid-heading">
        <strong>User count</strong>
      </span>
      {voteCount.map((count, index) => {
        return (
          <React.Fragment key={index}>
            <span className="grid-item" key={index}>
              {count.estimate}
            </span>
            <span className="grid-item" key={`count-${index}`}>
              {count.count}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}
