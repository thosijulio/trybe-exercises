import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

describe('Exercicio 1', () => {
  afterEach(cleanup);

  it('Botão ao ser clicado, salva a tarefa', () => {
    const { getByRole, getByLabelText, queryByText } = render(<App />);
    const button = getByRole('button');
    const input = getByLabelText('Tarefa:');
    fireEvent.change(input, { target: { value: 'Fazer exercicios' }})
    expect(queryByText('Fazer exercicios')).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(queryByText('Fazer exercicios')).toBeInTheDocument();
  });
  
  it('Existe um botão para adicionar tarefa', () => {
    const { getByRole } = render(<App />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Botão precisa conter o texto \'Adicionar\'', () => {
    const { getByRole } = render(<App />);
    const button = getByRole('button');
    expect(button.value).toBe('Adicionar');
  })
})