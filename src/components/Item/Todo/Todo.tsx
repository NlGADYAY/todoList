import React from "react";
import { Item } from '../Item';

interface IItemsTodoListProps {
  tasks: string[];
  onRemove: (index: number) => void;
  onEdit: (index: number) => void;
}

export const ItemsTodoList: React.FC<IItemsTodoListProps> = ({ tasks, onRemove, onEdit }) => {
  return (
    <ul >
      {tasks.map((task, index) => (
        <Item  
          task={task} 
          onRemove={() => onRemove(index)} 
          onEdit={() => onEdit(index)} 
        />
      ))}
    </ul>
  );
};