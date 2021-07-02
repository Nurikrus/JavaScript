let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращает направление введенное пользователем.
     */
    getDirection() {
        const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число (1,2,3,4,6,7,8 или 9), куда вы хотите перемещаться, 'Отмена' для выхода."));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        }
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                if (nextPosition.y > 9 || nextPosition.y < 0 || nextPosition.x > 9 || nextPosition.x < 0) {
                    nextPosition.y--;
                    nextPosition.x++;
                }
                break;
            case 2:
                nextPosition.y++;
                if (nextPosition.y > 9 || nextPosition.y < 0) {
                    nextPosition.y--;
                }
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                if (nextPosition.y > 9 || nextPosition.y < 0 || nextPosition.x > 9 || nextPosition.x < 0) {
                    nextPosition.y--;
                    nextPosition.x--;
                }
                break;
            case 4:
                nextPosition.x--;
                if (nextPosition.x > 9 || nextPosition.x < 0) {
                    nextPosition.x++;
                }
                break;
            case 6:
                nextPosition.x++;
                if (nextPosition.x > 9 || nextPosition.x < 0) {
                    nextPosition.x--;
                }
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                if (nextPosition.y > 9 || nextPosition.y < 0 || nextPosition.x > 9 || nextPosition.x < 0) {
                    nextPosition.y++;
                    nextPosition.x++;
                }
                break;
            case 8:
                nextPosition.y--;
                if (nextPosition.y > 9 || nextPosition.y < 0) {
                    nextPosition.y++;
                }
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                if (nextPosition.y > 9 || nextPosition.y < 0 || nextPosition.x > 9 || nextPosition.x < 0) {
                    nextPosition.y++;
                    nextPosition.x--;
                }
                break;
        }
        return nextPosition;
    }
}