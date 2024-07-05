/**
 * @jest-environment jsdom 
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CreateButton } from './CreateButton';

it('The button is white', () => {
  render(<CreateButton $backgroundColor="green">tosubmit</CreateButton>)
  //add more tests, decouple logic
  expect(screen.getByRole("button", {name: /tosubmit/i})).toHaveStyle({
    color: "white",
    backgroundColor: "green"
  })
    
})