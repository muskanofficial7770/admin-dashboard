import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-root">
      <div className="dashboard-header-row">
        <div>
          <h2 className="dashboard-title">Dashboard Overview</h2>
          <p className="dashboard-subtitle">
            Welcome back, here's what's happening today.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-stats-grid">
        {/* Card 1 */}
        <div className="dashboard-card">
          <div>
            <p className="dashboard-card-label">Total Students</p>
            <h3 className="dashboard-card-value">1,240</h3>
          </div>
          <div className="dashboard-card-icon dashboard-card-icon-blue">
            <span className="material-symbols-outlined">school</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="dashboard-card">
          <div>
            <p className="dashboard-card-label">Total Teachers</p>
            <h3 className="dashboard-card-value">45</h3>
          </div>
          <div className="dashboard-card-icon dashboard-card-icon-purple">
            <span className="material-symbols-outlined">people</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="dashboard-card">
          <div>
            <p className="dashboard-card-label">Project Ideas</p>
            <h3 className="dashboard-card-value">850</h3>
          </div>
          <div className="dashboard-card-icon dashboard-card-icon-amber">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="dashboard-main-grid">
        {/* Pending Approvals */}
        <div className="dashboard-approvals-card">
          <div className="dashboard-approvals-header">
            <h3 className="dashboard-approvals-title">Pending Approvals</h3>
            <NavLink to="/reports" className="dashboard-approvals-link">
              View All
            </NavLink>
          </div>

          <div className="dashboard-approvals-grid">
            <div className="dashboard-approval-item">
              <div className="dashboard-approval-icon dashboard-approval-icon-orange">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="dashboard-approval-text">
                <p className="dashboard-approval-title">AI Research Paper</p>
                <p className="dashboard-approval-sub">
                  Submitted by John Doe
                </p>
              </div>
              <span className="material-symbols-outlined dashboard-approval-chevron">
                chevron_right
              </span>
            </div>

            <div className="dashboard-approval-item">
              <div className="dashboard-approval-icon dashboard-approval-icon-blue">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="dashboard-approval-text">
                <p className="dashboard-approval-title">Eco System Model</p>
                <p className="dashboard-approval-sub">
                  Submitted by Sarah Smith
                </p>
              </div>
              <span className="material-symbols-outlined dashboard-approval-chevron">
                chevron_right
              </span>
            </div>

            <div className="dashboard-approval-item">
              <div className="dashboard-approval-icon dashboard-approval-icon-green">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="dashboard-approval-text">
                <p className="dashboard-approval-title">Robotics 101</p>
                <p className="dashboard-approval-sub">
                  Submitted by Mike Ross
                </p>
              </div>
              <span className="material-symbols-outlined dashboard-approval-chevron">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-divider" />

      {/* Manage Users block */}
      <div className="dashboard-manage-users-wrap">
        <div className="dashboard-manage-users">
          <div className="dashboard-manage-users-text">
            <h3 className="dashboard-manage-users-title">Manage Users</h3>
            <p className="dashboard-manage-users-sub">
              Quickly access student and teacher databases to update records,
              enroll new users, or manage permissions.
            </p>
          </div>
          <div className="dashboard-manage-users-actions">
            <NavLink to="/students" className="dashboard-manage-users-btn">
              <span className="material-symbols-outlined">school</span>
              <span>Students</span>
            </NavLink>
            <NavLink to="/teachers" className="dashboard-manage-users-btn">
              <span className="material-symbols-outlined">person</span>
              <span>Teachers</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;