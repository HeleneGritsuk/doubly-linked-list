const Node = require('./node');

class LinkedList {

   constructor() {
        this.length=0;
        this._head = null;
        this._tail = null;
        }
    append(data) {
        var node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev=this._tail;
            this._tail=node;
        }
        else {
            this._head=node;
            this._tail=node;
        }
        this.length++;

        return this;
    }
    head() {
        return (this._head==null) ? null : this._head.data;         
    }
    tail() {
        return (this._tail==null) ? null : this._tail.data;
    }

    at(index) {
        var currentnode=this._head;
        for (var i=0;i<index;i++)
        {
            currentnode=currentnode.next;
        }

        return currentnode.data;
    }

    insertAt(index, data) {
        var node = new Node(data);


        //вставка в пустой список
        if(this.length==0) {
            this._head=node;
            this._tail=node;
        }
        //вставка в конец
        else if(this.length==index) {
                this._tail.next = node;
                node.prev=this._tail;
                this._tail=node;
            }
        //вставка в начало
        else if(index==0)
            {
                let currentnode=this._head;
                currentnode.prev=node;
                node.next=currentnode;
                this._head=node;
            }

        //вставка в середину
        else
        {
            let currentnode=this._head;
            for (var i=0;i<index;i++)
            {
                currentnode=currentnode.next;
            }
                var previous=currentnode.prev;
                currentnode.prev=node;
                previous.next=node;
                node.next=currentnode;
                node.prev=previous;
        }

        this.length++;
        return this;
        
    }

    isEmpty() {
        if (this.length) {
            return false;
        }
        else return true;
    }

    clear() {
        var currentnode=this._head;
        var current=currentnode;
        for (var i=0;i<this.length;i++) {
            var deleted=current;
            current=currentnode.next;
            deleted.prev=null;
            deleted.next=null;
            deleted.data=null;
        }
        this._head=null;
        this._tail=null;
        this.length=0;
        return this;
    }

    deleteAt(index) {
        if ((this.length==1) && (index==0)) {
            this._head=null;
            this._tail=null;
            this.length=null;
        }
        else if(index==0)
            {
                let currentnode=this._head;
                currentnode=currentnode.next;
                currentnode.prev=null;
                this._head=currentnode;
                this.length--;
            }

        else if(this.length==(index+1)) {
            this._tail=this._tail.prev;
            this._tail.next=null;
            }
        else {
            let currentnode=this._head;
                for (var i=0;i<index;i++)
                {
                    currentnode=currentnode.next;
                }
            var previous=currentnode.prev;
            var next_elem=currentnode.next;
            previous.next=next_elem;
            next_elem.prev=previous;
            currentnode=null;
            this.length--;
        }
       return this;
    }

    reverse() {
        
        var buffer=this._tail;
        this._tail=this._head;
        this._head=buffer;
        var current=this._tail;
        for (var i=0;i<this.length;i++) {
            var prev=current.prev;
            var next=current.next;
            current.prev=next;
            current.next=prev;
            current=current.prev;
        }
        return this;

    }

    indexOf(data) {
        var solution=-1;
        var currentnode=this._head;
            for (var i=0;i<this.length;i++)
            {            
                if (currentnode.data==data)
                {
                    solution=i;
                    break;
                }
                currentnode=currentnode.next;

            }
            return solution;
    }
}

module.exports = LinkedList;
