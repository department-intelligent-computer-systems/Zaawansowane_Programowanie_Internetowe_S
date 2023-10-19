interface TreeNode<T> {
    getValue(): T;
    addChild(node: TreeNode<T>): void;
    getChildren(): TreeNode<T>[];
    visit(action: (node: TreeNode<T>) => void): void;
}