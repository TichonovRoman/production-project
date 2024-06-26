import cls from "./Popover.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {ReactNode} from "react";
import {Popover as HPopover} from "@headlessui/react"
import {DropdownDirection} from "@/shared/types/ui";
import popupCls from "../../styles/popup.module.scss"
import {mapDirectionClass} from "@/shared/ui/Popups/styles/consts";

interface PopoverPropsType {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverPropsType) {
    const {className, trigger, direction = "bottom right", children} = props;
    const menuClasses = [mapDirectionClass[direction]]
    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button
                as={'div'}
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}