import React from 'react';
import Input from './Input';

export default {
  title: 'Atom/Input',
  component: Input,
};

export const input = () => <Input type="text" name="inputText" placeholder="input text" />;