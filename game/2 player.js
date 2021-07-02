const player = {
    /**
     * Объект игорока, здесь будут все методы и свойства связанные с ним.
     * @property {int} x Позиция по Х-координате.
     * @property {int} y Позиция по У-координате.
     */
    x: 0,
    y: 0,

    /**
     * Двигает игрока по переданному направлению.
     * @param {{x:int,y:int}} nextPoint Следующая точка пользователя.
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
}