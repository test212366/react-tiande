import React from 'react';
import Header from '../components/Header/Header';

const conf = {
  title: 'Website/Header',
  component: Header,
  argTypes: {},
};

export default conf;

function Template(args) {
  return (
    <div>
      <Header {...args} />
    </div>
  );
}

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen',
};
