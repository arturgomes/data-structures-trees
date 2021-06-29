/**
 * Nome:
 * RGA:
 * email:
 * Data de criação:
 */

class Node {
    //...
}

class RBTree {
    constructor() {
        this.root = null;
    }
    findElement(chave, root = this.root) {
        //...
    }
    insert(data) {
        //...
    }

    delete(data) {
        //...
    }

    preOrder(root = this.root) {
        if (!root) {
            return '.';
        }
        let mystring = '(';
        mystring += root.data + ' ';
        mystring += this.preOrder(root.left);
        mystring += ' ';
        mystring += this.preOrder(root.right);
        mystring += ')';
        return mystring;
    }

    inOrder(root = this.root) {
        if (!root) {
            return '.';
        }
        let mystring = '(';
        mystring += this.inOrder(root.left);
        mystring += ' ' + root.data + ' ';
        mystring += this.inOrder(root.right);
        mystring += ')';
        return mystring;
    }
    posOrder(root = this.root) {
        if (!root) {
            return '.';
        }
        let mystring = '(';
        mystring += this.posOrder(root.left);
        mystring += ' ';
        mystring += this.posOrder(root.right);
        mystring += ' ' + root.data;
        mystring += ')';
        return mystring;
    }

    findMin(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.left) {
            return this.findMin(root.left);
        }
        return root;
    }

    findMinPrint(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.left) {
            return this.findMinPrint(root.left);
        }
        return root.data;
    }

    findMax(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.right) {
            return this.findMax(root.right);
        }
        return root;
    }

    findMaxPrint(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.right) {
            return this.findMaxPrint(root.right);
        }
        return root.data;
    }
    getKey(chave, root = this.root) {
        if (!root) {
            return null;
        } else if (root.data === chave) {
            return root;
        }
        if (root.data > chave) {
            return this.getKey(chave, root.left);
        } else {
            return this.getKey(chave, root.right);
        }
    }
    findSuccessor(data) {
        let mynode = this.getKey(data);

        if (mynode) {
            // se houver sub-árvore direita
            if (mynode.right !== null) {
                //busque o menor elemento da subárore
                let res = this.findMin(mynode.right);
                //retorne o elemento, pois é o sucessor
                return res.data;
            }
            let p = mynode.parent;
            while (p !== null && mynode === p.right) {
                mynode = p;
                p = p.parent;
            }
            return p.data;
        }
    }
    findAntecessor(data) {
        let mynode = this.getKey(data);
        if (mynode.left !== null) {
            //busque o menor elemento da subárore
            let res = this.findMax(mynode.left);
            //retorne o elemento, pois é o sucessor
            return res.data;
        }
        let p = mynode.parent;
        while (p !== null && mynode === p.left) {
            mynode = p;
            p = p.parent;
        }
        return p.data;
    }
}
