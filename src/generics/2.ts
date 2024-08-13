type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  topType extends Pick<AllType, "name" | "color">,
  bottomType extends Pick<AllType, "position" | "weight">
>(top: topType, bottom: bottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
