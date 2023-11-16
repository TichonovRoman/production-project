import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ArticleRecommendationsList} from "./ArticleRecommendationsList";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Article} from "entities/Article";

const article: Article = {
    id: "1",
    img: "",
    createdAt: "",
    views: 123,
    user: {id: "1", username: "123"},
    blocks: [],
    type: [],
    title: "123",
    subtitle: "dgdfgdf"
}

export default {
    title: "features/ArticleRecommendationsList",
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=1`,
                method: "GET",
                status: 200,
                response:
                    [
                        {...article, id: "1"},
                        {...article, id: "2"},
                        {...article, id: "3"},
                    ],

            },
        ],
    },

} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})]