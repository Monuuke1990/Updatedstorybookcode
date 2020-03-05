import React from 'react';
import Button from '../component/Button';
import '../styles.css'
import '../story.css'


export default {
  title: 'ButtonGroup',
  component: Button,
};

export const All = () =><div><Button variant = "primary">Hello Button</Button>
<Button variant = "primary-disabled">primary-disabled</Button>
<Button variant = "secondary">secondary</Button>
<Button variant = "danger">danger</Button></div> ;

export const BtnPrimary = () => <Button variant = "primary">Hello Button</Button>;
export const BtnPrimaryDisabled = () => <Button variant = "primary-disabled">PrimaryDisabled</Button>;
export const BtnSecondary = () => <Button variant = "secondary">secondary</Button>;
export const BtnDanger = () => <Button variant = "danger">danger</Button>;

