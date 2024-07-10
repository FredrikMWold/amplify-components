import { tokens } from '@equinor/eds-tokens';
import { Meta, StoryFn } from '@storybook/react';

import WorkflowStatusBar from './WorkflowStatusBar';

const { colors } = tokens;
export default {
  title: 'Deprecated/Data Display/Workflow/WorkflowStatusBar',
  component: WorkflowStatusBar,
  argTypes: {
    labels: { control: 'array' },
    options: { control: 'array' },
    activeNode: { control: 'text' },
    lineActiveColor: { control: 'color' },
    lineDefaultColor: { control: 'color' },
    showAlert: { control: 'boolean' },
    highlightActiveNode: { control: 'boolean' },
    tooltipPlacement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'right-start',
        'right-end',
        'left',
        'left-start',
        'left-end',
      ],
    },
    disableTooltip: { control: 'boolean' },
  },
  args: {
    options: [
      {
        label: 'One',
        value: '1',
        color: '#ff0000',
        backgroundColor: '#ff8484',
      },
      {
        label: 'Two',
        value: '2',
        color: '#008b2a',
        backgroundColor: '#77ff72',
      },
      {
        label: 'Three',
        value: '3',
        color: '#0f0097',
        backgroundColor: '#7a7bce',
      },
      {
        label: 'Four',
        value: '4',
        color: '#000000',
        backgroundColor: '#c7c7c7',
      },
      {
        label: 'Five',
        value: '5',
        color: '#ffe600',
        backgroundColor: '#d6d18e',
      },
      {
        label: 'Six',
        value: '6',
        color: '#ff00dd',
        backgroundColor: '#e489d8',
      },
      {
        label: 'Seven',
        value: '7',
        color: '#00ffff',
        backgroundColor: '#b1fcff',
      },
    ],
    activeNode: '3',
    showAlert: false,
    highlightActiveNode: false,
    tooltipPlacement: 'bottom',
    disableTooltip: false,
    lineActiveColor: colors.interactive.primary__resting.rgba,
    lineDefaultColor: colors.ui.background__medium.rgba,
  },
} as Meta;

interface WorkflowStatusBarStoryProps {
  options: {
    label: string;
    value: string;
    color: string;
    backgroundColor: string;
  }[];
  activeNode: string;
  showAlert: boolean;
  highlightActiveNode: boolean;
  disableTooltip: boolean;
  lineActiveColor: string;
  lineDefaultColor: string;
}

export const Primary: StoryFn<WorkflowStatusBarStoryProps> = (args) => (
  <div style={{ fontSize: '16px' }}>
    <WorkflowStatusBar
      options={args.options}
      activeNode={args.activeNode}
      showAlert={args.showAlert}
      highlightActiveNode={args.highlightActiveNode}
      disableTooltip={args.disableTooltip}
      lineActiveColor={args.lineActiveColor}
      lineDefaultColor={args.lineDefaultColor}
    />
  </div>
);
