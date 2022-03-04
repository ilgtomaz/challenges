export type LaunchType = {
  flight_number: number;
  mission_name: string;
  launch_year: number;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small: string;
    article_link: string;
  };
};