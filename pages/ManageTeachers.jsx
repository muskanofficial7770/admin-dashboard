import React, { useState } from 'react';

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Dr. Emily Clarke",
      email: "emily.clarke@university.edu",
      initials: "EC",
      colorClass: "teacher-avatar-blue",
    },
    {
      id: 2,
      name: "Prof. Alan Grant",
      email: "alan.grant@university.edu",
      initials: "AG",
      colorClass: "teacher-avatar-amber",
    },
    {
      id: 3,
      name: "Mark Wahlberg",
      email: "mark.w@university.edu",
      initials: "MW",
      colorClass: "teacher-avatar-emerald",
    },
    {
      id: 4,
      name: "Sarah Connor",
      email: "sarah.c@university.edu",
      initials: "SC",
      colorClass: "teacher-avatar-purple",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (!newName || !newEmail) return;

    const initials = newName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    const colorClasses = [
      "teacher-avatar-blue",
      "teacher-avatar-amber",
      "teacher-avatar-emerald",
      "teacher-avatar-purple",
      "teacher-avatar-pink",
      "teacher-avatar-indigo",
    ];
    const randomColorClass =
      colorClasses[Math.floor(Math.random() * colorClasses.length)];

    const newTeacher = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      initials,
      colorClass: randomColorClass,
    };

    setTeachers([newTeacher, ...teachers]);
    setNewName("");
    setNewEmail("");
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter((t) => t.id !== id));
  };

  return (
    <div className="manage-teachers-root">
      <div className="manage-teachers-header-row">
        <div>
          <h2 className="manage-teachers-title">Manage Teachers</h2>
          <p className="manage-teachers-subtitle">
            Add new teachers and manage existing faculty accounts.
          </p>
        </div>
      </div>

      {/* Add New Teacher */}
      <section className="manage-teachers-card">
        <h3 className="manage-teachers-card-title">Add New Teacher</h3>
        <form
          className="manage-teachers-form"
          onSubmit={handleAddTeacher}
        >
          <div className="manage-teachers-form-col">
            <label className="manage-teachers-label">Full Name</label>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="manage-teachers-input"
              placeholder="e.g. Dr. Emily Clarke"
              type="text"
            />
          </div>
          <div className="manage-teachers-form-col">
            <label className="manage-teachers-label">Email</label>
            <input
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="manage-teachers-input"
              placeholder="emily@university.edu"
              type="email"
            />
          </div>
          <button
            type="submit"
            className="manage-teachers-add-btn"
          >
            <span className="material-symbols-outlined">add</span>
            <span>Add Teacher</span>
          </button>
        </form>
      </section>

      {/* Existing Teachers */}
      <section className="manage-teachers-table-card">
        <div className="manage-teachers-table-header">
          <h3 className="manage-teachers-card-title">Existing Teachers</h3>
          <div className="manage-teachers-search-wrapper">
            <span className="manage-teachers-search-icon">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input
              className="manage-teachers-search-input"
              placeholder="Search teachers..."
              type="text"
            />
          </div>
        </div>

        <div className="manage-teachers-table-wrapper">
          <table className="manage-teachers-table">
            <thead className="manage-teachers-thead">
              <tr>
                <th className="manage-teachers-th">Name</th>
                <th className="manage-teachers-th">Email</th>
                <th className="manage-teachers-th manage-teachers-th-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="manage-teachers-tbody">
              {teachers.length > 0 ? (
                teachers.map((teacher) => (
                  <tr
                    key={teacher.id}
                    className="manage-teachers-row"
                  >
                    <td className="manage-teachers-td">
                      <div className="manage-teachers-name-cell">
                        <div
                          className={
                            "manage-teachers-avatar " + teacher.colorClass
                          }
                        >
                          {teacher.initials}
                        </div>
                        <span className="manage-teachers-name">
                          {teacher.name}
                        </span>
                      </div>
                    </td>
                    <td className="manage-teachers-td">
                      {teacher.email}
                    </td>
                    <td className="manage-teachers-td manage-teachers-td-right">
                      <div className="manage-teachers-actions">
                        <button
                          className="manage-teachers-icon-btn"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button
                          onClick={() => handleDelete(teacher.id)}
                          className="manage-teachers-icon-btn manage-teachers-icon-delete"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="manage-teachers-empty"
                  >
                    No teachers found. Add one above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="manage-teachers-footer">
          <span className="manage-teachers-footer-text">
            Showing {teachers.length} teachers
          </span>
        </div>
      </section>
    </div>
  );
};

export default ManageTeachers;