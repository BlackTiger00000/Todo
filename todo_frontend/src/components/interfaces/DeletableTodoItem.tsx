export default interface DeletableTodoItem {
  id: string | null;
  title: string | null;
  checked: boolean | null;
  onDelete(id: string): void;
}
