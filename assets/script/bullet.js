cc.Class({
    extends: cc.Component,

    properties: {
        speed: 800,
        pool: null
    },

    reuse (pool) {
        this.pool = pool;
    },

    onCollisionEnter (other, self) {
        this.pool.put(this.node);
    },

    update (dt) {
        this.node.y += this.speed * dt;
        if (this.node.y > 800) {
            this.pool.put(this.node);
        }
    },
});
