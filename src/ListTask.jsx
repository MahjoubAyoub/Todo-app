import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from './store';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true; // 'all'
  });

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange({ target: { value: 'all' } })}>All</button>
        <button onClick={() => handleFilterChange({ target: { value: 'done' } })}>Done</button>
        <button onClick={() => handleFilterChange({ target: { value: 'not_done' } })}>Not Done</button>
      </div>

      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
