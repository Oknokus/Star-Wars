import React from 'react';

import UiLoading from './UiLoading';


export default {
  title: 'Ui-kit/UiLoading',
  component: UiLoading,
};

const Template = (args) => <UiLoading {...args} />;

const prors = {
    text: "HELLO",
    disabled: false, 
    onClick: ()=> console.log("button onClick"),
    theme: "light"
}

export const Light = Template.bind({});
Light.args = {
 ...prors,
  theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
 ...prors,
  theme: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
 ...prors,
 disabled: true,
};  

