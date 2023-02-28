import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import React from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

export default {
    title: "widgets/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
};
export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED
};
export const SECONDARY = Template.bind({});
SECONDARY.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators= [ThemeDecorator(Theme.DARK)]
export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED
};
RedDark.decorators= [ThemeDecorator(Theme.DARK)]
export const SECONDARYDark = Template.bind({});
SECONDARYDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
};
SECONDARYDark.decorators= [ThemeDecorator(Theme.DARK)]






// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)]