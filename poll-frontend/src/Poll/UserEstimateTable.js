import React from "react";

export default function UserEstimateTable({ votes }) {
  return (
    <div className="grid">
      <span className="grid-heading">
        <strong>User</strong>
      </span>
      <span className="grid-heading">
        <strong>Estimate</strong>
      </span>
      {votes.length ? (
        votes.map((vote, index) => {
          return (
            <>
              <span key={index} className="grid-item">
                {vote.username}
              </span>
              <span key={"vote" + index} className="grid-item">
                {vote.estimate}
              </span>
            </>
          );
        })
      ) : (
        <div className="empty-table">
          <h2>No Votes Yet</h2>
        </div>
      )}
    </div>
  );
}
