import TodoItem from './TodoItem';

export default interface DeletableTodoItem extends TodoItem {
  onDelete(id: string): void;
}
