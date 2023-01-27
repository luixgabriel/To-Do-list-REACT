import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Tarefas.css';

export default function List({ Tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="list">
      {
      Tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
          </span>
        </li>

      ))
    }
    </ul>
  );
}

List.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  Tarefas: PropTypes.array.isRequired,
};
