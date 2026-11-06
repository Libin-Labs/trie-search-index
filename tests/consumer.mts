import * as api from '@lp-labs/trie-search-index';
import { prefixSearch } from '@lp-labs/trie-search-index';
console.log(prefixSearch(['apple', 'apricot', 'pear'], 'ap'));
// @ts-expect-error invalid argument must be rejected by declarations
api.prefixSearch(['apple'], 3);
