// IMPORT CONSTANTS AND MAKE UNINION OF ALL CONSTANTS VALUES AND KEYS SEPERATELY

type TActionModule = typeof import('../constants');

type TActionKeys = keyof TActionModule
type TActionValues = TActionModule[keyof TActionModule]