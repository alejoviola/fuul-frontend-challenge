"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("./components");
class Fuul {
    constructor() {
        this.apiKey = null;
        this.projectInfo = null;
    }
    init(apiKey) {
        this.apiKey = apiKey;
        this.projectInfo = this.fetchProjectData(apiKey);
    }
    fetchProjectData(apiKey) {
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
    showReferralModal(referrerAddress) {
        if (!this.projectInfo) {
            throw new Error("Fuul no initiated");
        }
        components_1.Modal.showModal(this.projectInfo, referrerAddress);
    }
}
exports.default = new Fuul();
