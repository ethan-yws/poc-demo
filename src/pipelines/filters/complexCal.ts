import { PersonProp } from "../../interfaces/person.interface";

export const ageFilter = (data: PersonProp[], threshold: number) => {
  const res = data.filter((el) => parseInt(el.age) >= threshold);

  return res;
};
