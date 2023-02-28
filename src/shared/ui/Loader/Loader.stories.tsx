import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Loader} from "shared/ui/Loader/Loader";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {SECONDARYDark} from "shared/ui/AppLink/AppLink.stories";

export default {
    title: "widgets/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args}/>;

export const Normal = Template.bind({});
Normal.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators= [ThemeDecorator(Theme.DARK)]