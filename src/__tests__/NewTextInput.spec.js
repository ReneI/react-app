import { shallow } from 'enzyme';
import store from '../store';
import clientAxios from '../config/axios';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent

import ShowString from '../components/ShowString';
import { Provider } from 'react-redux';

import {
  render,
  fireEvent,
  cleanup,screen
} from '@testing-library/react';
import InputText from '../components/InputText';
import App from '../App';


describe('clicking the send button', () => {


test('start',async  () => {
 const {getByTestId,getByText } =render(<Provider store={store}><InputText /></Provider>);
  fireEvent.change(getByTestId('messageText'), {
  target: {
    value: 'new',
  },
});

expect(countSpan).toHaveTextContent("Result: NEW");
 fireEvent.click(getByTestId('sendButton'));
 expect(getByTestId("resultText").textContent).toBe("Result: NEW");
 

});



});



afterEach(cleanup);



test('clicking on button makes it disabled', () => {
  const {getByTestId } =render(<Provider store={store}><InputText /></Provider>);

  fireEvent.change(getByTestId('messageText'), {
    target: {
      value: 'S',
    },
  });
  
  expect(getByTestId("resultText").textContent).toBe("Result: ");


});


test('verify lowercase', () => {
  const {getByTestId } =render(<Provider store={store}><InputText /></Provider>);

  fireEvent.change(getByTestId('messageText'), {
    target: {
      value: 's',
    },
  });
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId("msgInit").textContent).toBe("Please insert a value");
});

test('clears the text field', () => {
  const {getByTestId} =render(<Provider store={store}><InputText /></Provider>);

  fireEvent.change(getByTestId('messageText'), {
    target: {
      value: 'ssss',
    },
  });
  
  expect(getByTestId("messageText").textContent).toBe("");


});

