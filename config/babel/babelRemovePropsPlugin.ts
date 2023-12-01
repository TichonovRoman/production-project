import {PluginItem} from "@babel/core";

export default function(): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        // если у этой ноды есть это имя, то удаляем ее
                        if(forbidden.includes(nodeName)) {
                            current.parentPath.remove()
                        }
                    }
                })
            }
        },
    };
}