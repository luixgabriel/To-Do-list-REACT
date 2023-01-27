/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    Tarefas: [],
    index: -1,
  };

  handleEdit = (e, index) => {
    const { Tarefas } = this.state;
    console.log(index);
    this.setState({
      index,
      novaTarefa: Tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    console.log(index);
    const { Tarefas } = this.state;
    const novasTarefas = [...Tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      Tarefas: [...novasTarefas],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { Tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (Tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...Tarefas];

    if (index === -1) {
      this.setState({
        Tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        Tarefas: [...novasTarefas],
        index: -1,
      });
    }
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
            Tarefas.map((tarefa, index) => (
              <li key={tarefa}>
                {tarefa}
                <span>
                  <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                  <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
                </span>
              </li>

            ))
          }
        </ul>
      </div>
    );
  }
}
