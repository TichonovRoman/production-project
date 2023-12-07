import {memo, ReactNode} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Drawer.module.scss"
import {Portal} from "shared/ui/Portal/Portal";
import {Overlay} from "../Overlay/Overlay";
import {useModal} from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {className, onClose, children, isOpen, lazy} = props;
    const {theme} = useTheme();

    const {isMounted, isClosing, close} = useModal({
        animationDelay: 300, isOpen, onClose
    })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, "app_drawer"])}>
                <Overlay onClick={close}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
