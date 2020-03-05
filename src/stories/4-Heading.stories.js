import React from 'react';
import Heading from '../component/Example';
import '../styles.css'
import '../story.css'


export default {
  title: 'Headings',
  component: Heading,
};
export const HeadingAll = () =><div><Heading variant = "display-1">display-1</Heading>
<Heading variant = "display-2">display-2</Heading> <Heading variant = "display-3">display-3</Heading>
<Heading variant = "display-4">display-4</Heading></div>
export const Heading1 = () => <Heading variant = "display-1">display-1</Heading>;
export const Heading2 = () => <Heading variant = "display-2">display-2</Heading>;
export const Heading3 = () => <Heading variant = "display-3">display-3</Heading>;
export const Heading4 = () => <Heading variant = "display-4">display-4</Heading>;
