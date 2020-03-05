import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';

//import { withInfo } from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';
import ButtonTheme from "../component/ButtonTheme"
import '../styles.css'
// import { Button } from 'demo-design';

// addDecorator(
//     withInfo({
//       header: false, // Global configuration for the info addon across all of your stories.
//     })
//   );
  

export default {
    title: 'ButtonTheme',
    component: ButtonTheme,
   // decorators: [withInfo],
   
};

export const Primary = () => <ButtonTheme variant = "secondary" > Button Theme </ButtonTheme>;

