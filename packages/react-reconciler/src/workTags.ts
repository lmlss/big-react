export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText
	| typeof Fragment;

export const FunctionComponent = 0;
export const HostRoot = 3; // 项目挂载的根节点
// HostComponent <div>123</div> 中的 div
export const HostComponent = 5;
// 123 就是 HostText
export const HostText = 6;
export const Fragment = 7;
