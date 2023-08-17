export default function getRandomColor(): string {
  const Random255 = () => Math.floor(Math.random() * 255);

  let newColor: string = `RGB(${Random255()},${Random255()},${Random255()})`;

  return newColor;
}
