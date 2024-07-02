import { ProjectData } from "../../defs";

class Modal {
  private container: HTMLDivElement | null = null;
  private modal: HTMLElement | null = null;

  public showModal(projectInfo: ProjectData, address: string): void {
    //////////////
    // Elements //
    //////////////
    this.container = document.createElement("div");
    this.container.classList.add("fuul-modal-container");

    this.modal = document.createElement("aside");
    this.modal.classList.add("fuul-modal");

    // Modal Header
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("fuul-modal-header");

    const modalTitle = document.createElement("span");
    modalTitle.classList.add("fuul-modal-title");
    modalTitle.innerHTML = "Referal link";

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
    closeButton.addEventListener("click", this.handleCloseModal);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    this.modal.appendChild(modalHeader);

    // Modal Content
    const modalContent = document.createElement("div");
    modalContent.classList.add("fuul-modal-content");

    const projectName = document.createElement("span");
    projectName.classList.add("fuul-modal-project-name");
    projectName.innerHTML = projectInfo.name;
    modalContent.appendChild(projectName);

    const projectDescription = document.createElement("span");
    projectDescription.classList.add("fuul-modal-project-description");
    projectDescription.innerHTML = projectInfo.description;
    modalContent.appendChild(projectDescription);

    this.modal.appendChild(modalContent);

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
    const referredLink = document.createElement("a");
    referredLink.classList.add("fuul-referred-link");
    referredLink.href = `${window.location.origin}/?referred=${address}`;
    referredLink.innerHTML = `${window.location.origin}/?referred=${address}`;

    referredContainer.appendChild(referredLink);

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
    copyButton.addEventListener("click", () =>
      this.copyToClipboard(referredLink.href)
    );
    referredContainer.appendChild(copyButton);
    modalLinkContainer.appendChild(referredContainer);
    this.modal.appendChild(modalLinkContainer);

    this.container.appendChild(this.modal);
    document.body.appendChild(this.container);

    document.addEventListener("click", this.handleClickOutside);
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (this.modal && !this.modal.contains(event.target as Node)) {
      this.handleCloseModal();
    }
  };

  private handleCloseModal = () => {
    if (this.container && this.modal && this.modal.parentNode) {
      document.body.removeChild(this.container);
    }
    document.removeEventListener("click", this.handleClickOutside);
  };

  private async copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
  }
}

export default new Modal();
