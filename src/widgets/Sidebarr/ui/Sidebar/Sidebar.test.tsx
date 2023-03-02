import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "../Sidebar/Sidebar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('with have class', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
     });
    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // fireEvent - по нему можем подцепиться к событиям
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
     });
});
