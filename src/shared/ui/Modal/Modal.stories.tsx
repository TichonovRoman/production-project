import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import React from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {OutlinedDark} from "shared/ui/Button/Button.stories";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Text Text Text Text',
};
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Text Text Text Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
