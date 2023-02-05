const getWidth = function(n) {
  return Math.pow(2, n + 1);
}

const getHeight = function(n) {
  if (n < 0) {
    return 0;
  }
  return Math.pow(2, n);
}

const getLineType = function(line) {
  if (line !== undefined && (line.toLowerCase() === 'standard' || line.toLowerCase() === 'bold')) {
    return line.toLowerCase();
  }
  return 'standard';
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const isValidRotation = function(rotation) {
  return rotation !== undefined && (rotation.toLowerCase() === 'left' || rotation.toLowerCase() === 'right' || rotation.toLowerCase() === 'standard');
}

const drawLine = function(board, pos, size, type) {
  if (type === 'H') {
    for (var i = 0; i < getWidth(size); i++) {
      board[pos.y][pos.x + i] = '_';
    }
  } else if (type === 'L') {
    for (var i = 0; i < getHeight(size); i++) {
      board[pos.y + i][pos.x + getWidth(size) - i - 1] = '╲';
    }
  } else if (type === 'R') {
    for (var i = 0; i < getHeight(size); i++) {
      board[pos.y + i][pos.x + i] = '╱';
    }
  }
}

const sierpinski = function(n, size, board, pos, type) {
  if (n === 0) {
    drawLine(board, pos, size, type);
    return;
  }

  if (type === 'H') {
    sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y }, 'R');
    sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 2), y: pos.y + getHeight(size - 1) }, 'H');
    sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y }, 'L');
  } else if (type == 'L') {
    sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y }, 'H');
    sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y }, 'L');
    sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 2), y: pos.y + getHeight(size - 1) }, 'R');
  } else if (type === 'R') {
    sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y }, 'H');
    sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y }, 'R');
    sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 2), y: pos.y + getHeight(size - 1) }, 'L');
  }
  
}

const draw = function(board, lineType) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  if (lineType === 'bold') {
    return '\u001b[1m' + result + '\u001b[22m';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }

  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const rotate = config !== undefined && isValidRotation(config.rotate) ? config.rotate.toLowerCase() : 'standard';
  const lineType = config !== undefined ? getLineType(config.line) : undefined;

  const board = createBoard(getWidth(size), getHeight(size));

  var type = 'H';
  if (rotate === 'left') {
    type = 'L';
  } else if (rotate === 'right') {
    type = 'R';
  }
  sierpinski(n, size, board, { x: 0, y: 0 }, type);
  
  return draw(board, lineType);
}

module.exports = {
  create: create
};