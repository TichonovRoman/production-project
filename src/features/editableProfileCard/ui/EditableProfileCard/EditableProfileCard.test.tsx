import {fireEvent, screen} from "@testing-library/react";
import {EditableProfileCard} from "./EditableProfileCard";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe("features/EditableProfileCard", () => {
    test("with only first param", () => {
        componentRender(<EditableProfileCard />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

});