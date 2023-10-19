import { TreeNodeConcrete } from "./TreeNodeConcrete";
import { TreeLeaf } from "./TreeLeaf";
const root = new TreeNodeConcrete("Root");
const child1 = new TreeLeaf("Child 1");
const child2 = new TreeNodeConcrete("Child 2");
const child3 = new TreeLeaf("Child 3");

child2.addChild(new TreeLeaf("Child 2.1"));
child2.addChild(new TreeLeaf("Child 2.2"));

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);


function printValue(node: TreeNode<string>): void {
  console.log(node.getValue());
}

root.visit(printValue);