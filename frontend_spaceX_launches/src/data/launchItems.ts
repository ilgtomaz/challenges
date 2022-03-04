import { LaunchType } from "../types";
import { Launch } from "./launch";

export default class LaunchItems {
  public items: Launch[];

  constructor(launches: LaunchType[]) {
    this.items = launches.map((launch) => new Launch(launch));
  }
}
