export interface IItem {
  id: number;
  name: string;
  status: 'PENDING' | 'COMPLETED';
  createdAt: string;
  completedAt: string;
  image: string;
  description: string;
  highlighted: boolean;
  updatedAt: string;
  listId: number;
}
