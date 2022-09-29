class  Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}


function getElementAt(qIndex, listHead) {
    //   Node.data = qIndex;
    let temp = listHead;
    let val = [];
    while (temp.next != null) {
      val.push(temp.data);
      temp = temp.next;
    }
    if (temp.next === null) {
      val.push(temp.data);
    }
    if (val[qIndex - 1] === undefined) {
      return -1;
    } else {
      return val[qIndex - 1];
    }
  }

