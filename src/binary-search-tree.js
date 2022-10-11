const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){

    this.newRoot = null;
  }

  root() {

    return this.newRoot;

  }

  add(data) {
    
this.newRoot = addWithin(this.newRoot, data)

function addWithin(node, data){

if (!node) return new Node(data);

if (node.data === data) return node;

if ( data < node.data ) node.left = addWithin( node.left,data );

else node.right = addWithin( node.right, data );

return node;
}

  }

  has( data ) {
    return searchWithin(this.newRoot, data);

    function searchWithin(node,data){

if ( !node ) return false;

if ( node.data === data) return true;

 return data < node.data ? searchWithin(node.left, data) 
                           : searchWithin(node.right, data);

    }
  }

  find( data ) {
    return findWithin(this.newRoot, data);

    function findWithin(node,data){

if ( !node ) return null;

if ( node.data === data) return node;

 return data < node.data ? findWithin(node.left, data) 
                           : findWithin(node.right, data);
  }
  }
  remove(data) {
    
    this.root = removeData(this.newRoot, data)

    function removeData(node,data){

if ( !node ) return null;

if (data < node.data){

  node.left = removeData(node.left, data);
  return node;

}

else if (data > node.data){

  node.right = removeData(node.right, data);
  return node;

}

else {

if ( !node.left && !node.right ) return null;

if (!node.left){

  node = node.right;
  return node;

}

if (!node.right){

  node = node.left;
  return node;

}

let minRight = node.right;

while (minRight.left){
  minRight = minRight.left;
}
node.data = minRight.data;

node.right = removeData(node.right, minRight.data);

return node;

}

    }

  }

  min() {

    if (!this.newRoot) return null;

    let node = this.newRoot;

    while(node.left){
    
      node = node.left;

    }

    return node.data;

  }

  max() {
   

    if (!this.newRoot) return null;

    let node = this.newRoot;

    while(node.right){
    
      node = node.right;

    }

    return node.data;

  }
}

module.exports = {
  BinarySearchTree
};