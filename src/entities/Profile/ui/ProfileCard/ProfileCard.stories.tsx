import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ProfileCard} from "@/entities/Profile";
import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";
import avatar from '@/shared/assets/tests/storybook.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: "Павел",
        lastname: "Сидоров",
        age: 20,
        currency: Currency.EUR,
        country: Country.Russia,
        city: 'Saratov',
        username: "hazker",
        avatar,
    }
};

export const withError = Template.bind({});
withError.args = {
    error: 'some error'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
