let game = {
    /**
     * Запускакает игру.
     */
    run() {
        while (true) {
            // Получаем направлени е от игрока.
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    // Этот метод вполняется при открытии игры.
    init() {
        console.log("Ваше положение на поле в виде о.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
}

game.init();