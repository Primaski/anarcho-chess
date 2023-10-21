/*** DO NOT ALTER ***/
const DEFAULT_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const BOARD_LENGTH_WIDTH_DEFAULT = 8;



/* Edit with caution */

/* Must be at least 4. Castling disabled if board is not 8x8 */
var BOARD_LENGTH = BOARD_LENGTH_WIDTH_DEFAULT;
var BOARD_WIDTH = BOARD_LENGTH_WIDTH_DEFAULT;

/* White pices must be all caps, black pieces all lower, alternating between colors. */
var PIECE = {
    pawn: { 
        charWhite: 'P',
        charBlack: 'p'
    },
    knight: {
        charWhite: 'N',
        charBlack: 'n'
    },
    bishop: {
        charWhite: 'B',
        charBlack: 'b'
    },
    rook: {
        charWhite: 'R',
        charBlack: 'r'
    },
    queen: {
        charWhite: 'Q',
        charBlack: 'q'
    },
    king: {
        charWhite: 'K',
        charBlack: 'k'
    }
};