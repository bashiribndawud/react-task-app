// Task interface
export interface Task {
  id: number;
  content: string;
  completed: boolean;
}

// TaskItem component
export interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => void;
}

// TaskList component
export interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => void;
}

export interface AddTaskProps {
  value: string;
  handleChange: (text: string) => void;
  handleTask: () => void;
}