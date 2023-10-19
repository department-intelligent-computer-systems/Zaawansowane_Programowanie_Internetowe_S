export class TreeNodeConcrete<T> implements TreeNode<T> {
    private value: T;
    private children: TreeNode<T>[] = [];
  
    constructor(value: T) {
      this.value = value;
    }
  
    getValue(): T {
      return this.value;
    }
  
    addChild(node: TreeNode<T>): void {
      this.children.push(node);
    }
  
    getChildren(): TreeNode<T>[] {
      return this.children;
    }
  
    visit(action: (node: TreeNode<T>) => void): void {
      action(this); 
  
      this.children.forEach(child => {
        child.visit(action);
      });
    }
  }