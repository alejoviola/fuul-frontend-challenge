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
      name: "Mock Project",
      description: "This is an example project!",
      creation: new Date(),
      benefits: "Earn 10% of transaction by each referred.",
      social: {
        farcaster: "",
      },
    };
  }

  showReferralModal(referrerAddress: string): void {
    if (!this.projectInfo) {
      throw new Error("Fuul no initiated");
    }
    Modal.showModal(this.projectInfo);
  }
}

export default new Fuul();
