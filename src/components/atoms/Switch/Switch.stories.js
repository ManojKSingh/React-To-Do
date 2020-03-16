import React from 'react';
import { action } from '@storybook/addon-actions';
import {Switch} from './Switch';

export default {
  title: 'Atom/Switch',
  component: Switch,
};

export const SwitchInput = () => <Switch onChange={action('Switch Action')} />;