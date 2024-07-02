import { Modal } from "./components";
import { ProjectData } from "./defs/components";

class Fuul {
  private apiKey: string | null = null;
  private projectInfo: ProjectData | null = null;

  init(apiKey: string): void {
    this.apiKey = apiKey;
    this.projectInfo = this.fetchProjectData(apiKey);
  }

  private fetchProjectData(apiKey: string): ProjectData {
    return {
      name: "PEDRO NFT COLLECTION",
      description: "This is a project for Pedro that dances!",
      creation: new Date(),
      benefits: "Earn 10% of transaction by each referred",
    };
  }

  showReferralModal(referrerAddress: string): void {
    if (!this.projectInfo) {
      throw new Error("Fuul no initiated");
    }
    Modal.showModal(this.projectInfo, referrerAddress);
  }
}

export default new Fuul();
