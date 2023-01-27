/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import List from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    Tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const Tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!Tarefas) return;

    this.setState({
      Tarefas,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { Tarefas } = this.state;
    if (Tarefas === prevState.Tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(Tarefas));
  }

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
    if (novaTarefa === '') {
      // eslint-disable-next-line no-alert
      alert('Digite uma tarefa!');
    }
    const novasTarefas = [...Tarefas];

    if (index === -1 && novaTarefa !== '') {
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
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <List
          Tarefas={Tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
