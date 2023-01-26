import React, { Component } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    Tarefas: [
      'Treinar',
      'Estudar react',
      'Estudar cloud',
      'Estudar typescript',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, Tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas:</h1>

        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="list">
          {
            Tarefas.map((tarefa) => (
              <li key={tarefa}>
                {tarefa}
                <div>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </div>
              </li>

            ))
          }
        </ul>
      </div>
    );
  }
}
