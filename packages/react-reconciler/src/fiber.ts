import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';

export class FiberNode {
	type: any;
	tag: WorkTag;
	key: Key;
	stateNode: any;
	ref: Ref;

	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;

	pendingProps: Props;
	memoizedProps: Props | null;
	alternate: FiberNode | null; // 用于在 current 的 FiberNode 和 WIP FiberNode 之间切换
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 实例
		this.tag = tag;
		this.key = key;
		// HostComponent <div> 保存 div DOM
		this.stateNode = null;
		// FiberNode 的类型 FunctionComponent () => {}
		this.type = null;

		// 构成树状结构
		this.return = null;
		this.sibling = null;
		this.child = null;
		// <ul>li * 3</ul> 第一个 li 的 index 就是 0
		this.index = 0;
		this.ref = null;

		// 作为工作单元
		this.pendingProps = pendingProps; // 这个工作单元刚开始时的 props
		this.memoizedProps = null; // 工作完了的 props(确定下来的)

		this.alternate = null;
		// 副作用
		this.flags = NoFlags;
	}
}
