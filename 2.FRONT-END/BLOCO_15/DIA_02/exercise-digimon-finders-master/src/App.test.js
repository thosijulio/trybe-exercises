import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const data = [
  {
    name: "Agumon",
    img: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie",
  }];

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('text input and submit button', () => {
    const { getByText, getByTestId } = render(<App />);
    const submitButton = getByText('Search Digimon');
    const inputDigimon = getByTestId('input');
    expect(submitButton && inputDigimon).toBeInTheDocument();
  });

  it('after type a no-exist digimon, should apply a message', async () => {
    const fakeDigimon = 'Charizard';

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => ({
        ErrorMsg: `${fakeDigimon} is not a Digimon in our database.`,
      })
    })

    const { getByText, getByTestId, findByText } = render(<App />);
    const submitButton = getByText('Search Digimon');
    const inputDigimon = getByTestId('input');
    
    userEvent.type(inputDigimon, fakeDigimon);
    userEvent.click(submitButton);

    const errorMessage = await findByText(/Charizard is not a Digimon in our database/i)
    
    expect(errorMessage).toBeInTheDocument();
    
  });

  it('after type a digimon name, should appear some infos about', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => (data)
    });

    const { getByTestId, getByText, findByTestId }= render(<App />);
    const submitButton = getByText('Search Digimon');
    const inputDigimon = getByTestId('input');
    
    userEvent.type(inputDigimon, 'Agumon');
    userEvent.click(submitButton);

    
    const digiName = await findByTestId('digimonName');
    const digiLevel = await findByTestId('digimonLevel');

    expect(digiName && digiLevel).toBeInTheDocument();
  });

});