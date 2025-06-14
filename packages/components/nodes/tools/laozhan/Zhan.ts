import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { desc, Laozhan, LaozhanParameters } from './core'

class Laozhan_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    
    constructor() {
        this.label = '测试笑话'
        this.name = 'joke'
        this.version = 1.0
        this.type = 'Joke'
        this.icon = 'aa.svg'
        this.category = 'Tools'
        this.description = '讲笑话工具，输入一个提示，会讲一个笑话'
        this.baseClasses = [this.type, 'Tool', ...getBaseClasses(Laozhan)]
        this.inputs = [
            {
                label: '描述',
                name: 'description',
                type: 'string',
                rows: 4,
                default: desc,
                description: '告诉AI代理何时应该使用这个工具',
                additionalParams: true,
                optional: true
            }
        ]
    }

    async init(nodeData: INodeData): Promise<any> {
        const description = nodeData.inputs?.description as string

        const obj: LaozhanParameters = {}
        if (description) obj.description = description

        return new Laozhan(obj)
    }
}

module.exports = { nodeClass: Laozhan_Tools }