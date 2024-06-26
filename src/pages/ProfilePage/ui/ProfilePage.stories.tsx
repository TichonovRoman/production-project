import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from '@/pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";
import {Theme} from "@/shared/const/theme";

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: "Павел",
            lastname: "Сидоров",
            age: 20,
            currency: Currency.EUR,
            country: Country.Russia,
            city: 'Saratov',
            username: "hazker",
        }
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: "Павел",
            lastname: "Сидоров",
            age: 20,
            currency: Currency.EUR,
            country: Country.Russia,
            city: 'Saratov',
            username: "hazker",
        }
    }
})];
