import assert from 'node:assert'
import { describe, it } from 'node:test'
import { hex2rgb } from './index.ts'

describe('hex2rgb should', () => {
  const whiteHex = '#FFFFFF'
  const blackHex = '#000000'
  const redHex = '#FF0000'

  it('convert hex examples correctly', () => {
    assert.strictEqual(hex2rgb(whiteHex), 'rgb(255, 255, 255)')
    assert.strictEqual(hex2rgb(blackHex), 'rgb(0, 0, 0)')
    assert.strictEqual(hex2rgb(redHex), 'rgb(255, 0, 0)')
  })
  it('convert alpha value correctly', () => {
    assert.strictEqual(hex2rgb(whiteHex, 0.4), 'rgba(255, 255, 255, 0.4)')
    assert.strictEqual(hex2rgb(blackHex, 0), 'rgb(0, 0, 0)')
    assert.strictEqual(hex2rgb(redHex, 1), 'rgba(255, 0, 0, 1)')
  })
  it('set alpha to 1 if illegal value', () => {
    assert.strictEqual(hex2rgb(whiteHex, 2), 'rgba(255, 255, 255, 1)')
    assert.strictEqual(hex2rgb(whiteHex, -1), 'rgba(255, 255, 255, 1)')
  })
})
