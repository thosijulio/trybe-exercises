import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Teste da página App.js', () => {
  test('Links funcionando corretamente', () => {
    renderWithRouter(<App />);
    const menuLinks = screen.getAllByRole('link');
    expect(menuLinks.length).toBe(4);
  })
})