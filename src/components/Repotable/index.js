import React, { useState, useEffect } from 'react';
import './Repotable.css';

const noValConst = '-';

function Repotable({ repoList = [] }) {
  if (repoList?.length === 0) {
    return <div>Nodata to render table</div>
  }

  const yesOrNo = bool => bool ? 'Yes' : 'No';
  const getVal = (rowData, key) => (rowData[key] || noValConst);

  return (
    <div className="divTable">
      <div className="headRow" data-testid="headRow">
        <div className="divCell" align="center">Package Name</div>
        <div className="divCell">Current</div>
        <div className="divCell">Latest</div>
        <div className="divCell">Outdated</div>
        <div className="divCell">Vulnerable</div>
      </div>
      {
        repoList.map(l =>
          <div key={l.id} className="divRow" data-testid="divRow">
            <div className="divCell">{getVal(l, 'name')}</div>
            <div className="divCell">{getVal(l, 'current_version')}</div>
            <div className="divCell">{getVal(l, 'latest_version')}</div>
            <div className="divCell">{yesOrNo(l.isOutdated)}</div>
            <div className="divCell">{yesOrNo(l.isVulnerable)}</div>
          </div>
        )
      }
    </div>
  );
  // <div className="divCell">Handlebar</div>
  // <div className="divCell">4.0.10</div>
  // <div className="divCell">4.0.11</div>
  // <div className="divCell">{yesOrNo()}</div>
  // <div className="divCell">{yesOrNo()}</div>
}

export default Repotable;
