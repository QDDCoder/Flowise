import { DynamicStructuredTool } from "@langchain/core/tools"
import { z } from "zod"

export const desc = `讲笑话工具，输入一个提示，会讲一个笑话`

export interface LaozhanParameters {
    description?: string
}

export class Laozhan extends DynamicStructuredTool {
    constructor(args?: LaozhanParameters) {
        super({
            name: "joke",
            description: args?.description || desc,
            schema: z.object({
                input: z.string().describe("笑话的主题或提示")
            }),
            func: async (input: { input: string }) => {
                console.log('input', input.input)
                try {
                    return "笑话：" + input.input
                } catch (error) {
                    return "I don't know how to do that."
                }
            }
        })
    }
}