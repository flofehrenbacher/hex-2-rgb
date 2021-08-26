import { hex2rgb } from './index'

describe('hex2rgb should', () => {
  const whiteHex = '#FFFFFF'
  const blackHex = '#000000'
  const redHex = '#FF0000'

  it('convert hex examles correctly', () => {
    expect(hex2rgb(whiteHex)).toEqual('rgb(255, 255, 255)')
    expect(hex2rgb(blackHex)).toEqual('rgb(0, 0, 0)')
    expect(hex2rgb(redHex)).toEqual('rgb(255, 0, 0)')
  })
  it('convert alpha value correctly', () => {
    expect(hex2rgb(whiteHex, 0.4)).toEqual('rgba(255, 255, 255, 0.4)')
    expect(hex2rgb(blackHex, 0)).toEqual('rgb(0, 0, 0)')
    expect(hex2rgb(redHex, 1)).toEqual('rgba(255, 0, 0, 1)')
  })
  it('set alpha to 1 if illegal value', () => {
    expect(hex2rgb(whiteHex, 2)).toEqual('rgba(255, 255, 255, 1)')
    expect(hex2rgb(whiteHex, -1)).toEqual('rgba(255, 255, 255, 1)')
  })
})
