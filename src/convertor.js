
export default function convertor(peso, convertor) {
  if (convertor == "libraAkilogramo") {
    return Math.round(peso * 1 / 2.2 * 100) / 100 + "kg";
  }
  if (convertor == "kilogramoAlibra") {
    return Math.round(peso * 2.2 / 1 * 100) / 100 + "lb";
  }
  if (convertor == "metroAkilometro") {
    return Math.round(peso / 1000 * 100) / 100 + "kl";
  }
  if (convertor == "kilometroAmetro") {
    return Math.round(peso * 1000 * 100) / 100 + "m";
  }
}

// convertor(2, "libraAkilogramo") // 0.91kg
// convertor(2, "kilogramoAlibra") // 4.4lb
// convertor(1000, "metroAkilometro") // 1kl
// convertor(2, "kilometroAmetro") // 2000m
