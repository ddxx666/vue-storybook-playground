import type { Meta, StoryObj } from '@storybook/vue';
import Card from '@/components/card';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Card },
    template: '<card @onClick="onClick" v-bind="$props" />',
  }),

  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Primary'
  },
  // 覆盖默认渲染逻辑
  render: (args, { argTypes }) => {
    return {
      components: { Card },
      setup() {
        return { args };
      },
      template: '<div style="padding: 30px"><Card v-bind="args" /></div>'
    }
  }
};

export const Primary = {
  args: {
    primary: true,
    title: 'MyCard'
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

