import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('matches prefix', () => {
  assert.deepEqual(api.prefixSearch(['apple', 'pear', 'apricot'], 'ap'), ['apple', 'apricot']);
});
test('matches case insensitively', () => {
  assert.deepEqual(api.prefixSearch(['Apple', 'apricot'], 'AP'), ['Apple', 'apricot']);
});
test('preserves insertion order', () => {
  assert.deepEqual(api.prefixSearch(['apply', 'apple'], 'app'), ['apply', 'apple']);
});
test('deduplicates case variants', () => {
  assert.deepEqual(api.prefixSearch(['Apple', 'APPLE'], 'app'), ['Apple']);
});
test('applies result limit', () => {
  assert.deepEqual(api.prefixSearch(['ant', 'ape', 'air'], 'a', 2), ['ant', 'ape']);
});
test('returns empty for no matches', () => {
  assert.deepEqual(api.prefixSearch(['cat'], 'z'), []);
});
