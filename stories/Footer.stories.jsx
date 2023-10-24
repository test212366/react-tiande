import React from 'react';
import Footer from '../components/Footer/Footer';

const conf = {
  title: 'Website/Footer',
  component: Footer,
  argTypes: {},
};

export default conf;

function Template(args) {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
}

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen',
};
