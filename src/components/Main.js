/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    Tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { Tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (Tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...Tarefas];

    this.setState({
      Tarefas: [...novasTarefas, novaTarefa],
    });
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

        <form onSubmit={this.handleSubmit} action="#" className="form">
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
                <span>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </span>
              </li>

            ))
          }
        </ul>
      </div>
    );
  }
}
