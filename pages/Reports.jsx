import React, { useState } from 'react';

const Reports = () => {
  const [period, setPeriod] = useState('Daily');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    alert("Generating PDF report... Download will start shortly.");
  };

  const handleApplyFilters = () => {
    if (!fromDate && !toDate) {
      alert("Please select a date range to filter.");
      return;
    }
    alert(`Filtering reports for period: ${period} from ${fromDate} to ${toDate}`);
  };

  return (
    <div className="reports-root">
      <div className="reports-header-row">
        <div>
          <h2 className="reports-title">Reports</h2>
          <p className="reports-subtitle">
            View and analyze project idea selection statistics.
          </p>
        </div>
        <div className="reports-header-actions">
          <button
            onClick={handleExport}
            className="reports-export-btn"
          >
            <span className="material-symbols-outlined">download</span>
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* Filters card */}
      <div className="reports-filters-card print-hidden">
        <div className="reports-filters-header">
          <div className="reports-filters-icon">
            <span className="material-symbols-outlined">tune</span>
          </div>
          <h3 className="reports-filters-title">Filters</h3>
        </div>

        <div className="reports-filters-grid">
          {/* Period buttons */}
          <div className="reports-period-block">
            <label className="reports-label-small">
              Report Period
            </label>
            <div className="reports-period-toggle">
              {['Daily', 'Weekly', 'Monthly'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={
                    'reports-period-btn ' +
                    (period === p
                      ? 'reports-period-btn-active'
                      : 'reports-period-btn-inactive')
                  }
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Date range */}
          <div className="reports-date-grid">
            <div>
              <label className="reports-label-small">
                From Date
              </label>
              <div className="reports-input-wrap">
                <input
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="reports-input"
                  type="date"
                />
              </div>
            </div>
            <div>
              <label className="reports-label-small">
                To Date
              </label>
              <div className="reports-input-wrap">
                <input
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="reports-input"
                  type="date"
                />
              </div>
            </div>
          </div>

          {/* Apply button */}
          <div className="reports-apply-wrap">
            <button
              onClick={handleApplyFilters}
              className="reports-apply-btn"
            >
              <span className="material-symbols-outlined">
                filter_list
              </span>
              <span>Apply Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Current period table */}
      <div className="reports-block">
        <div className="reports-block-header">
          <h3 className="reports-block-title">
            <span className="material-symbols-outlined reports-icon-primary">
              today
            </span>
            <span>{period} Project Ideas Selected</span>
          </h3>
          <span className="reports-chip">
            {period} View
          </span>
        </div>

        <div className="reports-table-card">
          <div className="reports-table-wrapper">
            <table className="reports-table">
              <thead className="reports-thead">
                <tr>
                  <th className="reports-th">Idea Name</th>
                  <th className="reports-th">Leader Name</th>
                  <th className="reports-th">Session</th>
                  <th className="reports-th reports-th-right">
                    Date Selected
                  </th>
                </tr>
              </thead>
              <tbody className="reports-tbody">
                <tr className="reports-row">
                  <td className="reports-td reports-td-strong">
                    Smart Garden System
                  </td>
                  <td className="reports-td">
                    <div className="reports-leader-cell">
                      <div className="reports-avatar reports-avatar-indigo">
                        AB
                      </div>
                      <span>Alice Brown</span>
                    </div>
                  </td>
                  <td className="reports-td">2023-2024</td>
                  <td className="reports-td reports-td-right reports-td-mono">
                    Oct 25, 2023
                  </td>
                </tr>
                <tr className="reports-row">
                  <td className="reports-td reports-td-strong">
                    AI Traffic Control
                  </td>
                  <td className="reports-td">
                    <div className="reports-leader-cell">
                      <div className="reports-avatar reports-avatar-orange">
                        DL
                      </div>
                      <span>David Lee</span>
                    </div>
                  </td>
                  <td className="reports-td">2023-2024</td>
                  <td className="reports-td reports-td-right reports-td-mono">
                    Oct 25, 2023
                  </td>
                </tr>
                <tr className="reports-row">
                  <td className="reports-td reports-td-strong">
                    Library Management App
                  </td>
                  <td className="reports-td">
                    <div className="reports-leader-cell">
                      <div className="reports-avatar reports-avatar-green">
                        KT
                      </div>
                      <span>Kevin Tran</span>
                    </div>
                  </td>
                  <td className="reports-td">2023-2024</td>
                  <td className="reports-td reports-td-right reports-td-mono">
                    Oct 25, 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Historical data */}
      <div className="reports-block">
        <div className="reports-block-header">
          <h3 className="reports-block-title">
            <span className="material-symbols-outlined reports-icon-primary">
              history
            </span>
            <span>Historical Selection Data</span>
          </h3>
        </div>

        <div className="reports-table-card">
          <div className="reports-table-wrapper">
            <table className="reports-table">
              <thead className="reports-thead">
                <tr>
                  <th className="reports-th">Idea Name</th>
                  <th className="reports-th">Leader Name</th>
                  <th className="reports-th">Session</th>
                  <th className="reports-th reports-th-right">
                    Date Selected
                  </th>
                </tr>
              </thead>
              <tbody className="reports-tbody">
                {[
                  {
                    name: "Blockchain Voting System",
                    leader: "Sarah Connor",
                    initials: "SC",
                    color: "reports-avatar-purple",
                    date: "Oct 23, 2023",
                  },
                  {
                    name: "Telemedicine Mobile App",
                    leader: "James Wilson",
                    initials: "JW",
                    color: "reports-avatar-blue",
                    date: "Oct 22, 2023",
                  },
                  {
                    name: "E-Commerce Analytics",
                    leader: "Mia Rodriguez",
                    initials: "MR",
                    color: "reports-avatar-pink",
                    date: "Oct 21, 2023",
                  },
                ].map((item, i) => (
                  <tr
                    key={i}
                    className="reports-row"
                  >
                    <td className="reports-td reports-td-strong">
                      {item.name}
                    </td>
                    <td className="reports-td">
                      <div className="reports-leader-cell">
                        <div
                          className={
                            'reports-avatar ' + item.color
                          }
                        >
                          {item.initials}
                        </div>
                        <span>{item.leader}</span>
                      </div>
                    </td>
                    <td className="reports-td">2023-2024</td>
                    <td className="reports-td reports-td-right reports-td-mono">
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Optional: Print button at bottom (hidden in print if you want) */}
        <div className="reports-print-wrap print-hidden">
          <button
            onClick={handlePrint}
            className="reports-print-btn"
          >
            <span className="material-symbols-outlined">print</span>
            <span>Print Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
