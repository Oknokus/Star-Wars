import React from 'react';

import UiButton from './UiButton';


export default {
  title: 'Ui-kit/UiButton',
  component: UiButton,
};

const Template = (args) => <UiButton {...args} />;

const prors = {
  theme: "black",
  isShadow: false,
  classes: "" 
}

export const Black = Template.bind({});
Black.args = {
 ...prors,
  theme: 'black',
};

export const Blue = Template.bind({});
Blu.args = {
 ...prors,
  theme: 'blue', 
};

export const White = Template.bind({});
White.args = {
 ...prors,
  theme: "white",
  isShadow: true,
};  

