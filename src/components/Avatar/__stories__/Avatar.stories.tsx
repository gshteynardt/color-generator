import type { Meta, StoryObj } from '@storybook/react';

import { Showcase } from '~/demo/Showcase/Showcase';
import { ShowcaseItem } from '~/demo/ShowcaseItem/ShowcaseItem';
import { FaceRobot } from '~/icons/FaceRobot';
import { Avatar } from '../Avatar';

const meta = {
    title: 'Example/Avatar',
    component: Avatar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const textProps = {
    text: 'UI',
};

export const Text: Story = {
    args: {
        text: 'UI',
    },
};

const iconProps = {
    icon: <FaceRobot />,
};

export const Icon: Story = {
    args: {
        icon: <FaceRobot />,
    },
};

export const AvatarShowcase: Story = {
    name: 'Showcase',
    render: () => (
        <>
            <Showcase title="text">
                <ShowcaseItem title="s">
                    <Avatar {...textProps} size="s" />
                </ShowcaseItem>
                <ShowcaseItem title="m">
                    <Avatar {...textProps} size="m" />
                </ShowcaseItem>
                <ShowcaseItem title="l">
                    <Avatar {...textProps} size="l" />
                </ShowcaseItem>
            </Showcase>
            <Showcase title="icon">
                <ShowcaseItem title="s">
                    <Avatar size="s" {...iconProps} />
                </ShowcaseItem>
                <ShowcaseItem title="m">
                    <Avatar size="m" {...iconProps} />
                </ShowcaseItem>
                <ShowcaseItem title="l">
                    <Avatar
                        size="l"
                        icon={<FaceRobot width={20} height={20} />}
                    />
                </ShowcaseItem>
            </Showcase>
        </>
    ),
};
