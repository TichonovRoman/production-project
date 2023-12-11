import {Flex, FlexPropsType} from "@/shared/ui/Stack/Flex/Flex";

type VStackProps = Omit<FlexPropsType, "direction">

export const VStack = (props: VStackProps) => {
    const {align = "start"} = props
    return (
        <Flex direction={"column"} {...props} align={align}/>
    );
};