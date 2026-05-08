import React, { useState, useEffect } from 'react';
import '../styles/RolesPermissions.css';

const INITIAL_ROLES = [
  {
    id: '2',
    name: 'Teacher',
    description: 'Standard access for teaching staff',
    permissions: [
      'idea.upload',
      'template.upload',
      'idea.view',
      'template.view',
      'idea.review',
      'progress.track'
    ],
    icon: 'person_apron',
    colorClass: 'role-avatar-primary',
  },
  {
    id: '3',
    name: 'Student',
    description: 'Limited Access',
    permissions: ['idea.submit', 'progress.track', 'idea.view', 'template.view', 'use.diagram', 'create.task', 'assign.task', 'view.task'],
    icon: 'school',
    colorClass: 'role-avatar-neutral',
  },
];

const PERMISSION_GROUPS = [
  {
    name: 'Ideas & Templates',
    icon: 'lightbulb',
    perms: [
      'idea.upload',
      'template.upload',
      'idea.view',
      'template.view',
      'idea.review'
    ],
  },
  {
    name: 'Review & Groups',
    icon: 'rate_review',
    perms: ['progress.track'],
  },
  {
    name: 'Tasks & Diagrams',
    icon: 'task',
    perms: ['create.task', 'assign.task', 'view.task', 'use.diagram'],
  },
];

const RolesPermissions = () => {
  const [roles, setRoles] = useState(INITIAL_ROLES);
  const [selectedRoleId, setSelectedRoleId] = useState('2');
  const [formData, setFormData] = useState(INITIAL_ROLES[0]);

  useEffect(() => {
    const role = roles.find((r) => r.id === selectedRoleId);
    if (role) {
      setFormData({ ...role });
    }
  }, [selectedRoleId, roles]);

  const handleSave = () => {
    if (!formData.name) return;
    setRoles(roles.map((r) => (r.id === formData.id ? formData : r)));
  };

  const togglePermission = (perm) => {
    const isChecked = formData.permissions.includes(perm);
    const newPerms = isChecked
      ? formData.permissions.filter((p) => p !== perm)
      : [...formData.permissions, perm];
    setFormData({ ...formData, permissions: newPerms });
    
    // Auto-save when permissions change
    const updatedRoles = roles.map((r) => (r.id === formData.id ? { ...formData, permissions: newPerms } : r));
    setRoles(updatedRoles);
  };

  return (
    <div className="roles-root">
      <div className="roles-header-row">
        <div>
          <h2 className="roles-title">Roles & Permissions</h2>
          <p className="roles-subtitle">
            Easily manage all user roles, permissions and access control from here.
          </p>
        </div>
      </div>

      <div className="roles-main-layout">
        {/* Sidebar List */}
        <div className="roles-sidebar-wrap">
          <div className="roles-sidebar-card">
            <div className="roles-sidebar-card-header">
              <h3>All Roles</h3>
            </div>
            <div className="roles-sidebar-list">
              {roles.map((role) => {
                const isActive = selectedRoleId === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRoleId(role.id)}
                    className={
                      'roles-sidebar-item ' +
                      (isActive
                        ? 'roles-sidebar-item-active'
                        : 'roles-sidebar-item-hover')
                    }
                  >
                    <div className="roles-sidebar-item-left">
                      <div
                        className={
                          'roles-avatar ' +
                          (isActive ? 'role-avatar-selected' : role.colorClass)
                        }
                      >
                        <span className="material-symbols-outlined roles-avatar-icon">
                          {role.icon}
                        </span>
                      </div>
                      <div>
                        <div
                          className={
                            'roles-sidebar-name ' +
                            (isActive
                              ? 'roles-sidebar-name-active'
                              : 'roles-sidebar-name-normal')
                          }
                        >
                          {role.name}
                        </div>
                        <div
                          className={
                            'roles-sidebar-perm-count ' +
                            (isActive
                              ? 'roles-sidebar-perm-count-active'
                              : 'roles-sidebar-perm-count-normal')
                          }
                        >
                          {role.permissions.includes('all')
                            ? 'Full Access'
                            : `${role.permissions.length} Permissions`}
                        </div>
                      </div>
                    </div>
                    <div className="roles-sidebar-item-right">
                      {isActive && (
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              window.confirm(
                                'Are you sure you want to delete this role? This action cannot be undone.',
                              )
                            ) {
                              if (role.isSystem) {
                                alert('System roles cannot be deleted.');
                                return;
                              }
                              const newRoles = roles.filter(
                                (r) => r.id !== role.id,
                              );
                              setRoles(newRoles);
                              setSelectedRoleId(newRoles[0]?.id || '');
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              e.currentTarget.click();
                            }
                          }}
                          className="roles-delete-pill"
                          title="Delete role"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </div>
                      )}
                      {isActive ? (
                        <span className="material-symbols-outlined roles-edit-icon">
                          edit
                        </span>
                      ) : (
                        <span className="material-symbols-outlined roles-chevron">
                          chevron_right
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Edit Area */}
        <div className="roles-editor-card">
          <div className="roles-editor-header">
            <div className="roles-editor-header-left">
              <div className="roles-editor-header-icon">
                <span className="material-symbols-outlined">edit_note</span>
              </div>
              <div>
                <h3 className="roles-editor-title">
                  Edit Role: {formData.name}
                </h3>
                <p className="roles-editor-subtitle">
                  Define access controls and permissions
                </p>
              </div>
            </div>
          </div>

          <div className="roles-editor-body">
            <div className="roles-editor-body-inner">
              {formData.isSystem && (
                <div className="roles-system-alert">
                  <span className="material-symbols-outlined">warning</span>
                  <span>
                    This is a system role. Some permissions cannot be modified
                    to prevent lockout.
                  </span>
                </div>
              )}

              <div className="roles-form-grid">
                <div>
                  <label className="roles-label">Role Name</label>
                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="roles-input roles-input-strong"
                    type="text"
                    disabled={formData.isSystem}
                  />
                </div>
                <div>
                  <label className="roles-label">Description</label>
                  <input
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    className="roles-input"
                    type="text"
                  />
                </div>
              </div>

              <hr className="roles-divider" />

              <div>
                <h4 className="roles-perm-heading">
                  Permissions Configuration
                </h4>

                {formData.permissions.includes('all') ? (
                  <div className="roles-full-access-card">
                    <span className="material-symbols-outlined roles-full-access-icon">
                      lock_open
                    </span>
                    <p className="roles-full-access-title">
                      Full Access Granted
                    </p>
                    <p className="roles-full-access-sub">
                      Super Administrators have access to all system modules by
                      default.
                    </p>
                  </div>
                ) : (
                  <div className="roles-perm-list">
                    {PERMISSION_GROUPS.flatMap((group) => group.perms).map((perm) => (
                      <label
                        key={perm}
                        className="roles-perm-item"
                      >
                        <input
                          type="checkbox"
                          checked={formData.permissions.includes(perm)}
                          onChange={() => togglePermission(perm)}
                          className="roles-perm-checkbox"
                        />
                        <span className="roles-perm-code">
                          {perm}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPermissions;
