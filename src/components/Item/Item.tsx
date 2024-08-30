import React from "react";
import "./item.css";
import "../Button/button.css";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md"

interface IItemProps {
  task: string;
  onRemove: () => void;
  onEdit: () => void;
}

export const Item: React.FC<IItemProps> = ({ task, onRemove, onEdit }) => {
  return (
    <li className="item">
      {task}

      <div className="editField">
        <button className="buttonEdit" onClick={onEdit}>
          <FaPen />
        </button>
        <button className="buttonRemove" onClick={onRemove}>
        <MdDelete />
        </button>
      </div>
    </li>
  );
};
