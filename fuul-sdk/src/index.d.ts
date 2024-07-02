declare module "fuul-sdk" {
  export interface ProjectData {
    name: string;
    description: string;
    creation: Date;
    benefits: string;
    social: {
      farcaster: string;
    };
  }

  export class Fuul {
    init(apiKey: string): void;
    showReferralModal(referrerAddress: string): void;
  }

  const fuul: Fuul;
  export default fuul;
}
