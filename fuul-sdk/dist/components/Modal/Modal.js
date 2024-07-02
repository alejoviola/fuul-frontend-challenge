"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import "./modal.css";
class Modal {
    showModal(projectInfo, address) {
        //////////////
        // Elements //
        //////////////
        const container = document.createElement("div");
        container.classList.add("fuul-modal-container");
        const modal = document.createElement("aside");
        modal.classList.add("fuul-modal");
        // Modal Header
        const modalHeader = document.createElement("div");
        modalHeader.classList.add("fuul-modal-header");
        const modalTitle = `<span className="fuul-modal-title">Referal link</span>`;
        const closeButton = document.createElement("button");
        const crossIcon = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="black"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            fill="black"
          />
        </svg>
    `;
        closeButton.innerHTML = crossIcon;
        modalHeader.innerHTML = modalTitle + closeButton;
        modal.appendChild(modalHeader);
        // Modal Content
        const modalContent = document.createElement("div");
        modalContent.classList.add("fuul-modal-content");
        modalContent.innerHTML = `
      <span className="fuul-modal-project-name">${projectInfo.name}</span>
      <span className="fuul-modal-project-description">
        ${projectInfo.description}
      </span>
    `;
        modal.appendChild(modalContent);
        // Modal Link
        const modalLinkContainer = document.createElement("div");
        const benefits = `
        <span>
          ${projectInfo.benefits}
        </span>
    `;
        modalLinkContainer.innerHTML = benefits;
        const referredContainer = document.createElement("div");
        referredContainer.classList.add("fuul-referred-container");
        const referredLink = `<a className="fuul-referred-link">${location.hostname}/?referred=${address}</a>`;
        const copyButton = document.createElement("button");
        copyButton.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="black"
      >
        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
      </svg>
    `;
        referredContainer.innerHTML = referredLink + copyButton;
        modalLinkContainer.appendChild(referredContainer);
        modal.appendChild(modalLinkContainer);
        document.body.appendChild(modal);
    }
}
exports.default = new Modal();
