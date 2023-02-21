export function myFunction(myNum: number): string | undefined {
    if (myNum === 5) {
      return 'true';
    } else if (myNum < 5 && myNum >= 0) {
      return 'false';
    } else if (myNum > 5) {
      return 'big';
    } else {
    return 'negative'
  }
}