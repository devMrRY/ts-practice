// IMPORT CONSTANTS AND MAKE UNINION OF ALL CONSTANTS VALUES AND KEYS SEPERATELY

export type TActionModule = typeof import('../constants');

export type TActionKeys = keyof TActionModule
export type TActionValues = TActionModule[keyof TActionModule]