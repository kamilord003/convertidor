const expect = require('chai').expect
const convertor = require('..').default

describe('#convertor', function () {
  it('si esta en libra lo pasa a kilogramo', function () {
    const translation = convertor(2,"libraAkilogramo")
    expect(translation).to.equal("0.91kg")
  })
  it('si esta en kilogramo lo pasa a libra', function () {
    const translation = convertor(2,"kilogramoAlibra")
    expect(translation).to.equal("4.4lb")
  })
  it('si esta en metros lo pasa a kilometros', function () {
    const translation = convertor(1000,"metroAkilometro")
    expect(translation).to.equal("1kl")
  })
  it('si esta en kilometros lo pasa a metros', function () {
    const translation = convertor(2,"kilometroAmetro")
    expect(translation).to.equal("2000m")
  })
})
