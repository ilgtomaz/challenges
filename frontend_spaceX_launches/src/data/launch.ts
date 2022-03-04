import { LaunchType } from "../types";
import DefaultImage from "../assets/startreck.png";
const DEFAULT_ARTICLE_LINK = "https://www.space.com/search?searchTerm=";

export class Launch {
  public flightNumber: number;
  public missionName: string;
  public missionYear: number;
  public missionResult: string;
  public rocketName: string;
  public missionPatchImage: string;
  public articleLink: string;
  public isTherePatchImage: boolean;

  constructor(data: LaunchType) {
    this.flightNumber = data.flight_number;
    this.missionName = data.mission_name;
    this.missionYear = data.launch_year;
    this.missionResult = this.getMissionResult(data.launch_success);
    this.rocketName = data.rocket.rocket_name;
    this.setMissionPatchImage(data.links.mission_patch_small);
    this.articleLink = this.getArticleLink(data.links.article_link);
  }

  private getArticleLink(articleLink: string): string {
    if (articleLink) {
      return articleLink;
    }

    return `${DEFAULT_ARTICLE_LINK}${this.missionName}`;
  }

  private setMissionPatchImage(missionPatchImage: string): void {
    if (missionPatchImage) {
      this.missionPatchImage = missionPatchImage;
      this.isTherePatchImage = true;
      return;
    }

    this.missionPatchImage = DefaultImage;
    this.isTherePatchImage = false;
  }

  private getMissionResult(missionStatus: boolean): string {
    if (missionStatus) {
      return "success";
    }

    if (missionStatus === false) {
      return "failed";
    }

    return "without status";
  }
}
