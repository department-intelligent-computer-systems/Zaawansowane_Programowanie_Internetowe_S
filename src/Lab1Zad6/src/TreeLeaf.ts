export class TreeLeaf<T> implements TreeNode<T> {
    private value: T;
  
    constructor(value: T) {
      this.value = value;
    }
  
    getValue(): T {
      return this.value;
    }
  
    addChild(node: TreeNode<T>): void {
        throw new Error("Cannot add child to leaf node");
    }
  
    getChildren(): TreeNode<T>[] {
      return []; 
    }
  
    visit(action: (node: TreeNode<T>) => void): void {
      action(this);
    }
  }