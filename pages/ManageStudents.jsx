import React, { useState, useMemo } from 'react';
import '../styles/ManageStudents.css';

const ManageStudents = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      session: "Morning",
      roll: "EDU-2023-001",
      initials: "JD",
      colorClass: "student-avatar-indigo",
      sessionClass: "session-badge-amber",
      dotClass: "session-dot-amber",
    },
    {
      id: 2,
      name: "Robert Johnson",
      email: "robert.j@example.com",
      session: "Evening",
      roll: "EDU-2023-042",
      initials: "RJ",
      colorClass: "student-avatar-pink",
      sessionClass: "session-badge-purple",
      dotClass: "session-dot-purple",
    },
    {
      id: 3,
      name: "Michael Kim",
      email: "michael.kim@tech.edu",
      session: "Morning",
      roll: "EDU-2023-089",
      initials: "MK",
      colorClass: "student-avatar-teal",
      sessionClass: "session-badge-amber",
      dotClass: "session-dot-amber",
    },
    {
      id: 4,
      name: "Emily Lopez",
      email: "e.lopez@example.com",
      session: "Evening",
      roll: "EDU-2023-102",
      initials: "EL",
      colorClass: "student-avatar-blue",
      sessionClass: "session-badge-purple",
      dotClass: "session-dot-purple",
    },
  ]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    session: "",
  });

  const [activeSession, setActiveSession] = useState('all');

  const filteredStudents = useMemo(() => {
    if (activeSession === 'all') return students;
    return students.filter((student) => student.session === activeSession);
  }, [students, activeSession]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.session) return;

    const initials = formState.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const colorClasses = [
      "student-avatar-indigo",
      "student-avatar-pink",
      "student-avatar-teal",
      "student-avatar-blue",
    ];
    const randomColorClass =
      colorClasses[Math.floor(Math.random() * colorClasses.length)];

    const isMorning = formState.session === 'morning';
    const sessionLabel = isMorning ? "Morning" : "Evening";
    const sessionClass = isMorning ? "session-badge-amber" : "session-badge-purple";
    const dotClass = isMorning ? "session-dot-amber" : "session-dot-purple";

    const newStudent = {
      id: Date.now(),
      name: formState.name,
      email: formState.email,
      session: sessionLabel,
      roll: `EDU-2024-${Math.floor(100 + Math.random() * 900)}`,
      initials,
      colorClass: randomColorClass,
      sessionClass,
      dotClass,
    };

    setStudents([newStudent, ...students]);
    setFormState({ name: "", email: "", session: "" });
  };

  return (
    <div className="manage-students-root">
      <div className="manage-students-header-row">
        <div>
          <h2 className="manage-students-title">Manage Students</h2>
          <p className="manage-students-subtitle">
            Easily add, manage and view all student information here.
          </p>
        </div>
      </div>

      {/* Add New Student */}
      <section className="manage-card">
        <div className="manage-card-header">
          <h3 className="manage-card-header-title">
            Add New Student
          </h3>
        </div>
        <div className="manage-card-body">
          <form
            className="manage-form-grid"
            onSubmit={handleAddStudent}
          >
            <div className="manage-form-col">
              <label className="manage-label">Full Name</label>
              <input
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="manage-input"
                placeholder="Enter student name"
                type="text"
              />
            </div>
            <div className="manage-form-col">
              <label className="manage-label">Email Address</label>
              <input
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="manage-input"
                placeholder="Enter student email"
                type="email"
              />
            </div>
            <div className="manage-form-col">
              <label className="manage-label">Session</label>
              <div className="manage-select-wrapper">
                <select
                  value={formState.session}
                  onChange={(e) =>
                    setFormState({ ...formState, session: e.target.value })
                  }
                  className="manage-select"
                >
                  <option disabled value="">
                    Select Session
                  </option>
                  <option value="morning">Morning Session</option>
                  <option value="evening">Evening Session</option>
                </select>
                <span className="manage-select-icon">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </div>
            </div>
            <div className="manage-form-col">
              <button
                className="manage-submit-btn"
                type="submit"
              >
                <span className="material-symbols-outlined">add</span>
                <span>Add Student</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Student Directory */}
      <section className="manage-card">
        <div className="manage-card-header manage-table-header">
          <h3 className="manage-card-header-title">Students List</h3>
          <div className="manage-filters">
            <div className="manage-session-toggle">
              <button
                type="button"
                onClick={() => setActiveSession('all')}
                className={
                  'manage-session-btn ' +
                  (activeSession === 'all'
                    ? 'manage-session-btn-active-all'
                    : 'manage-session-btn-inactive')
                }
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setActiveSession('Morning')}
                className={
                  'manage-session-btn ' +
                  (activeSession === 'Morning'
                    ? 'manage-session-btn-active-morning'
                    : 'manage-session-btn-hover')
                }
              >
                Morning
              </button>
              <button
                type="button"
                onClick={() => setActiveSession('Evening')}
                className={
                  'manage-session-btn ' +
                  (activeSession === 'Evening'
                    ? 'manage-session-btn-active-evening'
                    : 'manage-session-btn-hover')
                }
              >
                Evening
              </button>
            </div>
          </div>
        </div>

        <div className="manage-table-wrapper">
          <table className="manage-table">
            <thead className="manage-table-head">
              <tr>
                <th className="manage-table-th">Name</th>
                <th className="manage-table-th">Email</th>
                <th className="manage-table-th">Session</th>
              </tr>
            </thead>
            <tbody className="manage-table-body">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="manage-table-row">
                    <td className="manage-table-td">
                      <div className="manage-student-cell">
                        <div
                          className={
                            'manage-student-avatar ' + student.colorClass
                          }
                        >
                          {student.initials}
                        </div>
                        <div className="manage-student-name">
                          {student.name}
                        </div>
                      </div>
                    </td>
                    <td className="manage-table-td">{student.email}</td>
                    <td className="manage-table-td">
                      <span
                        className={
                          'manage-session-badge ' + student.sessionClass
                        }
                      >
                        <span
                          className={
                            'manage-session-dot ' + student.dotClass
                          }
                        />
                        {student.session}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="manage-table-empty"
                  >
                    {activeSession === 'all'
                      ? 'No students found. Add one above.'
                      : `No ${activeSession.toLowerCase()} session students found.`}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="manage-table-footer">
          <p>
            Showing{' '}
            <span className="manage-footer-count">
              {activeSession === 'all'
                ? students.length
                : filteredStudents.length}
            </span>{' '}
            {activeSession === 'all'
              ? 'students'
              : `${activeSession} session students`}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ManageStudents;