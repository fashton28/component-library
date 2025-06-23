import React from 'react';

const tasks = [
  { label: 'Respond to comment #384 from Travis', checked: false, link: true },
  { label: 'Invite Acme Co. team to Slack', checked: false, link: true },
  { label: 'Create a report requested by Danilo', checked: false, link: true },
  { label: 'Close Q2 finances', checked: true, link: false },
  { label: 'Review invoice #3456', checked: true, link: false },
];

const TaskList = () => (
  <div className="bg-[#181A20] rounded-lg p-4">
    {tasks.map((task, idx) => (
      <div key={idx} className="flex items-center mb-2 last:mb-0">
        <input type="checkbox" checked={task.checked} readOnly className="accent-blue-600 mr-2" />
        <span className={
          `text-white text-sm ${task.checked ? 'line-through text-gray-500' : ''} ${task.link ? 'underline cursor-pointer text-blue-400' : ''}`
        }>{task.label}</span>
      </div>
    ))}
  </div>
);

export default TaskList; 