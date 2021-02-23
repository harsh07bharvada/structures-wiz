class SegmentTree {

    tree = []
    list = []
    top = 0

    constructor(list = []) {

        //If list is valid then assign
        if (list && Array.isArray(list)) {
            this.list = list;

        }
        this.build();
    }

    build() {

        //If list is not empty then build tree
        if (this.list.length) {
            const low = 0,
                high = this.list.length - 1;
            this.top = this.createTreeNode(low, high, 0);
        }

    }

    createTreeNode(low, high, pos) {
        if (low === high) {
            this.tree[pos] = this.list[low];
            return;
        }
        const mid = Math.floor((low + high) / 2);
        const leftPos = 2 * pos + 1;
        const rightPos = 2 * pos + 2;
        this.createTreeNode(low, mid, leftPos);
        this.createTreeNode(mid + 1, high, rightPos);
        this.tree[pos] = this.tree[leftPos] + this.tree[rightPos];
    }

    getRangeSum(QL = 0, QR = 0) {

        if (QL > this.list.length - 1)
            return 0;

        if (QL === QR)
            return this.list[QL];

        const low = 0,
            high = this.list.length - 1;
        return this.getRangeSumHelper(low, high, QL, QR, 0);
    }

    getRangeSumHelper(low, high, QL, QR, pos) {

        if (low >= QL && high <= QR) {
            return this.tree[pos];
        }
        if ((QL > high) || (QR < low)) {
            return 0;
        }

        const mid = Math.floor((low + high) / 2);
        const leftPos = 2 * pos + 1;
        const rightPos = 2 * pos + 2;
        const leftSum = this.getRangeSumHelper(low, mid, QL, QR, leftPos);
        const rightSum = this.getRangeSumHelper(mid + 1, high, QL, QR, rightPos);
        return leftSum + rightSum;
    }

    getTree() {
        return Array.from(this.tree);
    }

    getList() {
        return Array.from(this.list);
    }

    updateRange(UL = 0, UR = 0, increment = 0) {

        if (!increment)
            return;

        const low = 0,
            high = this.list.length - 1;
        this.updateRangeHelper(low, high, UL, UR, 0, increment);
    }

    updateRangeHelper(low, high, UL, UR, pos, increment) {
        if (UL > high || UR < low) {
            return 0;
        }
        if (low === high) {
            this.list[low] += increment;
            this.tree[pos] += increment;
            return;
        }

        const mid = Math.floor((low + high) / 2);
        const leftPos = 2 * pos + 1;
        const rightPos = 2 * pos + 2;
        this.updateRangeHelper(low, mid, UL, UR, leftPos, increment);
        this.updateRangeHelper(mid + 1, high, UL, UR, rightPos, increment);
        this.tree[pos] = this.tree[leftPos] + this.tree[rightPos];
    }

}

module.exports.SegmentTree = SegmentTree;