for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        row.appendChild(cell);
    }
    board.appendChild(row);
}

let currentPlayer = 'black';

board.addEventListener('click', (e) => {
    const cell = e.target;
    if (cell.classList.contains('cell')) {
        if (!cell.dataset.player) {
            cell.dataset.player = currentPlayer;
            cell.style.backgroundColor = currentPlayer;
            currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
        }
    }
});
