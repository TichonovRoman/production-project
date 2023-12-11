import {Flex, FlexPropsType} from "@/shared/ui/Stack/Flex/Flex";

type HStackProps = Omit<FlexPropsType, "direction">

export const HStack = (props: HStackProps) => {
    return (
        <Flex direction={"row"} {...props}/>
    );
};